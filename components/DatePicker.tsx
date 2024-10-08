// File: components/DatePicker.tsx

"use client";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DatePickerDemoProps {
  text: string;
  selectedDate: Date | undefined;
  onDateChange: (date: Date | undefined) => void;
}

export function DatePickerDemo({
  text,
  selectedDate,
  onDateChange,
}: DatePickerDemoProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "group w-auto justify-start text-left font-normal bg-transparent hover:bg-transparent border-none text-custom-light-apricot hover:text-custom-light-apricot/50",
            !selectedDate && "text-muted-foreground"
          )}
        >
          <CalendarIcon
            className="mr-2 h-7 w-7 text-custom-light-apricot"
            size={30}
            width={40}
          />
          {selectedDate
            ? format(selectedDate, "PPP")
            : <span className="text-custom-light-apricot group-hover:text-custom-light-apricot/70">{text}</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={onDateChange}
          initialFocus
          className="text-custom-light-apricot"
        />
      </PopoverContent>
    </Popover>
  );
}
