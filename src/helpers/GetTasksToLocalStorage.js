export function GetTaskToLocalStorage(){
    const task = JSON.parse(localStorage.getItem('tasks'))
    return task
}