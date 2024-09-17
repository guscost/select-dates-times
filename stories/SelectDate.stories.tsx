import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import SelectDate, { PickDate } from "../src/components/SelectDate";

/**
 * Select a date
 */
export default {
  title: "Components/SelectDate",
  component: SelectDate,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<typeof SelectDate> = (args) => {
  const [date, setDate] = useState<Date>();
  return args["render"] === "picker" ? (
    <PickDate
      date={date}
      quickOptions={args.quickOptions}
      showInput={args.showInput}
      onSelect={setDate}
    />
  ) : (
    <SelectDate
      initialDate={date}
      align={args.align}
      quickOptions={args.quickOptions}
      showInput={args.showInput}
      onSelect={setDate}
    />
  );
};

const now = new Date().valueOf();
export const Basic = Template.bind({});
export const QuickOptions = Template.bind({});
export const WithInput = Template.bind({});
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
      date: now - 86400000 * 7,
    },
    {
      label: "30 Days Ago",
      date: now - 86400000 * 30,
    },
  ],
  showTimezone: false,
};

WithInput.args = {
  showInput: true,
};

Picker.args = {
  render: "picker",
};
