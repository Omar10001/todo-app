import { useState, useEffect } from "react";

import NavBar from "./components/navBar";
import Notes from "./components/notes";
import CustomForm from "./components/CustomForm";

import useLocalStorage from "./hooks/useLocalStorage";
// import EditForm from "./components/EditForm";

import Dialog from "@mui/material/Dialog";
import HashLoader from "react-spinners/HashLoader";

function App() {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useLocalStorage("react-todo.tasks", []);
  const [open, setOpen] = useState(false);

  const addTask = (tasky) => {
    setTasks((prev) => [...prev, tasky]);
    console.log(tasky);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, checked: !t.checked } : t))
    );
  };

  // const updateTask = (editedTask) => {
  //   setTasks((prev) =>
  //     prev.map((t) =>
  //       t.id === editedTask.id
  //         ? {
  //             ...t,
  //             name: editedTask.name,
  //             desc: editedTask.desc,
  //             cat: editedTask.cat,
  //           }
  //         : t
  //     )
  //   );
  //   //TODO: CLASS THE EDIT MODE
  // };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const category = [
    {
      id: 1,
      cat: "Work",
      color: "#d3cefe",
    },
    {
      id: 2,
      cat: "Study",
      color: "#d1e4f6",
    },
    {
      id: 3,
      cat: "entertainment",
      color: "#ffcece",
    },
    {
      id: 4,
      cat: "family",
      color: "#dbf3d6",
    },
  ];

  const filterItem = (curcat) => {
    const newItem = tasks.filter((newVal) => {
      return newVal.color === curcat.color;
    });
    console.log(newItem);
    setTasks(newItem);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, []);

  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      {loading ? (
        <HashLoader color="#ffc806" speedMultiplier={2} />
      ) : (
        <div className="App w-full h-full flex gap-9">
          <NavBar
            filterItem={filterItem}
            setTasks={setTasks}
            category={category}
          />
          <div className="bg-[#fffefe] min-h-screen h-full w-full flex flex-col  ">
            <div className="w-full flex justify-end items-center text-4xl md:p-9 px-9 pb-6 pt-9 ">
              <button onClick={handleClickOpen} className="w-fit">
                <ion-icon name="add"></ion-icon>
              </button>
            </div>
            <Dialog
              open={open}
              onClose={handleClose}
              className="bg-transparent/40 backdrop-blur-sm transition-all duration-150"
            >
              <CustomForm
                category={category}
                addTask={addTask}
                handleClose={handleClose}
              />
            </Dialog>

            {/* TaskLIST */}
            {tasks && (
              <div className="flex flex-wrap h-full w-full gap-2 md:gap-3">
                {tasks
                  .sort((a, b) => b.id - a.id)
                  .map((task) => (
                    <Notes
                      key={task.id}
                      task={task}
                      deleteTask={deleteTask}
                      toggleTask={toggleTask}
                    />
                  ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
