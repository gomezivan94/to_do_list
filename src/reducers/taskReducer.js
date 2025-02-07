// SPREAD OPERATOR

// crea una copia de un array sin modificar el original.

const original = [1,2,3];
const copia = [...original]
console.log(copia)

// une dos o mas arrays en uno nuevo.

const array1 = [1,2]
const array2 = [3,4]
const combinado = [...array1, ...array2]
console.log(combinado)

// crea una copia superficial de un objeto.

const persona = {nombre: 'Juan', edad: 25}


export const taskReducer = (tasks, action) => {
        switch(action.type){
            case "added" : {
                return [
                    {
                        id: action.id,
                        text: action.text,
                        done: false
                    },
                    ...tasks
                ]
            }

            case "delete" : {
                return tasks.filter((task) => task.id !== action.id)
            }

            case "edit" : {
                const filteredTasks = tasks.map((task) => {
                    return task.id === action.id ? {...task, text: action.text} : task
                });

                return filteredTasks;
            }

            case "toggleDone" : {
                const toggleTasks = tasks.map((task) => {
                    return task.id === action.id ? {...task, done: !task.done} : task
                });

                return toggleTasks;
            }
        }
}