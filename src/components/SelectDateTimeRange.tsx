import React, { useState } from "react";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@radix-ui/react-icons";
import { DateRange as WrappedDateRange, DropdownProps } from "react-day-picker";

import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../components/ui/popover";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import { ScrollArea } from "./ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

dayjs.extend(timezone);

export type DateRange = WrappedDateRange;

export type SelectDateTimeRangeProps = {
  range?: DateRange;
  align?: "center" | "end" | "start";
  quickOptions?: Array<{ label: string; range: DateRange }>;
  initialDateRange?: DateRange;
  showTimezone?: boolean;
  immediate?: boolean;
  onSelect: (range: DateRange) => void;
};

const EARLIEST_DATE = new Date(1900, 0, 1);
const LATEST_DATE = new Date(2199, 11, 31);

const SelectDateTimeRange: React.FC<SelectDateTimeRangeProps> = ({
  range,
  align = "start",
  quickOptions,
  initialDateRange,
  showTimezone,
  immediate,
  onSelect,
}) => {
  const now = new Date();
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: initialDateRange
      ? initialDateRange.from
      : new Date(now.valueOf() - 86400000 * 7),
    to: initialDateRange ? initialDateRange.to : now,
  });

  const updateDateRange = (range: DateRange) => {
    setDateRange(range);
    if (immediate) {
      onSelect(range);
    }
  };

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
                  dateRange?.from === option.range?.from &&
                  dateRange?.to === option.range?.to
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
      <div className="-mx-3 mb-2">
        <Calendar
          mode="range"
          defaultMonth={dateRange?.from}
          selected={dateRange}
          onSelect={updateDateRange}
          numberOfMonths={2}
          captionLayout="dropdown-buttons"
          fromDate={EARLIEST_DATE}
          toDate={LATEST_DATE}
          components={{
            CaptionLabel: () => null,
            Dropdown: ({
              value,
              onChange,
              children,
              ...props
            }: DropdownProps) => {
              const options = React.Children.toArray(
                children,
              ) as React.ReactElement<React.HTMLProps<HTMLOptionElement>>[];
              const selected = options.find(
                (child) => child.props.value === value,
              );
              const handleChange = (value: string) => {
                const changeEvent = {
                  target: { value },
                } as React.ChangeEvent<HTMLSelectElement>;
                onChange?.(changeEvent);
              };
              return (
                <Select
                  value={value?.toString()}
                  onValueChange={(value) => {
                    handleChange(value);
                  }}
                >
                  <SelectTrigger className="pr-0 -mr-3 sm:-mr-2.5 h-7 ring-0 focus:ring-0 shadow-none focus:shadow-none border-none focus:border-none">
                    <SelectValue>{selected?.props?.children}</SelectValue>
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <ScrollArea className="h-80">
                      {options.map((option, id: number) => (
                        <SelectItem
                          key={`${option.props.value}-${id}`}
                          value={option.props.value?.toString() ?? ""}
                        >
                          {option.props.children}
                        </SelectItem>
                      ))}
                    </ScrollArea>
                  </SelectContent>
                </Select>
              );
            },
            IconLeft: () => <ChevronLeftIcon className="h-4 w-4" />,
            IconRight: () => <ChevronRightIcon className="h-4 w-4" />,
          }}
        />
      </div>
      <div className="flex gap-4 mb-4">
        <div className="w-1/2">
          <label className="block font-medium pb-1 text-sm">
            From Date & Time
          </label>
          <div className="flex align-center gap-1">
            <Input
              type="datetime-local"
              className="cursor-text px-4 w-[168px] sm:w-[194px] text-xs sm:text-sm"
              value={
                (dateRange?.from ?? {})
                  ? dayjs(dateRange?.from).format("YYYY-MM-DDTHH:mm")
                  : ""
              }
              onChange={(e) => {
                const value = dayjs(e.target.value).toDate();
                updateDateRange({
                  from: value,
                  to:
                    dateRange?.to && value > dateRange.to
                      ? value
                      : dateRange?.to,
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
              className="cursor-text px-4 w-[168px] sm:w-[194px] text-xs sm:text-sm"
              value={
                (dateRange?.to ?? "")
                  ? dayjs(dateRange?.to).format("YYYY-MM-DDTHH:mm")
                  : ""
              }
              onChange={(e) => {
                const value = dayjs(e.target.value).toDate();
                updateDateRange({
                  to: value,
                  from:
                    dateRange?.from && value < dateRange.from
                      ? value
                      : dateRange?.from,
                });
              }}
            />
          </div>
        </div>
      </div>
      {showTimezone && (
        <div className="text-xs font-semibold text-gray-600 flex justify-end mb-4">
          TZ: {(dayjs as any)?.["tz"]?.guess()}
        </div>
      )}
      {!immediate && (
        <div className="flex">
          <button
            onClick={() => onSelect(dateRange ?? { from: undefined })}
            className="py-2 w-full bg-primary text-white rounded-md"
          >
            Done
          </button>
        </div>
      )}
    </>
  );
};

// Select component (button icon popover wi date time range picker)
const PickDateTimeRange: React.FC<SelectDateTimeRangeProps> = ({
  range,
  align = "start",
  quickOptions,
  initialDateRange,
  showTimezone,
  onSelect,
}) => {
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
          align={align}
          quickOptions={quickOptions}
          initialDateRange={initialDateRange}
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
