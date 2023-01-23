import React, { useState } from "react";
import { Dropdown } from "flowbite-react";
import { DropdownItem } from "flowbite-react/lib/esm/components/Dropdown/DropdownItem";

function Notes({ task, deleteTask, toggleTask }) {
  const [checked, setChecked] = useState(task.checked);

  const checkBtn = () => {
    setChecked((check) => !check);
    toggleTask(task.id);
  };

  return (
    <div>
      <div
        className={`bg-[#fff8df] flex flex-col h-fit w-fit px-4 py-2 rounded animate__animated animate__fadeInDown animate__faster transition-all duration-300 overflow-hidden`}
      >
        <div className="bg-[#fff8df] flex h-fit w-full gap-4 justify-between items-center">
          <span
            className={`font-semibold text-xl ${
              checked && "line-through text-red-500"
            }`}
          >
            {task.name}
          </span>
          <Dropdown placement="left" inline={true}>
            <DropdownItem onClick={() => deleteTask(task.id)}>
              <span>Delete</span>
            </DropdownItem>
            <DropdownItem>
              Edit Soon
              {/* <span
                onClick={() => {
                  handleClickOpenEdit;
                  console.log('yo')
                }}
              >
                Edit
              </span> */}
            </DropdownItem>
          </Dropdown>
        </div>
        <span
          className={`bg-[#fff8df] inline-block font-light w-80 min-h-[40px] px-1 py-2 focus:outline-none ${
            checked && "line-through text-red-400"
          }`}
        >
          {task.desc}
        </span>
        <div className="flex justify-between w-full items-center mt-3 ">
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-2 w-fit cursor-pointer items-center">
              <input
                className="bg-transparent rounded-full w-5 h-5 focus:ring-transparent border-blue-500 "
                type="checkbox"
                value="Done"
                onClick={checkBtn}
                defaultChecked={checked}
              />
              <span className="text-base text-blue-500 mt-0.5 font-regular ">
                Done
              </span>
            </div>
            <div className={`w-5 h-5 rounded-full bg-[${task.color}]`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notes;
