import React, { useState } from "react";

const TaskInput = ({data, onChange, onKeyPress}) => {

//   console.log(data);

  return (
    <div>
      <input
        type="text"
        value={data}
        placeholder="Enter your Todo"
        onChange={onChange}
        onKeyDown={onKeyPress}
      />
    </div>
  );
};

export default TaskInput;
