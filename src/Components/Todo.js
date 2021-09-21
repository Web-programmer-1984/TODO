import React from 'react'

function Todo(props) {
    return (
        <div className="my-5">
            <h4>{props.ToDoss.title}</h4>
            <p>{props.ToDoss.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.ToDoss)}}>Delete</button>
        </div>
    )
}

export default Todo
