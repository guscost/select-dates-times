# select-datetime-range

Select a date/time range on desktop or mobile with ShadCN

## Installation

```bash
npm i -S select-datetime-range

```

```tsx
import { useState } from "react";
import { PickDateTimeRange } from "select-datetime-range";

// Then render...
export default const MyDateTimeRange = () => {
    const [range, setRange] = useState({
        start: new Date() - 86400000,
        end: new Date(),
    });
    return (
        <PickDateTimeRange
            startDate={range.start}
            endDate={range.end}
            onChange={(start, end) => setRange({ start, end })}
        />
    );
}
```

## Running storybook and building

```bash
npm i
npm run storybook
npm run storybook-build
npm run build
```
