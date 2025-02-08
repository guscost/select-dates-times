import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { DateRange } from "./ui/calendar_v9";
import SelectDateTimeRange, { PickDateTimeRange } from "./SelectDateTimeRange";

/**
 * Select a range of dates, with times
 */
export default {
  title: "Components/SelectDateTimeRange",
  component: SelectDateTimeRange,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<typeof SelectDateTimeRange> = (args, context) => {
  const [range, setRange] = useState<DateRange>();

  return context.name === "Picker" ? (
    <PickDateTimeRange
      range={range}
      quickOptions={args.quickOptions}
      onSelect={setRange}
    />
  ) : (
    <SelectDateTimeRange
      initialRange={range}
      align={args.align}
      quickOptions={args.quickOptions}
      onSelect={setRange}
    />
  );
};

const now = new Date().valueOf();
export const Basic = Template.bind({});
export const QuickOptions = Template.bind({});
export const Picker = Template.bind({});

Basic.args = {
  align: "start",
  quickOptions: [],
};

QuickOptions.args = {
  align: "start",
  quickOptions: [
    {
      label: "Last Week",
      range: { from: new Date(now - 86400000 * 7), to: new Date(now) },
    },
    {
      label: "Last 30 Days",
      range: { from: new Date(now - 86400000 * 30), to: new Date(now) },
    },
  ],
};
