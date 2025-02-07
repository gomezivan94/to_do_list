import React from 'react'


function ContainerButtons({onDeleteTask, onToggleDone, taskId, done, setEditingTaskId, isEditing}) {
  return (
    <div className='roleGroup'>
      <button className='btnEdit' onClick={() => setEditingTaskId(isEditing ? null : taskId)}>Editar</button>
      <button className='btnDelete' onClick={() => onDeleteTask(taskId)}>Eliminar</button>
      <button className={done ? 'btnDone' : 'btnUndone'} onClick={() => onToggleDone(taskId)}>{done ? 'Hecho' : 'Pendiente'}</button>
    </div>
  )
}

export default ContainerButtons
