"use client";

import * as React from "react";
import {
  DateRange as WrappedDateRange,
  DayPicker,
  DropdownProps,
} from "react-day-picker";

import { cn } from "../../lib/utils";
import { buttonVariants } from "./button";
import { ScrollArea } from "./scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

export type DateRange = WrappedDateRange;
export type CalendarProps = React.ComponentProps<typeof DayPicker>;

// ShadCN calendar updated for react-day-picker v9 and mobile sizing
function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={className}
      classNames={{
        months: "flex gap-4",
        month_caption:
          "flex -mx-3 mb-2 relative items-center text-sm font-medium",
        dropdowns: "flex",
        nav: "absolute right-3 sm:right-0 z-50",
        button_previous: "h-7 w-4 sm:w-7",
        button_next: "h-7 w-4 sm:w-7",
        chevron: "h-4 w-4",
        weeks: "w-full border-collapse space-y-1",
        week: "flex w-full mt-2",
        weekdays: "flex",
        weekday:
          "text-muted-foreground rounded-md w-6 sm:w-7 text-xs sm:text-sm font-normal text-[0.8rem]",
        day: cn(
          "relative p-0 focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].outside)]:bg-accent/50",
          props.mode === "range"
            ? "[&.range-end]:rounded-r-md [&.range-start]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md",
        ),
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "[&:hover]:bg-transparent [&:hover]:text-inherit", // Disable the ghost button hover
          "h-6 w-6 sm:h-7 sm:w-7 p-0 text-xs sm:text-sm text-center font-normal",
        ),
        range_start: "range-start",
        range_end: "range-end",
        selected:
          "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
        today: "bg-accent text-accent-foreground",
        outside:
          "outside text-muted-foreground opacity-50  aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
        disabled: "text-muted-foreground opacity-50",
        range_middle:
          "aria-selected:bg-accent aria-selected:text-accent-foreground",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Dropdown: ({ value, options, onChange, ...props }: DropdownProps) => {
          const selected = options?.find((option) => option.value === value);
          const handleChange = (value: string) => {
            const changeEvent = {
              target: { value },
            } as React.ChangeEvent<HTMLSelectElement>;
            onChange?.(changeEvent);
          };
          return (
            <Select
              value={value?.toString()}
              onValueChange={(value) => {
                handleChange(value);
              }}
            >
              <SelectTrigger className="pr-0 -mr-3 sm:-mr-2.5 h-7 ring-0 focus:ring-0 shadow-none focus:shadow-none border-none focus:border-none">
                <SelectValue>{selected?.label}</SelectValue>
              </SelectTrigger>
              <SelectContent position="popper">
                <ScrollArea className="h-80">
                  {options?.map((option, id: number) => (
                    <SelectItem
                      key={`${option.value}-${id}`}
                      value={option.value?.toString() ?? ""}
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </ScrollArea>
              </SelectContent>
            </Select>
          );
        },
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
