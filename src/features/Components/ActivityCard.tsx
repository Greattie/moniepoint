import { Progress } from "antd";
import React from "preact/compat";

interface IActivityCardProps {
  percent: number;
  header: string;
  days: string;
}

export const ActivityCard: React.FC<IActivityCardProps> = ({
  percent,
  header,
  days,
}) => {
  return (
    <div>
      <Progress
        percent={percent}
        aria-label="Progress Indicator"
        aria-labelledby=""
      />
          <h2 className='font-bold text-xl p-2'>{header}</h2>
          <p className='p-2'>{ days} days daily</p>
    </div>
  );
};
