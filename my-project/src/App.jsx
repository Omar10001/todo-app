import { useState } from "react";
import NavBar from "./components/navBar";
import Notes from "./components/notes";

function App() {
  const [inputList, setInputList] = useState([]);

  const onAddBtnClick = () => {
    setInputList(inputList.concat(<Notes />));
  };

  return (
    <div className="App w-full h-full flex gap-9">
      <NavBar />
      <div className="bg-[#fffefe] min-h-screen h-full w-full flex flex-col  ">
        <div className="w-full flex justify-end items-center text-4xl p-9 ">
          <button className="w-fit" onClick={onAddBtnClick}>
            <ion-icon name="add"></ion-icon>
          </button>
        </div>
        <div className="w-full flex flex-wrap gap-3">
          {inputList}
        </div>
      </div>
    </div>
  );
}

export default App;
