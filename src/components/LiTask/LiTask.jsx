import React, { useState } from 'react'
import ContainerButtons from '../ContainerButtons/ContainerButtons';
import FormEditTask from '../FormEditTask/FormEditTask';

function LiTask({taskText, taskId, onEditTask, onDeleteTask, onToggleDone, done}) {

  const [editingTaskId, setEditingTaskId] = useState(false)

  const isEditing = editingTaskId === taskId;



  return (
    <li>
      <h3>{taskText}</h3>
      <ContainerButtons
          onDeleteTask={onDeleteTask}
          onToggleDone={onToggleDone}
          taskId={taskId}
          done={done}
          setEditingTaskId={setEditingTaskId}
          isEditing={isEditing}
      />
      { isEditing === true ? <FormEditTask
        onEditTask={onEditTask}
        taskId={taskId}
        setEditingTaskId={setEditingTaskId}
      /> : ''

      }
    </li>
  )
}

export default LiTask