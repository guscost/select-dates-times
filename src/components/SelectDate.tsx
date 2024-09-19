import React, { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";

import dayjs from "dayjs";

import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar_v9";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Input } from "./ui/input";

export const PickerInput: React.FC<{
  label: string;
  children: React.ReactNode;
}> = ({ label, children }) => (
  <>
    <label className="block font-medium pb-1 text-sm">{label}</label>
    <div className="flex align-center gap-1">{children}</div>{" "}
  </>
);

export const QuickOption: React.FC<{
  label: string;
  isSelected: boolean;
  onSelect: () => void;
}> = ({ label, isSelected, onSelect }) => {
  return (
    <button
      tabIndex={0}
      className={`text-xs sm:text-sm cursor-pointer select-none ${
        isSelected ? "text-gray-600" : "text-gray-400 hover:text-gray-500"
      }`}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          onSelect();
        }
      }}
      onClick={onSelect}
    >
      {label}
    </button>
  );
};

export type PickDateProps = {
  date?: Date;
  quickOptions?: Array<{ label: string; date: Date }>;
  numberOfMonths?: 1 | 2;
  required?: boolean;
  showInput?: boolean;
  onSelect: (date: Date | undefined) => void;
};

const EARLIEST_DATE = new Date(1900, 0, 1);
const LATEST_DATE = new Date(2199, 11, 31);

export const PickDate: React.FC<PickDateProps> = ({
  date,
  quickOptions,
  numberOfMonths,
  required = false,
  showInput = false,
  onSelect,
}) => {
  const [month, setMonth] = useState(date);

  function initializeDate(e) {
    e.preventDefault();
    if (!date) {
      const today = dayjs().startOf("day").toDate();
      onSelect(today);
    }
  }

  return (
    <>
      {quickOptions?.length ? (
        <div className="my-2">
          <div className="text-sm mb-1 font-medium">Quick Options</div>
          <div className="flex gap-3 flex-wrap">
            {quickOptions.map((option, idx) => (
              <QuickOption
                key={idx}
                label={option.label}
                isSelected={date === option.date}
                onSelect={() => {
                  onSelect(option.date);
                  setMonth(option.date);
                }}
              />
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
      {showInput && (
        <div className="flex gap-4 mb-2">
          <div className="w-full">
            <PickerInput label="Date">
              <Input
                type="date"
                className={cn(
                  "cursor-text px-3 sm:px-4 w-[100px] sm:w-[120px] text-xs sm:text-sm",
                  !date && "text-transparent",
                )}
                value={date ? dayjs(date).format("YYYY-MM-DD") : ""}
                onChange={(e) => {
                  const value = dayjs(e.target.value).toDate();
                  if (dayjs(value).isValid()) {
                    setMonth(value);
                    onSelect(value);
                  }
                }}
                onClick={initializeDate}
                onFocus={initializeDate}
              />
            </PickerInput>
          </div>
        </div>
      )}
    </>
  );
};

// Popover containing a PickDate
const SelectDate: React.FC<
  Omit<PickDateProps, "date"> & {
    initialDate?: Date;
    align?: "center" | "start" | "end";
  }
> = ({ initialDate, align = "start", quickOptions, showInput, onSelect }) => {
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
        <PickDate
          date={date}
          quickOptions={quickOptions}
          showInput={showInput}
          onSelect={setDate}
        />
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
