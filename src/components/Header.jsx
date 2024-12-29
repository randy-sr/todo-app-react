
export function Header({ todos }) {
  const todosLength = todos.length
  const isTasksPlural = todos.length > 1
  const taskOrTasks = isTasksPlural ? "tasks" : "task"
  return (
    <header>
      <h1 className="text-gradient">You have { todosLength } open { taskOrTasks }</h1>
    </header>
  )
} 