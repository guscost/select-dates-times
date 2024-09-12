import React, { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { PopoverContentProps } from "@radix-ui/react-popover";

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

export type SelectDateTimeRangeProps = {
  range?: DateRange;
  quickOptions?: Array<{ label: string; range: DateRange }>;
  showTimezone?: boolean;
  immediate?: boolean;
  onSelect: (range: DateRange) => void;
};

const EARLIEST_DATE = new Date(1900, 0, 1);
const LATEST_DATE = new Date(2199, 11, 31);

const SelectDateTimeRange: React.FC<SelectDateTimeRangeProps> = ({
  range,
  quickOptions,
  showTimezone,
  immediate,
  onSelect,
}) => {
  const now = new Date();
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange>({
    from: range ? range.from : new Date(now.valueOf() - 86400000 * 7),
    to: range ? range.to : now,
  });

  const updateDateRange = (range?: DateRange) => {
    if (range) {
      setSelectedDateRange(range);
      if (immediate) {
        onSelect(range);
      }
    }
  };

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
                  selectedDateRange?.from === option.range?.from &&
                  selectedDateRange?.to === option.range?.to
                    ? "text-gray-600"
                    : "text-gray-400 hover:text-gray-500"
                }`}
                onClick={() => updateDateRange(option.range)}
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
          defaultMonth={selectedDateRange?.from}
          selected={selectedDateRange}
          onSelect={updateDateRange}
          numberOfMonths={2}
          captionLayout="dropdown"
          startMonth={EARLIEST_DATE}
          endMonth={LATEST_DATE}
          hidden={{ before: EARLIEST_DATE, after: LATEST_DATE }}
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
                (selectedDateRange?.from ?? {})
                  ? dayjs(selectedDateRange?.from).format("YYYY-MM-DDTHH:mm")
                  : ""
              }
              onChange={(e) => {
                const value = dayjs(e.target.value).toDate();
                updateDateRange({
                  from: value,
                  to:
                    selectedDateRange?.to && value > selectedDateRange.to
                      ? value
                      : selectedDateRange?.to,
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
                (selectedDateRange?.to ?? "")
                  ? dayjs(selectedDateRange?.to).format("YYYY-MM-DDTHH:mm")
                  : ""
              }
              onChange={(e) => {
                const value = dayjs(e.target.value).toDate();
                updateDateRange({
                  to: value,
                  from:
                    selectedDateRange?.from && value < selectedDateRange.from
                      ? value
                      : selectedDateRange?.from,
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
      {!immediate && (
        <div className="flex mt-4">
          <button
            onClick={() => onSelect(selectedDateRange ?? { from: undefined })}
            className="py-2 w-full bg-primary text-white rounded-md"
          >
            Done
          </button>
        </div>
      )}
    </>
  );
};

// Popover containing a SelectDateTimeRange
const PickDateTimeRange: React.FC<
  Omit<SelectDateTimeRangeProps, "immediate"> & {
    align: PopoverContentProps["align"];
  }
> = ({ range, quickOptions, showTimezone, onSelect, align = "start" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = (value?: boolean) => {
    setIsOpen(value === undefined ? !isOpen : value);
  };

  return (
    <Popover open={isOpen} onOpenChange={() => toggleOpen()}>
      <PopoverTrigger asChild>
        <Button className="px-2" variant={range ? "default" : "outline"}>
          <CalendarIcon />
        </Button>
      </PopoverTrigger>

      <PopoverContent align={align} className="p-3 pt-1 w-fit">
        <SelectDateTimeRange
          range={range}
          quickOptions={quickOptions}
          showTimezone={showTimezone}
          onSelect={(range) => {
            toggleOpen(false);
            onSelect(range);
          }}
        />
      </PopoverContent>
    </Popover>
  );
};

export default PickDateTimeRange;
