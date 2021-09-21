import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Todos from './Components/Todos';
import React, { useState } from 'react';
import Addtodo from './Components/Addtodo';

function App() {
  const onDelete = (todo) => {
    console.log('ayush shukla', todo)
    setTodoItem(TodoItem.filter((e) => {
      return e !== todo
    }));

  }
  const [TodoItem, setTodoItem] = useState([])
  const addTodo = (title, desc) => {

    let sno;
      if(TodoItem.length===0){
        sno = 0;
      }
      else{
        
         sno = TodoItem[TodoItem.length - 1].sno + 1
      }
      const myTodo = {
        sno: sno,
        title: title,
        desc: desc,
      }
      setTodoItem([...TodoItem, myTodo])
      console.log(myTodo)


  }
  return (
    <>
      <Header />
      <div className="container">

        <Addtodo addTodo={addTodo} />
        <Todos TodoItem={TodoItem} onDelete={onDelete} />
      </div>
      <Footer></Footer>


    </>
  );
}

export default App;
