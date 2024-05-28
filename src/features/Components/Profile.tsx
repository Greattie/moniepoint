import React from "preact/compat";
import profile from "../../assets/img/profile.jpg";
import { Icon } from "@iconify/react/dist/iconify.js";

interface IProfileProps {
  name: string;
  country: string;
  score: string;
}
export const Profile: React.FC<IProfileProps> = ({ country, name, score }) => {
  return (
    <div className="grid grid-cols-3 w-[35rem] border border-blue-500 items-center rounded">
      <img src={profile} alt="" className="w-10 h-10 rounded-full" />
      <div>
        <h2>Name {name}</h2>
        <p>text {country}</p>
      </div>
      <div className="flex">
        <Icon
          icon="ph:arrow-up-thin"
          width="20"
          height="20"
          style={{ color: "#67d765" }}
        />
        <Icon icon="streamline-emojis:fire" width="20" height="20" />
        <p className="font-bold">1000 {score}</p>
      </div>
    </div>
  );
};
