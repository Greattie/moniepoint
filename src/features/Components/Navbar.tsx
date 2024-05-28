import { Icon } from "@iconify/react/dist/iconify.js";

export const Navbar = () => {
  return (
    <div className="grid grid-cols-4 border border-yellow-500 w-full inset-x-0 bottom-0 rounded fixed">
      <Icon
        icon="mage:home"
        width="40"
        height="40"
        style={{ color: "#a3a3a3" }}
      />
      <Icon
        icon="solar:chart-linear"
        width="40"
        height="40"
        style={{ color: "#a3a3a3" }}
      />
      <Icon
        icon="octicon:people-16"
        width="40"
        height="40"
        style={{ color: "#a3a3a3" }}
      />
      <Icon
        icon="solar:settings-outline"
        width="40"
        height="40"
        style={{ color: "#a3a3a3" }}
      />
    </div>
  );
};
