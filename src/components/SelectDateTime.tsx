import React, { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar_v9";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

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
                  timestamp
                    ? "text-gray-600"
                    : "text-gray-400 hover:text-gray-500"
                }`}
                onClick={() => onSelect(option.timestamp)}
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
          defaultMonth={timestamp}
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
          <label className="block font-medium pb-1 text-sm">Date & Time</label>
          <div className="flex align-center gap-1">
            <Input
              type="datetime-local"
              className="cursor-text px-2.5 sm:px-3.5 w-[168px] sm:w-[194px] text-xs sm:text-sm"
              value={
                timestamp ? dayjs(timestamp).format("YYYY-MM-DDTHH:mm") : ""
              }
              onChange={(e) => onSelect(dayjs(e.target.value).toDate())}
            />
          </div>
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
    align?: "center" | "start" | "end";
    initialTimestamp?: Date;
  }
> = ({
  initialTimestamp,
  quickOptions,
  showTimezone,
  onSelect,
  align = "start",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timestamp, setTimestamp] = useState<Date | undefined>(
    initialTimestamp,
  );

  const toggleOpen = (value?: boolean) => {
    setIsOpen(value === undefined ? !isOpen : value);
  };

  return (
    <Popover open={isOpen} onOpenChange={() => toggleOpen()}>
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
              setIsOpen(false);
              onSelect(timestamp);
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
