import { useState } from "preact/hooks";
import { Navbar } from "./features/Components/Navbar";
import { Homepage } from "./features/Homepage";
import { Skills } from "./features/Skills";

export function App() {
  const [activeComponent, setActiveComponent] = useState<string>("Homepage");
  return (
    <div className="w-[28rem] bg-[#edf6ff] m-auto h-full absolute rounded min-w-[20rem] ">
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
