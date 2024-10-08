import React, { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar_v9";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  DoneButton,
  EARLIEST_DATE,
  LATEST_DATE,
  PickerInput,
  PREVENT_DEFAULT,
  QuickOption,
} from "./SelectDate";

dayjs.extend(timezone);

export type PickDateTimeProps = {
  timestamp?: Date;
  quickOptions?: Array<{ label: string; timestamp: Date }>;
  numberOfMonths?: 1 | 2;
  showTimezone?: boolean;
  required?: boolean;
  onSelect: (datetime: Date | undefined) => void;
};

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
              <QuickOption
                key={idx}
                label={option.label}
                isSelected={timestamp === option.timestamp}
                onSelect={() => {
                  onSelect(option.timestamp);
                  setMonth(option.timestamp);
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
          selected={timestamp}
          onSelect={(timestamp) => {
            onSelect(timestamp);
            setMonth(timestamp);
          }}
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
                "cursor-text px-2 sm:px-3 w-[168px] sm:w-[194px] text-xs sm:text-sm",
                !timestamp && "text-transparent",
              )}
              value={
                timestamp ? dayjs(timestamp).format("YYYY-MM-DDTHH:mm") : ""
              }
              onChange={(e) => {
                const value = dayjs(e.target.value).toDate();
                if (dayjs(value).isValid()) {
                  setMonth(value);
                  onSelect(value);
                }
              }}
              onMouseDown={initializeTimestamp}
              onFocus={PREVENT_DEFAULT}
              onClick={PREVENT_DEFAULT}
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
          <DoneButton
            onClick={() => {
              onSelect(timestamp);
              toggle(false);
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SelectDateTime;
