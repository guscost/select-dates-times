import React, { useState } from "react";
import { CalendarIcon } from "@radix-ui/react-icons";

import dayjs from "dayjs";

import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { Calendar, DateRange } from "./ui/calendar_v9";
import { Input } from "./ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { DoneButton, PickerInput, QuickOption } from "./SelectDate";

export type PickDateRangeProps = {
  range?: DateRange;
  quickOptions?: Array<{ label: string; range: DateRange }>;
  showInputs?: boolean;
  onSelect: (range: DateRange | undefined) => void;
};

const EARLIEST_DATE = new Date(1900, 0, 1);
const LATEST_DATE = new Date(2199, 11, 31);

export const PickDateRange: React.FC<PickDateRangeProps> = ({
  range,
  quickOptions,
  showInputs,
  onSelect,
}) => {
  const [month, setMonth] = useState(range?.from);

  function initializeRange(e) {
    e.preventDefault();
    if (!range) {
      const to = dayjs().startOf("day").toDate();
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
          onSelect={onSelect}
          numberOfMonths={2}
          captionLayout="dropdown"
          startMonth={EARLIEST_DATE}
          endMonth={LATEST_DATE}
          hidden={{ before: EARLIEST_DATE, after: LATEST_DATE }}
          required={false}
        />
      </div>
      {showInputs && (
        <div className="flex gap-4 mb-2">
          <div className="w-1/2">
            <PickerInput label="From Date">
              <Input
                type="date"
                tabIndex={0}
                className={cn(
                  "cursor-text px-3 sm:px-4 w-[100px] sm:w-[120px] text-xs sm:text-sm",
                  !range?.from && "text-transparent",
                )}
                value={
                  range?.from ? dayjs(range?.from).format("YYYY-MM-DD") : ""
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
                onClick={initializeRange}
                onFocus={initializeRange}
              />
            </PickerInput>
          </div>
          <div className="w-1/2">
            <PickerInput label="To Date">
              <Input
                type="date"
                tabIndex={0}
                className={cn(
                  "cursor-text px-3 sm:px-4 w-[100px] sm:w-[120px] text-xs sm:text-sm",
                  !range?.to && "text-transparent",
                )}
                value={range?.to ? dayjs(range?.to).format("YYYY-MM-DD") : ""}
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
                onClick={initializeRange}
                onFocus={initializeRange}
              />
            </PickerInput>
          </div>
        </div>
      )}
    </>
  );
};

// Popover containing a PickDateRange
const SelectDateRange: React.FC<
  Omit<PickDateRangeProps, "range"> & {
    initialRange?: DateRange;
    align: "center" | "start" | "end";
  }
> = ({ initialRange, align = "start", quickOptions, showInputs, onSelect }) => {
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
          showInputs={showInputs}
          onSelect={setDateRange}
        />
        <div className="flex mt-4">
          <DoneButton
            onClick={() => {
              onSelect(dateRange);
              toggle(false);
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default SelectDateRange;
