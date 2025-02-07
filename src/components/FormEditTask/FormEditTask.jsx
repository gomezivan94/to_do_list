import React, { useState } from 'react'

function FormEditTask({onEditTask, taskId, setEditingTaskId}) {

  const [inputEditTask, setInputEditTask] = useState("")

  function handleSubmit(e){
    e.preventDefault()

    const newValue = inputEditTask.trim()

    if(newValue.length <= 1){
      return
    }
    onEditTask(taskId, newValue)
    setInputEditTask('')
    setEditingTaskId(null)
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Editar Tarea' name='inputEditTask' value={inputEditTask}
      onChange={(e) => setInputEditTask(e.target.value)}/>
    </form>
  )
}

export default FormEditTask