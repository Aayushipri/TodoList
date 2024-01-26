/** @format */

import React, { useState } from "react";

export default function TodoListApp() {
  const [taskList, setTaskList] = useState([]);
  const [taskDetail, setTaskDetail] = useState("");

  const handleAddTask = () => {
    setTaskList([...taskList, taskDetail]);
    setTaskDetail("");
  };

  const handleRemoveTask = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  const handleTaskUpdate = (value) => {
    setTaskDetail(value);
  };

  return (
    <div>
      <>
        <h3> TO DO LIST</h3>
        <input
          type="text"
          placeholder="Add task details here"
          value={taskDetail}
          onChange={(e) => handleTaskUpdate(e.target.value)}
        />
        <button
          onClick={() => {
            handleAddTask();
          }}
        >
          Add
        </button>
      </>
      <>
        <ul>
          {taskList &&
            taskList.map((item, index) => (
              <div key={index}>
                <li>{item}</li>
                <button
                  onClick={() => {
                    handleRemoveTask(index);
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
        </ul>
      </>
    </div>
  );
}
