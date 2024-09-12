import React, { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Calendar, DateRange } from "./ui/calendar_v9";

dayjs.extend(timezone);

export type PickDateTimeRangeProps = {
  range?: DateRange;
  quickOptions?: Array<{ label: string; range: DateRange }>;
  showTimezone?: boolean;
  onSelect: (range: DateRange | undefined) => void;
};

const EARLIEST_DATE = new Date(1900, 0, 1);
const LATEST_DATE = new Date(2199, 11, 31);

const PickDateTimeRange: React.FC<PickDateTimeRangeProps> = ({
  range,
  quickOptions,
  showTimezone,
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
      <div className="mb-4">
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
      <div className="flex gap-4 mb-2">
        <div className="w-1/2">
          <label className="block font-medium pb-1 text-sm">
            From Date & Time
          </label>
          <div className="flex align-center gap-1">
            <Input
              type="datetime-local"
              className="cursor-text px-2.5 sm:px-3.5 w-[168px] sm:w-[194px] text-xs sm:text-sm"
              value={
                (range?.from ?? {})
                  ? dayjs(range?.from).format("YYYY-MM-DDTHH:mm")
                  : ""
              }
              onChange={(e) => {
                const value = dayjs(e.target.value).toDate();
                onSelect({
                  from: value,
                  to: range?.to && value > range.to ? value : range?.to,
                });
              }}
            />
          </div>
        </div>
        <div className="w-1/2">
          <label className="block font-medium pb-1 text-sm">
            To Date & Time
          </label>
          <div className="flex align-center gap-1">
            <Input
              type="datetime-local"
              className="cursor-text px-2.5 sm:px-3.5 w-[168px] sm:w-[194px] text-xs sm:text-sm"
              value={
                (range?.to ?? "")
                  ? dayjs(range?.to).format("YYYY-MM-DDTHH:mm")
                  : ""
              }
              onChange={(e) => {
                const value = dayjs(e.target.value).toDate();
                onSelect({
                  to: value,
                  from: range?.from && value < range.from ? value : range?.from,
                });
              }}
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

// Popover containing a PickDateTimeRange
const SelectDateTimeRange: React.FC<
  Omit<PickDateTimeRangeProps, "range"> & {
    align: "center" | "start" | "end";
    initialRange?: DateRange;
  }
> = ({
  initialRange,
  quickOptions,
  showTimezone,
  onSelect,
  align = "start",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = (value?: boolean) => {
    setIsOpen(value === undefined ? !isOpen : value);
  };
  const [selectedDateRange, setSelectedDateRange] = useState<
    DateRange | undefined
  >(initialRange);

  return (
    <Popover open={isOpen} onOpenChange={() => toggleOpen()}>
      <PopoverTrigger asChild>
        <Button className="px-2" variant={initialRange ? "default" : "outline"}>
          <CalendarIcon />
        </Button>
      </PopoverTrigger>

      <PopoverContent align={align} className="p-3 pt-1 w-fit">
        <PickDateTimeRange
          range={initialRange}
          quickOptions={quickOptions}
          showTimezone={showTimezone}
          onSelect={setSelectedDateRange}
        />
        <div className="flex mt-4">
          <button
            onClick={() => {
              toggleOpen(false);
              onSelect(selectedDateRange ?? { from: undefined });
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

export default SelectDateTimeRange;
