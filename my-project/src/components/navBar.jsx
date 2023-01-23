import React from "react";

function NavBar({ category, setTasks, filterItem }) {
  return (
    <div className="bg-[#fffefe] flex flex-col items-center w-72 min-h-screen  justify-between text-lg py-9 border ">
      <div className="flex flex-col gap-9 ">
        <span className="font-semibold text-4xl mb-2">todo</span>
        {category.map((caty) => {
          return (
            <button onClick={() => filterItem(caty)} key={caty.id}>
              <span className="flex gap-3 items-center capitalize">
                <div
                  className={`rounded-full bg-[${caty.color}] h-8 w-8`}
                ></div>
                {caty.cat}
              </span>
            </button>
          );
        })}
        <button onClick={() => setTasks(tasks)}>
          <span className="flex gap-3 items-center capitalize">
            <div className={`rounded-full bg-[#000000] h-8 w-8`}></div>
            Show all
          </span>
        </button>
      </div>
      <img className="w-40 flex" src="./src/assets/task_img.png" alt="" />
    </div>
  );
}

export default NavBar;
