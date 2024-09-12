import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { DateRange } from "../src/components/ui/calendar_v9";
import SelectDateRange from "../src/components/SelectDateRange";

/**
 * Picker to select or filter a range of dates
 */
export default {
  title: "Components/SelectDateRange",
  component: SelectDateRange,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<any> = (args) => {
  const [range, setRange] = useState<DateRange>();

  return (
    <SelectDateRange
      initialRange={range}
      align={args.align}
      quickOptions={args.quickOptions}
      onSelect={setRange}
    />
  );
};

export const Default = Template.bind({});

const now = new Date().valueOf();

Default.args = {
  align: "start",
  quickOptions: [
    {
      label: "Last Week",
      range: { from: now - 86400000 * 7, to: now },
    },
    {
      label: "Last 30 Days",
      range: { from: now - 86400000 * 30, to: now },
    },
  ],
};
