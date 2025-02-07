import { useState } from "react"

function FormList({onAddTask}) {

    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()

        const newValue = inputValue.trim()

        if(newValue.length <= 1){
            return
        }

        onAddTask(newValue)

        setInputValue("")
    }


  return (
    <form className="formList" onSubmit={handleSubmit}>
      <input type="text" 
            placeholder="Nueva Tarea"
            name="inputTaks"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
      />
      <button type="submit">Agregar</button>
    </form>
  )
}

export default FormList
