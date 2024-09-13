import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { DateRange } from "../src/components/ui/calendar_v9";
import SelectDateTimeRange, {
  PickDateTimeRange,
} from "../src/components/SelectDateTimeRange";

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

const Template: StoryFn<any> = (args) => {
  const [range, setRange] = useState<DateRange>();

  return args.render === "picker" ? (
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
      range: { from: now - 86400000 * 7, to: now },
    },
    {
      label: "Last 30 Days",
      range: { from: now - 86400000 * 30, to: now },
    },
  ],
};

Picker.args = {
  render: "picker",
};
