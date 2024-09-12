import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import SelectDateTime from "../src/components/SelectDateTime";

/**
 * Picker to select or filter a range of dates, with times
 */
export default {
  title: "Components/SelectDateTime",
  component: SelectDateTime,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<any> = (args) => {
  const [timestamp, setTimestamp] = useState<Date>();

  return (
    <SelectDateTime
      initialTimestamp={timestamp}
      align={args.align}
      quickOptions={args.quickOptions}
      showTimezone={args.showTimezone}
      onSelect={setTimestamp}
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
