
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
  return (
    <Select 
      value={value} 
      onValueChange={(newValue) => {
        const country = countries.find(c => c.value === newValue);
        onValueChange(newValue, country?.maxLength || 15);
      }}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Code" />
      </SelectTrigger>
      <SelectContent>
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
