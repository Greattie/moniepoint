import { Icon } from "@iconify/react/dist/iconify.js";
import { DayCalendar } from "./Components/DayCalendar";
import { Card } from "./Components/Card";

export const Skills = () => {
  return (
    <div className="w-[98%] mx-auto">
      <DayCalendar />

      <div className="flex justify-between p-2 my-4 mx-2">
        <h2 className="font-bold text-2xl ">Skills</h2>
        <Icon
          icon="solar:menu-dots-bold"
          width="50"
          height="50"
          style={{ color: "#7782c1" }}
          className="p-2 cursor-pointer"
        />
      </div>

      <div className="flex justify-between">
        <Card
          buttonText="Completed"
          header="Reading"
          iconString="akar-icons:book"
          textPercent="100%"
        />

        <Card
          buttonText="Good work"
          header="Writing"
          iconString="solar:ruler-pen-linear"
          textPercent="80%"
        />
      </div>

      <div className="flex justify-between">
        <Card
          buttonText="Completed"
          header="Speaking"
          iconString="fluent:speaker-2-32-regular"
          textPercent="100%"
        />

        <Card
          buttonText="Good work"
          header="Listening"
          iconString="simple-line-icons:earphones-alt"
          textPercent="70%"
        />
      </div>
    </div>
  );
};
