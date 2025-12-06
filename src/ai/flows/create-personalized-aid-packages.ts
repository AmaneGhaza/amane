'use server';

/**
 * @fileOverview This file defines a Genkit flow for creating personalized aid packages for beneficiaries,
 * factoring in donor preferences using AI to optimize the impact of donations.
 *
 * - createPersonalizedAidPackages - A function that orchestrates the creation of personalized aid packages.
 * - PersonalizedAidPackagesInput - The input type for the createPersonalizedAidPackages function.
 * - PersonalizedAidPackagesOutput - The return type for the createPersonalizedAidPackages function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedAidPackagesInputSchema = z.object({
  beneficiaryNeeds: z
    .string()
    .describe('Detailed description of the beneficiary\u2019s needs and circumstances.'),
  donorPreferences: z
    .string()
    .describe('Description of the donor\u2019s preferences for aid distribution (e.g., specific causes, regions, or types of support).'),
});
export type PersonalizedAidPackagesInput = z.infer<typeof PersonalizedAidPackagesInputSchema>;

const PersonalizedAidPackagesOutputSchema = z.object({
  aidPackageDescription: z
    .string()
    .describe('A detailed description of the personalized aid package, including specific items or services, and how it aligns with both the beneficiary needs and donor preferences.'),
  rationale: z
    .string()
    .describe('Explanation of why this aid package is suitable, considering the matching of needs and preferences.'),
});
export type PersonalizedAidPackagesOutput = z.infer<typeof PersonalizedAidPackagesOutputSchema>;

export async function createPersonalizedAidPackages(
  input: PersonalizedAidPackagesInput
): Promise<PersonalizedAidPackagesOutput> {
  return createPersonalizedAidPackagesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedAidPackagesPrompt',
  input: {schema: PersonalizedAidPackagesInputSchema},
  output: {schema: PersonalizedAidPackagesOutputSchema},
  prompt: `You are an AI assistant specialized in creating personalized aid packages that match beneficiary needs with donor preferences.

  Based on the beneficiary's needs and the donor's stated preferences, create an aid package description that is tailored to both.
  Also, provide a rationale for why this package is a good fit.

  Beneficiary Needs: {{{beneficiaryNeeds}}}
  Donor Preferences: {{{donorPreferences}}}
  `,
});

const createPersonalizedAidPackagesFlow = ai.defineFlow(
  {
    name: 'createPersonalizedAidPackagesFlow',
    inputSchema: PersonalizedAidPackagesInputSchema,
    outputSchema: PersonalizedAidPackagesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
