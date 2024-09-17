import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { DateRange } from "../src/components/ui/calendar_v9";
import SelectDateRange, {
  PickDateRange,
} from "../src/components/SelectDateRange";

/**
 * Select a range of dates
 */
export default {
  title: "Components/SelectDateRange",
  component: SelectDateRange,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<typeof SelectDateRange> = (args) => {
  const [range, setRange] = useState<DateRange>();

  return args["render"] === "picker" ? (
    <PickDateRange
      range={range}
      quickOptions={args.quickOptions}
      showInputs={args.showInputs}
      onSelect={setRange}
    />
  ) : (
    <SelectDateRange
      initialRange={range}
      align={args.align}
      quickOptions={args.quickOptions}
      showInputs={args.showInputs}
      onSelect={setRange}
    />
  );
};

const now = new Date().valueOf();
export const Basic = Template.bind({});
export const QuickOptions = Template.bind({});
export const WithInputs = Template.bind({});
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

WithInputs.args = {
  showInputs: true,
};

Picker.args = {
  render: "picker",
};
