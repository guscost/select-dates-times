import React, { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar_v9";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

dayjs.extend(timezone);

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
  return (
    <>
      {quickOptions?.length ? (
        <div className="mt-2 mb-4">
          <div className="text-sm mb-1 font-medium">Quick Options</div>
          <div className="flex gap-3 flex-wrap">
            {quickOptions.map((option, idx) => (
              <div
                key={idx}
                className={`text-xs sm:text-sm font-medium cursor-pointer ${
                  date ? "text-gray-600" : "text-gray-400 hover:text-gray-500"
                }`}
                onClick={() => onSelect(option.date)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      ) : null}
      <div className="mb-4">
        <Calendar
          mode="single" // Two calendars rendered for TypeScript to accept mode prop?
          defaultMonth={date}
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
      <div className="flex gap-4 mb-2">
        <div className="w-full">
          <label className="block font-medium pb-1 text-sm">Date & Time</label>
          <div className="flex align-center gap-1">
            <Input
              type="datetime-local"
              className="cursor-text px-2.5 sm:px-3.5 w-[168px] sm:w-[194px] text-xs sm:text-sm"
              value={date ? dayjs(date).format("YYYY-MM-DDTHH:mm") : ""}
              onChange={(e) => {
                const value = dayjs(e.target.value).toDate();
                onSelect(date && value > date ? value : date);
              }}
            />
          </div>
        </div>
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

  const toggleOpen = (value?: boolean) => {
    setIsOpen(value === undefined ? !isOpen : value);
  };

  return (
    <Popover open={isOpen} onOpenChange={() => toggleOpen()}>
      <PopoverTrigger asChild>
        <Button className="px-2" variant={date ? "default" : "outline"}>
          <CalendarIcon />
        </Button>
      </PopoverTrigger>

      <PopoverContent align={align} className="p-3 pt-1 w-fit">
        <PickDate date={date} quickOptions={quickOptions} onSelect={setDate} />
        <div className="flex mt-4">
          <button
            onClick={() => onSelect(date)}
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
