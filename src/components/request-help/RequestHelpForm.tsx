'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import type { Dictionary } from '@/lib/types';
import { useState } from 'react';

export function RequestHelpForm({ dict }: { dict: Dictionary }) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const formSchema = z.object({
    fullName: z.string().min(2, {
      message: 'Name must be at least 2 characters.',
    }),
    city: z.string().min(1, { message: 'Please select a city.' }),
    helpCategory: z.string().min(1, { message: 'Please select a category.' }),
    description: z.string().min(20, {
      message: 'Description must be at least 20 characters.',
    }),
    contactPreference: z
      .string()
      .min(1, { message: 'Please select a contact preference.' }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: '',
      city: '',
      helpCategory: '',
      description: '',
      contactPreference: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    // Here you would typically call your backend/API to submit the form data
    // For demonstration, we'll just simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // You could also call the Genkit AI flow here
    // Example:
    // try {
    //   const result = await categorizeAndMatchHelpRequests({ requestDescription: values.description });
    //   console.log('AI categorization:', result);
    // } catch (error) {
    //   console.error('AI flow failed:', error);
    // }

    setIsLoading(false);
    toast({
      title: 'Success!',
      description: dict.requestHelpPage.form.success,
      variant: 'default',
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dict.requestHelpPage.form.fullName.label}</FormLabel>
              <FormControl>
                <Input placeholder={dict.requestHelpPage.form.fullName.placeholder} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dict.requestHelpPage.form.city.label}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  dir={form.control.formState.isSubmitting ? undefined : (document.documentElement.dir as 'ltr' | 'rtl' | undefined)}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={dict.requestHelpPage.form.city.placeholder} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="gaza-city">Gaza City</SelectItem>
                    <SelectItem value="rafah">Rafah</SelectItem>
                    <SelectItem value="khan-yunis">Khan Yunis</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="helpCategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{dict.requestHelpPage.form.helpCategory.label}</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  dir={form.control.formState.isSubmitting ? undefined : (document.documentElement.dir as 'ltr' | 'rtl' | undefined)}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={dict.requestHelpPage.form.helpCategory.placeholder} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.entries(dict.requestHelpPage.helpTypes).map(([key, value]) => (
                        <SelectItem key={key} value={key}>{value}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dict.requestHelpPage.form.description.label}</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={dict.requestHelpPage.form.description.placeholder}
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="contactPreference"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{dict.requestHelpPage.form.contactPreference.label}</FormLabel>
              <Select
                onValueChange={field.onChange}
                defaultValue={field.value}
                dir={form.control.formState.isSubmitting ? undefined : (document.documentElement.dir as 'ltr' | 'rtl' | undefined)}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder={dict.requestHelpPage.form.contactPreference.placeholder} />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {Object.entries(dict.requestHelpPage.contactTypes).map(([key, value]) => (
                        <SelectItem key={key} value={key}>{value}</SelectItem>
                    ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" disabled={isLoading}>
          {isLoading ? 'Submitting...' : dict.buttons.submit}
        </Button>
      </form>
    </Form>
  );
}
