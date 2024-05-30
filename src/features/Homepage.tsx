import { Icon } from "@iconify/react/dist/iconify.js";
import { Progress } from "antd";
import { ActivityCard } from "./Components/ActivityCard";
import { Profile } from "./Components/Profile";
import flag from "../assets/img/britain.png";
import vocab from "../assets/img/vocab.png";
import prof from "../assets/img/profile.jpg";
import guy from "../assets/img/guy.jpeg";

export const Homepage = () => {
  return (
    <div className="w-[98%] mx-auto px-2">
      <div className="flex justify-between ">
        <div className="p-2 m-2">
          <p className=" text-base p-1">Hello Rachel</p>
          <h2 className="font-medium text-lg text-[#7782c1] p-1">
            Ready to <span className="text-[#ff9665]">play English?</span>
          </h2>
        </div>
        <div className="bg-white flex rounded-3xl items-center p-3 my-5 gap-2 font-semibold">
          <Icon
            icon="streamline-emojis:fire"
            width="35"
            height="35"
            className="border border-[#ff9665] rounded-full p-2"
          />
          65
        </div>
      </div>

      <div className="p-2 my-10 mx-2 border-4 border-[#70749c] rounded-md grid grid-cols-2 bg-white">
        <div className="p-4 ">
          <h2 className="my-2 text-[#70749c] font-bold text-center">
            Today's goal
          </h2>
          <Progress
            type="circle"
            percent={70}
            // size="small"
            aria-label=""
            aria-labelledby=""
            trailColor="#ff9766"
            strokeColor="#f56523"
          />
        </div>

        <div className="m-auto">
          <h2 className="text-2xl p-2 font-semibold">Excellent!</h2>
          <p className="px-2">You're almost there</p>
          <p className="px-2">Finish the goal to achieve</p>
          <div className="flex text-[#ff9665] items-center">
            <Icon icon="streamline-emojis:fire" width="20" height="30" />
            10
          </div>
        </div>
      </div>

      <div className="flex justify-between p-2 m-2">
        <h2 className="font-medium text-2xl pb-3 ">Your lesson</h2>
        <Icon
          icon="oui:arrow-right"
          width="20"
          height="20"
          style={{ color: "#7782c1" }}
          className="border border-[#7782c1] rounded p-1 cursor-pointer"
        />
      </div>

      <div className="flex justify-between">
        <ActivityCard
          days="30"
          header="Speaking 101"
          percent={60}
          imgSrc={flag}
        />
        <ActivityCard
          days="90"
          header="New words"
          percent={60}
          imgSrc={vocab}
        />
      </div>

      <div className="flex justify-between p-2 mt-10">
        <h2 className="font-medium text-2xl pb-3 ">Leaderboard</h2>
        <Icon
          icon="oui:arrow-right"
          width="20"
          height="20"
          style={{ color: "#7782c1" }}
          className="border border-[#7782c1] rounded p-1 cursor-pointer"
        />
      </div>

      <div className="grid grid-rows-2 gap-5">
        <Profile
          country="Taiwan"
          name="Yasmin Lee"
          score="1230"
          imgSrc={prof}
        />
        <Profile country="Spain" name="Guy Hawkins" score="1130" imgSrc={guy} />
      </div>
    </div>
  );
};
