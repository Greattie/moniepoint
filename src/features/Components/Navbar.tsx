import { Icon } from "@iconify/react/dist/iconify.js";
import React from "preact/compat";

interface INavProps {
  activeComponent: string;
  setActiveComponent: (component: string) => void; // Correct type for the setter
}
export const Navbar: React.FC<INavProps> = ({
  activeComponent,
  setActiveComponent,
}) => {
  const iconStyle = (isActive: any) => ({
    color: isActive ? "#7782c1" : "#a3a3a3",
  });
  return (
    // <div className="fixed bottom-0 flex border border-orange-600">
    <div className="flex justify-between bg-white w-[28rem] p-2 bottom-0 rounded-3xl fixed shadow-custom">
      <Icon
        icon="solar:home-2-bold"
        className="cursor-pointer"
        width="25"
        height="25"
        style={iconStyle(activeComponent === "Homepage")}
        onClick={() => setActiveComponent("Homepage")}
      />
      <Icon
        icon="solar:chart-linear"
        width="25"
        height="25"
        className="cursor-pointer"
        style={iconStyle(activeComponent === "Skills")}
        onClick={() => setActiveComponent("Skills")}
      />
      <Icon
        icon="octicon:people-16"
        width="25"
        height="25"
        className="cursor-pointer"
        style={{ color: "#a3a3a3" }}
      />
      <Icon
        icon="solar:settings-outline"
        width="25"
        height="25"
        className="cursor-pointer"
        style={{ color: "#a3a3a3" }}
      />
    </div>
  );
};
