import React, { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Calendar, DateRange } from "./ui/calendar_v9";
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

export type PickDateTimeRangeProps = {
  range?: DateRange;
  quickOptions?: Array<{ label: string; range: DateRange }>;
  showTimezone?: boolean;
  onSelect: (range: DateRange | undefined) => void;
};

export const PickDateTimeRange: React.FC<PickDateTimeRangeProps> = ({
  range,
  quickOptions,
  showTimezone,
  onSelect,
}) => {
  const [month, setMonth] = useState(range?.from);

  function initializeRange(e) {
    e.preventDefault();
    if (!range) {
      const to = dayjs().toDate();
      const from = dayjs(to).subtract(7, "days").toDate();
      onSelect({ from, to });
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
                isSelected={
                  range?.from === option.range?.from &&
                  range?.to === option.range?.to
                }
                onSelect={() => {
                  onSelect(option.range);
                  setMonth(option.range.from);
                }}
              />
            ))}
          </div>
        </div>
      ) : null}
      <div className="mt-2 mb-4">
        <Calendar
          mode="range"
          month={month}
          onMonthChange={setMonth}
          selected={range}
          onSelect={(range) => {
            onSelect(range);
            setMonth(range?.to || range?.from);
          }}
          numberOfMonths={2}
          captionLayout="dropdown"
          startMonth={EARLIEST_DATE}
          endMonth={LATEST_DATE}
          hidden={{ before: EARLIEST_DATE, after: LATEST_DATE }}
          required={false}
        />
      </div>
      <div className="flex gap-4 mb-2">
        <div className="w-1/2">
          <PickerInput label="From Date & Time">
            <Input
              type="datetime-local"
              className={cn(
                "cursor-text px-2 sm:px-3 w-[168px] sm:w-[194px] text-xs sm:text-sm",
                !range?.from && "text-transparent",
              )}
              value={
                range?.from ? dayjs(range?.from).format("YYYY-MM-DDTHH:mm") : ""
              }
              onChange={(e) => {
                const value = dayjs(e.target.value).toDate();
                if (dayjs(value).isValid()) {
                  setMonth(value);
                  onSelect({
                    from: value,
                    to: range?.to && value > range.to ? value : range?.to,
                  });
                }
              }}
              onMouseDown={initializeRange}
              onFocus={PREVENT_DEFAULT}
              onClick={PREVENT_DEFAULT}
            />
          </PickerInput>
        </div>
        <div className="w-1/2">
          <PickerInput label="To Date & Time">
            <Input
              type="datetime-local"
              className={cn(
                "cursor-text px-2 sm:px-3 w-[168px] sm:w-[194px] text-xs sm:text-sm",
                !range?.to && "text-transparent",
              )}
              value={
                range?.to ? dayjs(range?.to).format("YYYY-MM-DDTHH:mm") : ""
              }
              onChange={(e) => {
                const value = dayjs(e.target.value).toDate();
                if (dayjs(value).isValid()) {
                  setMonth(value);
                  onSelect({
                    to: value,
                    from:
                      range?.from && value < range.from ? value : range?.from,
                  });
                }
              }}
              onMouseDown={initializeRange}
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

// Popover containing a PickDateTimeRange
const SelectDateTimeRange: React.FC<
  Omit<PickDateTimeRangeProps, "range"> & {
    initialRange?: DateRange;
    align: "center" | "start" | "end";
  }
> = ({
  initialRange,
  align = "start",
  quickOptions,
  showTimezone,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = (value?: boolean) => {
    if (!isOpen) {
      setTimestampRange(initialRange);
    }
    setIsOpen(value === undefined ? !isOpen : value);
  };
  const [timestampRange, setTimestampRange] = useState<DateRange | undefined>(
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
        <PickDateTimeRange
          range={timestampRange}
          quickOptions={quickOptions}
          showTimezone={showTimezone}
          onSelect={setTimestampRange}
        />
        <div className="flex mt-4">
          <DoneButton
            onClick={() => {
              onSelect(timestampRange);
              toggle(false);
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SelectDateTimeRange;
