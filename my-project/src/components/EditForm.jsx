import React, { useState, useEffect } from "react";
import { TextField } from "@mui/material";


function EditForm({ editedTask, category, handleCloseEdit }) {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);
  const [updatedtaskDesc, setUpdatedTaskDesc] = useState(editedTask.desc);
  const [updatedtaskCat, setUpdatedTaskCat] = useState(editedTask.cat);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="w-[500px] h-[400px] py-2 px-10 flex justify-center items-center  "
      >
        <div className="flex flex-col w-full gap-14">
          <span className="font-semibold text-center text-2xl">Edit Task</span>
          <div className="flex flex-col gap-2 ">
            <TextField
              multiline
              type="text"
              name="Update task"
              id="task"
              className="w-full"
              value={updatedTaskName}
              onChange={(e) => setUpdatedTaskName(e.target.value)}
              required
              autoFocus
              maxLength={120}
              placeholder="Title"
            />
            <TextField
              multiline
              type="text"
              name="Update task"
              id="task"
              className="w-full"
              value={updatedtaskDesc}
              onChange={(e) => setUpdatedTaskDesc(e.target.value)}
              required
              maxLength={120}
              placeholder="Details"
            />
            <select name="cat" onChange={(e) => setUpdatedTaskCat(e.target.value)}>
              <option value="None" disabled>
                None
              </option>
              {category.map((caty) => {
                return (
                  <option
                    key={caty.id}
                    className="capitalize"
                    value={updatedtaskCat}
                  >
                    {caty.cat}
                  </option>
                );
              })}
            </select>
            <button
              onClick={handleCloseEdit}
              className=" border border-blue-300 text-blue-500 rounded p-2 w-full text-center hover:bg-blue-500 hover:text-white transition-colors duration-200"
            >
              Edit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
