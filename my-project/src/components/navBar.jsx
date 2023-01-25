import React from "react";
import TaskImg from '../../../my-project/src/assets/task_img.png'

function NavBar({ category, setTasks, filterItem }) {
  return (
    <div className="bg-[#fffefe] flex flex-col items-center w-fit md:w-72 min-h-screen  justify-between text-lg py-9 border-x pl-5 pr-2 md:px-0 ">
      <div className="flex flex-col gap-6 md:gap-9 ">
        <span className="font-semibold text-4xl mb-2">todo</span>
        {category.map((caty) => {
          return (
            <button onClick={() => filterItem(caty)} key={caty.id}>
              <span className="flex gap-3 text-sm md:text-base items-center capitalize">
                <div
                  className={`rounded-full bg-[${caty.color}] md:h-8 h-4 md:w-8 w-4`}
                ></div>
                {caty.cat}
              </span>
            </button>
          );
        })}
        <div className="hidden bg-[#d3cefe]"></div>
        <div className="hidden bg-[#d1e4f6]"></div>
        <div className="hidden bg-[#ffcece]"></div>
        <div className="hidden bg-[#dbf3d6]"></div>
        <button onClick={() => setTasks(tasks)}>
          <span className="text-sm md:text-base flex gap-3 items-center capitalize">
            <div className={`rounded-full bg-[#000000] md:h-8 h-4 md:w-8 w-4`}></div>
            Show all
          </span>
        </button>
      </div>
      <img className="w-40 flex" src={TaskImg} alt="" />
    </div>
  );
}

export default NavBar;
