import { useState } from "react";
import "./assets/asset.css";
import "bootstrap/dist/css/bootstrap.min.css"
import ToDoItem from "./components/TodoItem/ToDoItem";
import { Button, Input } from "reactstrap";
import axios from 'axios'

function App() {
  
  const [ todoList, setTodoList ] = useState([])

  const renderTodoList = () => {
    return todoList.map((val) => {
      return (
        <ToDoItem 
        date={val.date}
        action={val.action}
        isDone={val.isDone}
        deleteItem={() => deleteTodoItem(val.id)}
        toggleStatus={() => toggleTodoStatus(val.id)}
        />
        )
      })
    }

    const [ todoInputValue, setTodoInputValue ] = useState({
        todoInput: "",
        dateInput: "",  
    })
    
    const inputHandler = (event) => {
      const { value, name } = event.target;
      setTodoInputValue(
        {
          ...todoInputValue,
          [name]: value
        }
      )
  }

  const addTodoItem = () => {
    // const newTodoArray = [...todoList]

    // newTodoArray.push({
    //   date: todoInputValue.dateInput,
    //   action: todoInputValue.todoInput,
    //   isDone: false
    // })

    // setTodoList(newTodoArray)
    const newData = {
        date: todoInputValue.dateInput,
        action: todoInputValue.todoInput,
        isDone: false
      }
    axios.post("http://localhost:2000/todos", newData ).then((res) => {
      fetchTodoList()
    })
  }

  const deleteTodoItem = (id) => {
    // const deleteTodoArray = [...todoList]

    // deleteTodoArray.splice(index, 1)

    // setTodoList(deleteTodoArray)

    axios.delete(`http://localhost:2000/todos/${id}`).then((res) => {
      fetchTodoList()
    })
  }

  const toggleTodoStatus = (id) => {
    // const duplicateTodoArray = [...todoList]

    // duplicateTodoArray[index].isDone = !duplicateTodoArray[index].isDone

    // setTodoList(duplicateTodoArray)

    const dataToFind = todoList.find((val) => val.id === id)

    // axios.get(`http://localhost:2000/todos/${id}`).then((res) => {
    //   const newIsDone = !res.data.isDone

      axios.patch(`http://localhost:2000/todos/${id}`, { isDone: !dataToFind.isDone } ).then((res) => {
        fetchTodoList()
      })
    // })
  }

  const fetchTodoList = () => {
    axios.get("http://localhost:2000/todos").then((res) => {
      setTodoList(res.data)
    })

    // console.log("request kah?")
  }

  return (
    <>
      <div className="container">
        {/* <center>
          <h1>{todoInputValue}</h1>
        </center> */}

        <div className='row my-3'>
          <div className='offset-3 col-5'>
            <Input name='todoInput' onChange={inputHandler} />
            <Input name='dateInput' onChange={inputHandler} type='date' />
          </div>
          <div className='col-2'>
            <Button onClick={addTodoItem} color='outline-dark'>Add To Do</Button>
            <Button onClick={fetchTodoList} color='outline-info'>Fetch To Do</Button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-6 offset-lg-3">
            {renderTodoList()}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;