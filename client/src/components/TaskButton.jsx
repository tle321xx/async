import React from 'react'

const TaskButton = ({onClick, children}) => {
  return (
    <button type='button' onClick={onClick}>{children}</button>
  )
}

export default TaskButton