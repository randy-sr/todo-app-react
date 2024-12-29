import { TodoCard } from "./TodoCard"

export function TodoList({todos, selectedTab, handleDeleteTodo, handleCompleteTodo}) {
  

  const filterTodosList = selectedTab === 'All' ?
        todos : 
        selectedTab === 'Completed' ?
        todos.filter(val => val.complete) :
        todos.filter(val => !val.complete)
  return (
    <>
      {
        filterTodosList.map((todo, todoIndex) => {
          return (
            <TodoCard 
              key={todoIndex} 
              todo={todo}
              handleDeleteTodo={handleDeleteTodo}
              handleCompleteTodo={handleCompleteTodo}
              todoIndex={todos.findIndex(val => val.input == todo.input)}
              selectedTab={selectedTab}
            />
          )
        })
      }
    </>
  )
}