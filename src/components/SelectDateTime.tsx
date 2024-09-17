import React, { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar_v9";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { PickerInput } from "./SelectDate";

dayjs.extend(timezone);

export type PickDateTimeProps = {
  timestamp?: Date;
  quickOptions?: Array<{ label: string; timestamp: Date }>;
  numberOfMonths?: 1 | 2;
  showTimezone?: boolean;
  required?: boolean;
  onSelect: (datetime: Date | undefined) => void;
};

const EARLIEST_DATE = new Date(1900, 0, 1);
const LATEST_DATE = new Date(2199, 11, 31);

export const PickDateTime: React.FC<PickDateTimeProps> = ({
  timestamp,
  quickOptions,
  numberOfMonths,
  showTimezone,
  required = false,
  onSelect,
}) => {
  const [month, setMonth] = useState(timestamp);

  function initializeTimestamp(e) {
    e.preventDefault();
    if (!timestamp) {
      const now = dayjs().toDate();
      onSelect(now);
    }
  }

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
                  timestamp === option.timestamp
                    ? "text-gray-600"
                    : "text-gray-400 hover:text-gray-500"
                }`}
                onClick={() => {
                  onSelect(option.timestamp);
                  setMonth(option.timestamp);
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
          selected={timestamp}
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
          <PickerInput label="Date & Time">
            <Input
              type="datetime-local"
              className={cn(
                "cursor-text px-3 sm:px-4 w-[168px] sm:w-[194px] text-xs sm:text-sm",
                !timestamp && "text-transparent",
              )}
              value={
                timestamp ? dayjs(timestamp).format("YYYY-MM-DDTHH:mm") : ""
              }
              onChange={(e) => {
                const value = dayjs(e.target.value).toDate();
                setMonth(value);
                onSelect(value);
              }}
              onClick={initializeTimestamp}
              onFocus={initializeTimestamp}
            />
          </PickerInput>
        </div>
      </div>
      {showTimezone && (
        <div className="text-xs text-gray-600 flex justify-end mb-2">
          Time Zone: {(dayjs as any)?.["tz"]?.guess()}
        </div>
      )}
    </>
  );
};

// Popover containing a PickDateTime
const SelectDateTime: React.FC<
  Omit<PickDateTimeProps, "timestamp"> & {
    initialTimestamp?: Date;
    align?: "center" | "start" | "end";
  }
> = ({
  initialTimestamp,
  align = "start",
  quickOptions,
  showTimezone,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timestamp, setTimestamp] = useState<Date | undefined>(
    initialTimestamp,
  );

  const toggle = (value?: boolean) => {
    if (!isOpen) {
      setTimestamp(initialTimestamp);
    }
    setIsOpen(value === undefined ? !isOpen : value);
  };

  return (
    <Popover open={isOpen} onOpenChange={toggle}>
      <PopoverTrigger asChild>
        <Button
          className="px-2"
          variant={initialTimestamp ? "default" : "outline"}
        >
          <CalendarIcon />
        </Button>
      </PopoverTrigger>

      <PopoverContent align={align} className="p-3 pt-1 w-fit">
        <PickDateTime
          timestamp={timestamp}
          quickOptions={quickOptions}
          showTimezone={showTimezone}
          onSelect={setTimestamp}
        />
        <div className="flex mt-4">
          <button
            onClick={() => {
              onSelect(timestamp);
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

export default SelectDateTime;
