import React from 'react'
import Todo from './Todo'

function Todos(props) {
    let myStyle ={
        minHeight:'100vh'
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">ToDo list</h3>
            {props.TodoItem.length===0?"No Todos to display":
            
                props.TodoItem.map((todo) => {
                    return <>
                        <Todo className="my-3" ToDoss={todo} key={todo.sno} onDelete={props.onDelete}></Todo><hr/>
                    </>
                })}

        </div>
    )
}

export default Todos
