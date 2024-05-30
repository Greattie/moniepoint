import React from "preact/compat";
import { Icon } from "@iconify/react";

interface ICardProps {
  iconString: string;
  header: string;
  textPercent: string;
  buttonText: string;
}

export const Card: React.FC<ICardProps> = ({
  iconString,
  header,
  textPercent,
  buttonText,
}) => {
  const buttonClasses =
    buttonText === "Completed"
      ? "bg-orange-500 text-white"
      : buttonText === "Good work"
      ? "border border-orange-500 text-orange-500 bg-transparent"
      : "border border-red-500";
  return (
    <div className="bg-white w-48 rounded-lg h-60">
      <div className="bg-indigo-400 rounded-full w-[35%] h-[30%] mx-auto my-4">
        <Icon
          icon={`${iconString}`}
          // icon="tabler:book"
          width="60"
          height="60"
          className="mx-auto pt-3"
          style={{ color: "white" }}
        />
      </div>
      <h2 className="font-bold text-lg text-center p-1">{header}</h2>
      <p className="text-center">{textPercent}</p>
      <div className="mx-auto">
        <button
          className={`ml-[50px] px-4 py-1 my-2 rounded-lg text-sm ${buttonClasses}`}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};
