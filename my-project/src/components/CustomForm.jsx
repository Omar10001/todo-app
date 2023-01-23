import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";
// import Select from "@mui/material";
// import MenuItem from "@mui/material";

function CustomForm({ addTask, handleClose, category }) {
  const [task, setTask] = useState("");
  const [taskDesc, setTaskDesc] = useState("");
  const [taskCat, setTaskCat] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      desc: taskDesc,
      color: taskCat,
      checked: false,
      id: Date.now(),
    });
    setTask("");
    setTaskDesc("");
    setTaskCat("");
  };
  return (
    <form
      onSubmit={handleFormSubmit}
      className="w-[500px] h-[400px] py-2 px-10 flex justify-center items-center animate__animated animate__fadeIn  "
    >
      <div className="flex flex-col w-full gap-14">
        <span className="font-semibold text-center text-2xl">Add Task</span>
        <div className="flex flex-col gap-2 ">
          <TextField
            multiline
            type="text"
            name="input task"
            id="task"
            className="w-full"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            required
            autoFocus
            maxLength={120}
            placeholder="Title"
          />
          <TextField
            multiline
            type="text"
            name="input task"
            id="task"
            className="w-full"
            value={taskDesc}
            onChange={(e) => setTaskDesc(e.target.value)}
            required
            maxLength={120}
            placeholder="Details"
          />
          <select name="cat" onChange={(e) => setTaskCat(e.target.value)}>
            <option value="None">
              None
            </option>
            {category.map((caty) => {
              return (
                <option key={caty.id} className="capitalize"
                  value={caty.color}
                >
                  {caty.cat}
                </option>
              );
            })}
          </select>
          <button
            onClick={handleClose}
            className=" border border-blue-300 text-blue-500 rounded p-2 w-full text-center hover:bg-blue-500 hover:text-white transition-colors duration-200"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

export default CustomForm;
