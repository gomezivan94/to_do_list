export function AddTasksToLocalStorage(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks))
}