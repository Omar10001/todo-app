import React from "react";

function NavBar() {
  const category = [
    {
      cat: "Work",
      color: "#d3cefe",
    },
    {
      cat: "Study",
      color: "#d1e4f6",
    },
    {
      cat: "entertainment",
      color: "#ffcece",
    },
    {
      cat: "family",
      color: "#dbf3d6",
    },
  ];
  return (
    <div className="bg-[#fffefe] flex flex-col items-center w-72 min-h-screen  justify-between text-lg py-9 border ">
      <div className="flex flex-col gap-7 ">
        <span className="font-semibold text-4xl mb-2">todo</span>
        <button>
          <span className="flex gap-2 items-center">
            <div className=" rounded-full bg-[#d3cefe] h-8 w-8"></div> work
          </span>
        </button>
        <button>
          <span className="flex gap-2 items-center">
            <div className=" rounded-full bg-[#d1e4f6] h-8 w-8"></div> study
          </span>
        </button>
        <button>
          <span className="flex gap-2 items-center">
            <div className=" rounded-full bg-[#ffcece] h-8 w-8"></div>
            entertainment
          </span>
        </button>
        <button>
          <span className="flex gap-2 items-center">
            <div className=" rounded-full bg-[#dbf3d6] h-8 w-8"></div> family
          </span>
        </button>
      </div>
      <img className="w-40 flex" src="./src/assets/task_img.png" alt="" />
    </div>
  );
}

export default NavBar;
