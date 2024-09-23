# select-dates-times

Select UI for dates and times, on desktop or mobile, with ShadCN

## Demo

https://guscost.github.io/select-dates-times/storybook-static/?path=/story/components-selectdatetimerange--picker

## Installation

```bash
npm i -S select-dates-times

```

```tsx
import { useState } from "react";
import { SelectDateTimeRange } from "select-dates-times";

// Then render...
export default const MyDateTimeRangePicker = () => {
    const [range, setRange] = useState({
        from: new Date() - 86400000,
        to: new Date(),
    });
    return (
        <SelectDateTimeRange initialRange={range} onSelect={setRange} />
    );
}
```

## Building locally and running Storybook

```bash
npm i
npm run build
npm run storybook-build
npm run storybook
```
