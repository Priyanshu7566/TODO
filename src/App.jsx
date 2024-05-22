
import Heading from "./Components/Heading"
import AddTodo from "./Components/AddTodo"
import TodoItem1 from "./Components/TodoItem1"
import TodoItem2 from "./Components/TodoItem2"
import './App.css'
function App() {
  return ( <center className="Main-container">
        <Heading /> 
        <AddTodo />
        <div className="item-container">
          <TodoItem1 />
          <TodoItem2 />
        </div>
  </center>
  )
}

export default App
