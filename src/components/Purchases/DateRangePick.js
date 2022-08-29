import {
  addDays,
  endOfDay,
  startOfDay,
  startOfYear,
  startOfMonth,
  endOfMonth,
  endOfYear,
  addMonths,
  addYears,
  startOfWeek,
  endOfWeek,
  isSameDay,
  differenceInCalendarDays
} from "date-fns";
import { useState } from "react";
import { DateRangePicker, defaultStaticRanges } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
// import "./styles.css";

function DateRangePick() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection"
    }
  ]);
  return (
    <div className="App">
      <DateRangePicker
        onChange={(item) => setState([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={state}
        direction="horizontal"
        staticRanges={[
          ...defaultStaticRanges,
          {
            label: "Last year",
            range: () => ({
              startDate: startOfYear(addYears(new Date(), -1)),
              endDate: endOfYear(addYears(new Date(), -1))
            }),
            isSelected(range) {
              const definedRange = this.range();
              return (
                isSameDay(range.startDate, definedRange.startDate) &&
                isSameDay(range.endDate, definedRange.endDate)
              );
            }
          },
          {
            label: "This year",
            range: () => ({
              startDate: startOfYear(new Date()),
              endDate: endOfDay(new Date())
            }),
            isSelected(range) {
              const definedRange = this.range();
              return (
                isSameDay(range.startDate, definedRange.startDate) &&
                isSameDay(range.endDate, definedRange.endDate)
              );
            }
          }
        ]}
      />
      ;
    </div>
  );
}
export default DateRangePick;