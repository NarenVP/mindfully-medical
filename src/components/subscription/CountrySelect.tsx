
import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countries } from './SubscriptionModal';

type CountrySelectProps = {
  value: string;
  onValueChange: (value: string, maxLength: number) => void;
};

export function CountrySelect({ value, onValueChange }: CountrySelectProps) {
  console.log("CountrySelect rendering with value:", value);
  
  return (
    <Select 
      value={value} 
      onValueChange={(newValue) => {
        console.log("Country selected:", newValue);
        const country = countries.find(c => c.value === newValue);
        console.log("Country details:", country);
        onValueChange(newValue, country?.maxLength || 15);
      }}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Code" />
      </SelectTrigger>
      <SelectContent className="z-[200] bg-background border shadow-lg">
        <SelectGroup>
          {countries.map((country) => (
            <SelectItem key={country.value} value={country.value}>
              {country.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
