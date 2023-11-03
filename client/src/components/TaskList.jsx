import React from "react";

const TaskList = ({ todo, index, deleteTodo, completeTodo }) => {
  return (
    <div
          key={index}
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <input type="checkbox" onClick={() => completeTodo(index)} />
          <div
            style={
              todo.isCompleted
                ? { textDecoration: "line-through" }
                : { textDecoration: "" }
            }
          >
            {todo.todo}
          </div>
          <div className="delete" onClick={() => deleteTodo(index)}>
            &#128465;
          </div>
        </div>
  );
};

export default TaskList;
