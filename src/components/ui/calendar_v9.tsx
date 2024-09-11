"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";

import { cn } from "../../lib/utils";
import { buttonVariants } from "./button";

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
        months: "flex flex-row gap-4",
        month_caption:
          "flex -mx-2 mb-2 relative items-center text-sm font-medium",
        dropdowns: "flex",
        nav: "absolute right-2 z-50",
        button_previous: "h-7 w-7",
        button_next: "h-7 w-7",
        chevron: "h-5 w-5",
        weeks: "w-full border-collapse space-y-1",
        week: "flex w-full mt-2",
        weekdays: "flex",
        weekday:
          "text-muted-foreground rounded-md w-6 sm:w-7 text-xs sm:text-sm font-normal text-[0.8rem]",
        day: cn(
          "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].outside)]:bg-accent/50 [&:has([aria-selected].range-end)]:rounded-r-md",
          props.mode === "range"
            ? "[&:has(>.range-end)]:rounded-r-md [&:has(>.range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
            : "[&:has([aria-selected])]:rounded-md",
        ),
        day_button: cn(
          buttonVariants({ variant: "ghost" }),
          "h-6 w-6 sm:h-7 sm:w-7 text-xs sm:text-sm p-0 font-normal aria-selected:opacity-100",
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
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
