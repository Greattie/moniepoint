import React from "react";
import { Calendar } from "antd";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { Icon } from "@iconify/react/dist/iconify.js";

export const DayCalendar: React.FC = () => {
  const dateFullCellRender = (date: Dayjs) => {
    const startOfSeptember = dayjs().month(8).startOf("month"); // Start of September (8 means September in 0-indexed month)
    const endOfFirstWeek = startOfSeptember.add(6, "day"); // End of the first week

    if (date.isBefore(startOfSeptember) || date.isAfter(endOfFirstWeek)) {
      return <div style={{ display: "none" }}></div>; // Hide other dates
    }
    return <div className="ant-picker-cell-inner">{date.date()}</div>; // Display dates in the first week
  };

  return (
    <div>
      <div className="flex justify-evenly">
        <Icon
          icon="oui:arrow-left"
          width="40"
          height="40"
          style={{ color: "#7782c1" }}
        />
        <h2 className="font-bold text-center">September</h2>
        <Icon
          icon="oui:arrow-right"
          width="40"
          height="40"
          style={{ color: "#7782c1" }}
        />
      </div>
      <Calendar
        fullscreen={false}
        headerRender={() => null} // Hide header
        value={dayjs().month(8).startOf("month")} // Initialize to September
        fullCellRender={dateFullCellRender} // Customize date rendering
      />
    </div>
  );
};
