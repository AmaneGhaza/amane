'use server';

/**
 * @fileOverview This file defines a Genkit flow for categorizing and matching help requests with appropriate aid categories.
 *
 * - categorizeAndMatchHelpRequests - A function that handles the categorization and matching process.
 * - CategorizeAndMatchHelpRequestsInput - The input type for the categorizeAndMatchHelpRequests function.
 * - CategorizeAndMatchHelpRequestsOutput - The return type for the categorizeAndMatchHelpRequests function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CategorizeAndMatchHelpRequestsInputSchema = z.object({
  requestDescription: z
    .string()
    .describe('A detailed description of the help request from the beneficiary.'),
});
export type CategorizeAndMatchHelpRequestsInput = z.infer<
  typeof CategorizeAndMatchHelpRequestsInputSchema
>;

const CategorizeAndMatchHelpRequestsOutputSchema = z.object({
  category: z
    .string()
    .describe(
      'The categorized type of help needed (e.g., medical, food, shelter, education, elder support, financial aid).'
    ),
  donorPreferences: z
    .string()
    .describe(
      'A summary of the donor preferences which should be considered when creating personalized aid packages for beneficiaries.'
    ),
});

export type CategorizeAndMatchHelpRequestsOutput = z.infer<
  typeof CategorizeAndMatchHelpRequestsOutputSchema
>;

export async function categorizeAndMatchHelpRequests(
  input: CategorizeAndMatchHelpRequestsInput
): Promise<CategorizeAndMatchHelpRequestsOutput> {
  return categorizeAndMatchHelpRequestsFlow(input);
}

const categorizeAndMatchHelpRequestsPrompt = ai.definePrompt({
  name: 'categorizeAndMatchHelpRequestsPrompt',
  input: {schema: CategorizeAndMatchHelpRequestsInputSchema},
  output: {schema: CategorizeAndMatchHelpRequestsOutputSchema},
  prompt: `You are an AI assistant helping to categorize help requests from beneficiaries in Gaza and match them with the most suitable categories of aid, while also considering donor preferences for personalized aid packages.

Given the following help request description, determine the most appropriate category of aid (medical, food, shelter, education, elder support, financial aid) and summarize donor preferences.

Request Description: {{{requestDescription}}}

Respond with the category and a short, concise summary of donor preferences which should be considered when creating personalized aid packages for beneficiaries.`,
});

const categorizeAndMatchHelpRequestsFlow = ai.defineFlow(
  {
    name: 'categorizeAndMatchHelpRequestsFlow',
    inputSchema: CategorizeAndMatchHelpRequestsInputSchema,
    outputSchema: CategorizeAndMatchHelpRequestsOutputSchema,
  },
  async input => {
    const {output} = await categorizeAndMatchHelpRequestsPrompt(input);
    return output!;
  }
);
