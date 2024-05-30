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
    <div className=" m-2 py-2">
      <div className="flex justify-between p-2">
        <Icon
          icon="oui:arrow-left"
          width="20"
          height="20"
          style={{ color: "#7782c1" }}
          className="border border-[#7782c1] rounded p-1 cursor-pointer"
        />
        <h2 className="font-bold text-center">September</h2>
        <Icon
          icon="oui:arrow-right"
          width="20"
          height="20"
          style={{ color: "#7782c1" }}
          className="border border-[#7782c1] rounded p-1 cursor-pointer"
        />
      </div>

      <div
        className="p-2"
        style={{
          // width: "400px",
          height: "100px",
          // border: "1px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <Calendar
          fullscreen={false}
          headerRender={() => null} // Hide header
          value={dayjs().month(8).startOf("month")} // Initialize to September
          dateFullCellRender={dateFullCellRender} // Customize date rendering
        />
      </div>
    </div>
  );
};
