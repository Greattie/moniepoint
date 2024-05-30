import { Progress } from "antd";
import flag from "../../assets/img/britain.png";
import React from "preact/compat";

interface IActivityCardProps {
  percent: number;
  header: string;
  days: string;
  imgSrc: string;
}

export const ActivityCard: React.FC<IActivityCardProps> = ({
  percent,
  header,
  days,
  imgSrc,
}) => {
  return (
    <div>
      <div className="bg-white rounded w-48 pb-2 mb-4">
        <img src={imgSrc} className="w-40 h-32 mx-auto" />
      </div>
      <Progress
        percent={percent}
        aria-label="Progress Indicator"
        aria-labelledby=""
      />
      <h2 className="font-medium text-lg py-2">{header}</h2>
      <p className="">{days} days daily</p>
    </div>
  );
};
