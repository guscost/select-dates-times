import React, { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";

import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar_v9";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

export type PickDateProps = {
  date?: Date;
  quickOptions?: Array<{ label: string; date: Date }>;
  numberOfMonths?: 1 | 2;
  required?: boolean;
  onSelect: (date: Date | undefined) => void;
};

const EARLIEST_DATE = new Date(1900, 0, 1);
const LATEST_DATE = new Date(2199, 11, 31);

export const PickDate: React.FC<PickDateProps> = ({
  date,
  quickOptions,
  numberOfMonths,
  required = false,
  onSelect,
}) => {
  const [month, setMonth] = useState(date);

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
                  date === option.date
                    ? "text-gray-600"
                    : "text-gray-400 hover:text-gray-500"
                }`}
                onClick={() => {
                  onSelect(option.date);
                  setMonth(option.date);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <div className="mt-2 mb-4">
        <Calendar
          mode="single" // Two calendars rendered for TypeScript to accept mode prop?
          month={month}
          onMonthChange={setMonth}
          selected={date}
          onSelect={onSelect}
          numberOfMonths={numberOfMonths || 1}
          captionLayout="dropdown"
          startMonth={EARLIEST_DATE}
          endMonth={LATEST_DATE}
          hidden={{ before: EARLIEST_DATE, after: LATEST_DATE }}
          required={required}
        />
      </div>
    </>
  );
};

// Popover containing a PickDate
const SelectDate: React.FC<
  Omit<PickDateProps, "date"> & {
    align?: "center" | "start" | "end";
    initialDate?: Date;
  }
> = ({ initialDate, quickOptions, onSelect, align = "start" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [date, setDate] = useState<Date | undefined>(initialDate);

  const toggle = (value?: boolean) => {
    if (!isOpen) {
      setDate(initialDate);
    }
    setIsOpen(value === undefined ? !isOpen : value);
  };

  return (
    <Popover open={isOpen} onOpenChange={toggle}>
      <PopoverTrigger asChild>
        <Button className="px-2" variant={initialDate ? "default" : "outline"}>
          <CalendarIcon />
        </Button>
      </PopoverTrigger>

      <PopoverContent align={align} className="p-3 pt-1 w-fit">
        <PickDate date={date} quickOptions={quickOptions} onSelect={setDate} />
        <div className="flex mt-4">
          <button
            onClick={() => {
              onSelect(date);
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

export default SelectDate;
