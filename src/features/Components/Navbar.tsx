import { Icon } from "@iconify/react/dist/iconify.js";

export const Navbar = () => {
  return (
    // <div className="fixed bottom-0 flex border border-orange-600">
    <div className="grid grid-cols-4 bg-white w-[29rem] p-4 bottom-0 rounded-t-3xl absolute shadow-custom">
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
