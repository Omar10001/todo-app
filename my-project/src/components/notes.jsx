import React, { useState } from "react";
import TextField from "@mui/material/TextField";

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
    <div className={`${!visible && "hidden"}`}>
      {visible && (
        <div className="bg-[#fff8df] h-fit w-fit px-4 py-2 rounded ">
          <button className="w-fit" onClick={removeElement}>
            <ion-icon name="close"></ion-icon>
          </button>
          <div className="my-4">
            <TextField
              className={`bg-[#fff8df] block w-80 h-fit overflow-hidden  min-h-[40px] p-2 focus:outline-none ${
                checked && "line-through text-red-500"
              }`}
              multiline
              role="textbox"
              placeholder="Take notes here"
              variant="standard"
              disabled={checked}
              maxRows={7}
            />
          </div>
          <div className="flex justify-between w-full items-center ">
            <div className="flex gap-2 w-fit cursor-pointer items-center">
              <input
                className="bg-transparent rounded-full w-5 h-5 focus:ring-transparent border-blue-500 "
                type="checkbox"
                value="Done"
                onClick={checkBtn}
              />
              <span className="text-base text-blue-500 mt-0.5 font-regular ">Done</span>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Notes;
