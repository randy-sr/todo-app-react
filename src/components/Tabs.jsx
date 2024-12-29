export function Tabs( { todos, selectedTab, setSelectedTab } ) {
  const tabs = ["All","Open","Completed"]
  return (
    <nav className="tab-container">
      {
        tabs.map((tab,tabIndex) => {
          const numOfTask = tab === "All" ? todos.length : 
          tab === 'Open' ? todos.filter( val => !val.complete).length :
          todos.filter( val => val.complete).length
          return (
            <button onClick={() => {setSelectedTab(tab)}} className={"tab-button" + (tab === selectedTab ? ' tab-selected' : ' ')} key={tabIndex}>
              <h4>{tab} <span>({numOfTask})</span></h4>
            </button>
          )
        })
      }
    </nav>
  )
}