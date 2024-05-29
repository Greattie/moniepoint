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
  return (
    <div className="border border-red-500 w-48 rounded-lg h-52">
      <div className="bg-indigo-400 rounded-full w-[35%] h-[35%] mx-auto my-2">
        <Icon
          icon={`${iconString}`}
          // icon="tabler:book"
          width="60"
          height="60"
          className="mx-auto pt-3"
          style={{ color: "white" }}
        />
      </div>
      <h2 className="font-bold text-xl text-center p-2">{header}</h2>
      <p className="text-center">{textPercent}</p>
      <div className='mx-auto'>
        <button className="ml-[50px] border border-red-500">{ buttonText}</button>
      </div>
    </div>
  );
};
