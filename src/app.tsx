import { useState } from "preact/hooks";
import { Navbar } from "./features/Components/Navbar";
import { Homepage } from "./features/Homepage";
import { Skills } from "./features/Skills";

export function App() {
  const [activeComponent, setActiveComponent] = useState<string>("Homepage");
  return (
    <div className="w-[28rem] bg-[#edf6ff] overflow-x-hidden m-auto  rounded">
      <div className="fixed top-0 h-full w-full -z-10 bg-[#edf6ff]">
        <div className="bg-[#edf6ff] absolute top-0 z-[-2] h-screen "></div>
      </div>

      {activeComponent === "Homepage" && <Homepage />}
      {activeComponent === "Skills" && <Skills />}
      <Navbar
        activeComponent={activeComponent}
        setActiveComponent={setActiveComponent}
      />
    </div>
  );
}

//  #7782c1 blue
// #ff9766 orange
// #70749c dark blue/grey
// #ff9665 deep orange
