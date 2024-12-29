import { useState } from "react"

export function TodoInput({handleAddTodo}) {
  const [inputValue, setInputValue] = useState('')
  return (
    <div className="input-container">
      <input type="text" 
        value={inputValue} 
        placeholder="Add task"
        onChange={(e) => {setInputValue(e.target.value)}}
      />
      <button
        onClick={() => {
          if(!inputValue) { return }
          handleAddTodo(inputValue)
          setInputValue('')
        }}
      >
       <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  )
}