// Import the useState hook from the React library
import { useState } from "react";

// Import components used in the app
import AddTaskForm from "./Components/AddTaskForm.jsx";
import UpdateForm from "./Components/UpdateForm.jsx";
import ToDO from "./Components/ToDO.jsx";

// Import Bootstrap CSS and custom App CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // Declare state variables and their initial values
  const [toDo, setToDo] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // Add a new task to the toDo list
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false };
      setToDo([...toDo, newEntry]);
      setNewTask("");
    }
  };

  // Delete a task from the toDo list
  const deleteTask = (id) => {
    let newTask = toDo.filter((task) => task.id !== id);
    setToDo(newTask);
  };

  // Mark a task as done or not done
  const markDone = (id) => {
    let newTask = toDo.map((task) => {
      if (task.id == id) {
        return { ...task, status: !task.status };
      }
      return task;
    });
    setToDo(newTask);
  };

  // Cancel the update of a task
  const cancelupdate = (id) => {
    setUpdateData("");
  };

  // Update the task being edited
  const changeTask = (e) => {
    let newEntry = {
      ...updateData,
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false,
    };
    setUpdateData(newEntry);
  };

  // Save the updated task to the toDo list
  const updateTask = (e) => {
    let filterRecords = [...toDo].filter((task) => task.id !== updateData.id);
    let updateObject = [...filterRecords, updateData];
    setToDo(updateObject);
    setUpdateData("");
  };

  // Render the app UI
  return (
    <div className="container App">
      <br />
      <br />
      <h2>To Do List App</h2>
      <br />
      <br />
      {/* Conditionally render the update task form or add task form */}
      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelupdate={cancelupdate}
        />
      ) : (
        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />
      )}

      {/* Display the toDo list */}
      {toDo && toDo.length ? "" : "No Tasks"}
      <ToDO
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />
    </div>
  );
}

// Export the App component as the default export
export default App;
