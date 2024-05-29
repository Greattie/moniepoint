import { Icon } from "@iconify/react/dist/iconify.js";
import { Progress } from "antd";
import { ActivityCard } from "./Components/ActivityCard";
import { Profile } from "./Components/Profile";

export const Homepage = () => {
  return (
    <div className="w-[98%] mx-auto">
      <div className="flex justify-between ">
        <div className="p-2 m-2">
          <p className=" text-lg">Hello Rachel</p>
          <h2 className="font-medium text-2xl text-[#7782c1]">
            Ready to <span className="text-[#ff9665]">play English?</span>
          </h2>
        </div>
        <div className="bg-white flex rounded-3xl items-center p-3 gap-2 font-semibold">
          <Icon
            icon="streamline-emojis:fire"
            width="40"
            height="40"
            className="border border-[#ff9665] rounded-full p-2"
          />
          65
        </div>
      </div>

      <div className="p-2 my-10 mx-2 border-4 border-[#70749c] rounded-md grid grid-cols-2">
        <div className="p-4">
          <h2 className="my-2">Today's goal</h2>
          <Progress
            type="circle"
            percent={70}
            size="small"
            aria-label=""
            aria-labelledby=""
            trailColor="#ff9766"
          />
        </div>

        <div className="grid grid-rows-3 items-center">
          <h2>Excellent!</h2>
          <p>You're almost there</p>
          <p>Finish the goal to achieve</p>
          <div className="flex text-[#ff9665] items-center gap-1">
            <Icon icon="streamline-emojis:fire" width="40" height="40" />
            10
          </div>
        </div>
      </div>

      <div className="flex justify-between p-2 m-2">
        <h2>Your lesson</h2>
        <Icon
          icon="oui:arrow-right"
          width="30"
          height="30"
          style={{ color: "#7782c1" }}
          className="border border-[#7782c1] rounded p-2 cursor-pointer"
        />
      </div>

      <div className="flex justify-between">
        <div>
          <ActivityCard days="30" header="Speaking 101" percent={60} />
        </div>
        <div>
          <ActivityCard days="90" header="New words" percent={60} />
        </div>
      </div>

      <div className="flex justify-between p-2 m-2">
        <h2>Leaderboard</h2>
        <Icon
          icon="oui:arrow-right"
          width="30"
          height="30"
          style={{ color: "#7782c1" }}
          className="border border-[#7782c1] rounded p-2 cursor-pointer"
        />
      </div>

      <div className='grid grid-rows-2 gap-5'>
        <Profile country="Taiwan" name="Yasmin Lee" score="1230" />
        <Profile country="Spain" name="Guy Hawkins" score="1130" />
      </div>
    </div>
  );
};
