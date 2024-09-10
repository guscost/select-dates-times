import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import PickDateTimeRange, {
  DateRange,
} from "../src/components/SelectDateTimeRange";

/**
 * Picker to select or filter a range of dates, with times
 */
export default {
  title: "Components/PickDateTimeRange",
  component: PickDateTimeRange,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<any> = (args) => {
  const [range, setRange] = useState<DateRange>();

  return (
    <PickDateTimeRange
      range={range}
      align={args.align}
      quickOptions={args.quickOptions}
      showTimezone={args.showTimezone}
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
  showTimezone: false,
};
