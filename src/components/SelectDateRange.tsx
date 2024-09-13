import React, { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";

import { Button } from "./ui/button";
import { Calendar, DateRange } from "./ui/calendar_v9";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export type PickDateRangeProps = {
  range?: DateRange;
  quickOptions?: Array<{ label: string; range: DateRange }>;
  onSelect: (range: DateRange | undefined) => void;
};

const EARLIEST_DATE = new Date(1900, 0, 1);
const LATEST_DATE = new Date(2199, 11, 31);

export const PickDateRange: React.FC<PickDateRangeProps> = ({
  range,
  quickOptions,
  onSelect,
}) => {
  return (
    <>
      {quickOptions?.length ? (
        <div className="my-2">
          <div className="text-sm mb-1 font-medium">Quick Options</div>
          <div className="flex gap-3 flex-wrap">
            {quickOptions.map((option, idx) => (
              <div
                key={idx}
                className={`text-xs sm:text-sm font-medium cursor-pointer ${
                  range?.from === option.range?.from &&
                  range?.to === option.range?.to
                    ? "text-gray-600"
                    : "text-gray-400 hover:text-gray-500"
                }`}
                onClick={() => onSelect(option.range)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <div className="mt-2 mb-4">
        <Calendar
          mode="range"
          defaultMonth={range?.from}
          selected={range}
          onSelect={onSelect}
          numberOfMonths={2}
          captionLayout="dropdown"
          startMonth={EARLIEST_DATE}
          endMonth={LATEST_DATE}
          hidden={{ before: EARLIEST_DATE, after: LATEST_DATE }}
          required={false}
        />
      </div>
    </>
  );
};

// Popover containing a PickDateRange
const SelectDateRange: React.FC<
  Omit<PickDateRangeProps, "range"> & {
    align: "center" | "start" | "end";
    initialRange?: DateRange;
  }
> = ({ initialRange, quickOptions, onSelect, align = "start" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (value?: boolean) => {
    if (!isOpen) {
      setDateRange(initialRange);
    }
    setIsOpen(value === undefined ? !isOpen : value);
  };
  const [dateRange, setDateRange] = useState<DateRange | undefined>(
    initialRange,
  );

  return (
    <Popover open={isOpen} onOpenChange={toggle}>
      <PopoverTrigger asChild>
        <Button className="px-2" variant={initialRange ? "default" : "outline"}>
          <CalendarIcon />
        </Button>
      </PopoverTrigger>

      <PopoverContent align={align} className="p-3 pt-1 w-fit">
        <PickDateRange
          range={dateRange}
          quickOptions={quickOptions}
          onSelect={setDateRange}
        />
        <div className="flex mt-4">
          <button
            onClick={() => {
              onSelect(dateRange ?? { from: undefined });
              toggle(false);
            }}
            className="py-2 w-full bg-primary text-white rounded-md"
          >
            Done
          </button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SelectDateRange;
