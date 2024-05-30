import React from "preact/compat";
import { Icon } from "@iconify/react/dist/iconify.js";

interface IProfileProps {
  name: string;
  country: string;
  score: string;
  imgSrc: string;
}
export const Profile: React.FC<IProfileProps> = ({
  country,
  name,
  score,
  imgSrc,
}) => {
  return (
    <div className="flex justify-between bg-white p-4 items-center rounded-2xl shadow-customProfile">
      <div className="flex gap-3 items-center">
        <img
          src={imgSrc}
          alt=""
          className="w-10 h-10 rounded-full border-2 border-orange-500"
        />
        <div>
          <h2 className="font-medium text-lg">{name}</h2>
          <p>{country}</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Icon
          icon="ph:arrow-up-thin"
          width="20"
          height="20"
          style={{ color: "#67d765" }}
        />
        <Icon icon="streamline-emojis:fire" width="20" height="20" />
        <p className="font-bold text-[#ff9665]">{score}</p>
      </div>
    </div>
  );
};
