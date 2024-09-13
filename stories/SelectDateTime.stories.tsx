import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import SelectDateTime, { PickDateTime } from "../src/components/SelectDateTime";

/**
 * Select a date with time
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

  return args.render === "picker" ? (
    <PickDateTime
      timestamp={timestamp}
      quickOptions={args.quickOptions}
      onSelect={setTimestamp}
    />
  ) : (
    <SelectDateTime
      initialTimestamp={timestamp}
      align={args.align}
      quickOptions={args.quickOptions}
      showTimezone={args.showTimezone}
      onSelect={setTimestamp}
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
      label: "7 Days Ago",
      timestamp: now - 86400000 * 7,
    },
    {
      label: "30 Days Ago",
      timestamp: now - 86400000 * 30,
    },
  ],
  showTimezone: false,
};

Picker.args = {
  render: "picker",
};
