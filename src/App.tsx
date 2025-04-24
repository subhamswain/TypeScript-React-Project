import AddTodo from './components/addtodo';
import Navbar from './components/navbar';
import Todos from './components/todos';
import "./App.css"



const App = () => {
  return (
    <main>
      <h1>Todo React+Typescript</h1>
      <Navbar/>
      <AddTodo/>
      <Todos/>
    </main>
  )
}

export default App
