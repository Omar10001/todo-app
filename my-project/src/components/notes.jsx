import React, { useState } from "react";

function Notes() {
  const [visible, setVisible] = useState(true);
  const [checked, setChecked] = useState(false);

  const checkBtn = () => {
    setChecked((check) => !check);
  };

  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  return (
    <div className={`${!visible && 'hidden' }`}>
      {visible && (
        <div className="bg-[#fff8df] h-fit w-fit px-4 py-2 rounded ">
          <button className="w-fit" onClick={removeElement}>
            <ion-icon name="close"></ion-icon>
          </button>
          <textarea
            className={`bg-[#fff8df] block w-80 font-medium h-72 overflow-hidden resize-y min-h-[40px] p-2 focus:outline-none ${
              checked && "line-through text-red-500"
            }`}
            role="textbox"
            placeholder="Take notes here"
            disabled={checked}
          ></textarea>
          <div className="flex justify-between w-full items-center ">
            <div className="flex gap-2 w-fit cursor-pointer items-center">
              <input
                className="bg-black w-5 h-5 "
                type="checkbox"
                value="Done"
                onClick={checkBtn}
              />
              <span className="text-base font-medium ">Done</span>
            </div>
            <div className="rounded-full bg-[#d3cefe] h-4 w-4"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Notes;
