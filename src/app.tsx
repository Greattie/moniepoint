import { Navbar } from "./features/Components/Navbar";
import { Homepage } from "./features/Homepage";
import { Skills } from "./features/Skills";

export function App() {
  return (
    <div className=" w-[30rem] bg-[#edf6ff] m-auto fixed">
      <Homepage />
      {/* <Skills /> */}
      <Navbar />
    </div>
  );
}

//  #7782c1 blue
// #ff9766 orange
// #70749c dark blue/grey
// #ff9665 deep orange
