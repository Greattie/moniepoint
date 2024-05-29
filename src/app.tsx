import { Navbar } from "./features/Components/Navbar";
import { Homepage } from "./features/Homepage";

export function App() {
  return (
    <div className="fixed top-0 -z-10 h-full w-full">
      <div className="bg-[#edf6ff] overflow-hidden absolute top-0 z-[-2] h-screen w-screen"></div>
      <Homepage />
      <Navbar />
    </div>
  );
}

//  #7782c1 blue
// #ff9766 orange
// #70749c dark blue/grey
// #ff9665 deep orange
