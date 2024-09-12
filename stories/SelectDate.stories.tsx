import { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import SelectDate from "../src/components/SelectDate";

/**
 * Picker to select or filter a range of dates, with times
 */
export default {
  title: "Components/SelectDate",
  component: SelectDate,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} as Meta;

const Template: StoryFn<any> = (args) => {
  const [date, setDate] = useState<Date>();

  return (
    <SelectDate
      initialDate={date}
      align={args.align}
      quickOptions={args.quickOptions}
      onSelect={setDate}
    />
  );
};

export const Default = Template.bind({});

const now = new Date().valueOf();

Default.args = {
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
