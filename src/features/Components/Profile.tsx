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
    <div className="grid grid-cols-3  bg-white p-4 items-center rounded-2xl shadow-customProfile">
      <img src={profile} alt="" className="w-10 h-10 rounded-full" />
      <div>
        <h2>{name}</h2>
        <p>{country}</p>
      </div>
      <div className="flex items-center gap-2">
        <Icon
          icon="ph:arrow-up-thin"
          width="20"
          height="20"
          style={{ color: "#67d765" }}
        />
        <Icon icon="streamline-emojis:fire" width="20" height="20" />
        <p className="font-bold">{score}</p>
      </div>
    </div>
  );
};
