import React, { useState } from "react";

function Notes() {
  const [visible, setVisible] = useState(true);

  const removeElement = () => {
    setVisible((prev) => !prev);
  };

  return (
    <span >
      {visible && (
        <div className="bg-[#fff8df] h-fit w-fit px-4 py-2 rounded">
          <button className="w-fit" onClick={removeElement}>
            <ion-icon name="close"></ion-icon>
          </button>
          <textarea
            className=" bg-[#fff8df] block w-80 h-72 overflow-hidden resize-y min-h-[40px] p-2 focus:outline-none "
            role="textbox"
            placeholder="Take notes here"
          ></textarea>
          <div className="flex justify-between w-full items-center ">
            <div className="flex gap-2">
              <input
                className="bg-transparent"
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              />
              <span>Done</span>
            </div>
            <div className="rounded-full bg-[#d3cefe] h-4 w-4"></div>
          </div>
        </div>
      )}
    </span>
  );
}

export default Notes;
