
import React from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CountrySelect } from "./CountrySelect";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

// Define form schema with validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  countryCode: z.string().min(1, {
    message: "Please select a country code.",
  }),
  phoneNumber: z.string().min(5, {
    message: "Phone number is too short.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

type SubscriptionModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SubscriptionModal({ open, onOpenChange }: SubscriptionModalProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      countryCode: "",
      phoneNumber: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    try {
      // Store the data in Supabase
      const { error } = await supabase
        .from('Data Capture')
        .insert([
          { 
            name: data.name,
            email: data.email,
            phone: `${data.countryCode}${data.phoneNumber}`, 
            message: 'Newsletter subscription'
          }
        ]);
      
      if (error) throw error;
      
      // Show success message
      toast({
        title: "Subscription successful!",
        description: "Thank you for subscribing to our newsletter.",
      });
      
      // Close the modal
      onOpenChange(false);
      // Reset form
      form.reset();
    } catch (error) {
      console.error("Subscription error:", error);
      toast({
        title: "Subscription failed",
        description: "There was an error processing your subscription. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-xl font-serif text-wellness-700">Subscribe to our Newsletter</DialogTitle>
          <DialogDescription>
            Get the latest wellness tips and updates delivered to your inbox.
          </DialogDescription>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="grid grid-cols-3 gap-2">
              <FormField
                control={form.control}
                name="countryCode"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel>Code</FormLabel>
                    <FormControl>
                      <CountrySelect 
                        value={field.value} 
                        onValueChange={(value, maxLength) => {
                          field.onChange(value);
                          // Reset phone validation when country changes
                          form.trigger("phoneNumber");
                        }} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => {
                  const countryCode = form.watch("countryCode");
                  const country = getCountryByCode(countryCode);
                  const maxLength = country?.maxLength || 15;
                  
                  return (
                    <FormItem className="col-span-2">
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel"
                          placeholder="Phone number" 
                          {...field}
                          onChange={(e) => {
                            // Only allow numbers
                            const value = e.target.value.replace(/[^\d]/g, '');
                            // Enforce max length
                            if (value.length <= maxLength) {
                              field.onChange(value);
                            }
                          }}
                          value={field.value}
                          maxLength={maxLength}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
            </div>
            
            <div className="flex justify-end gap-2 pt-4">
              <DialogClose asChild>
                <Button variant="outline" type="button">Cancel</Button>
              </DialogClose>
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-wellness-600 hover:bg-wellness-700"
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

// Helper function to get country details by code
function getCountryByCode(code: string) {
  return countries.find(country => country.value === code);
}

// This will be used in CountrySelect.tsx as well
export const countries = [
  { label: "United States (+1)", value: "+1", maxLength: 10 },
  { label: "United Kingdom (+44)", value: "+44", maxLength: 10 },
  { label: "Canada (+1)", value: "+1", maxLength: 10 },
  { label: "Australia (+61)", value: "+61", maxLength: 9 },
  { label: "India (+91)", value: "+91", maxLength: 10 },
  { label: "Germany (+49)", value: "+49", maxLength: 11 },
  { label: "France (+33)", value: "+33", maxLength: 9 },
  { label: "Italy (+39)", value: "+39", maxLength: 10 },
  { label: "Japan (+81)", value: "+81", maxLength: 10 },
  { label: "China (+86)", value: "+86", maxLength: 11 },
  { label: "Brazil (+55)", value: "+55", maxLength: 11 },
  { label: "South Africa (+27)", value: "+27", maxLength: 9 },
  { label: "Spain (+34)", value: "+34", maxLength: 9 },
  { label: "Russia (+7)", value: "+7", maxLength: 10 },
  { label: "Mexico (+52)", value: "+52", maxLength: 10 },
];
