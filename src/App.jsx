
import './App.css'
import { useEffect, useReducer } from 'react'
import { GetTaskToLocalStorage } from './helpers/GetTasksToLocalStorage'
import { taskReducer} from './reducers/taskReducer'
import { AddTasksToLocalStorage } from './helpers/AddTasksToLocalStorage';
import { FormList, LiTask } from './components';



function App() {

  const initialTask = GetTaskToLocalStorage() || [];

  const [tasks, dispatch] = useReducer(taskReducer, initialTask)

  useEffect(() => {
    AddTasksToLocalStorage(tasks)
  }, [tasks])
  
  function onAddTask(text){
    dispatch({
      type: "added",
      id: crypto.randomUUID(),
      text
    })
  }

  function onDeleteTask(id){
    dispatch({
      type: "delete",
      id,
    })
  }

  function onEditTask(id, text){
    dispatch({
      type: "edit",
      id,
      text
    })
  }

  function onToggleDone(id){
    dispatch({
      type: "toggleDone",
      id
    })
  }

  return (
    <>
    <header className='container header'>
      <h1>To Do List</h1>
    </header>
    <main className='container main'>
      <FormList
        onAddTask={onAddTask}
      
      />

      <ul className='listTaskContainer'>
        { tasks.map((task) =>(
          <LiTask
            key={task.id}
            taskText={task.text}
            taskId={task.id}
            onDeleteTask={onDeleteTask}
            onEditTask={onEditTask}
            onToggleDone={onToggleDone}
            done={task.done}
          />
        ))

        }
      </ul>
    </main>
    </>
  )
}

export default App
