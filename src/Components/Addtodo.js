import React,{useState} from 'react'

function Addtodo({addTodo}) {
    const [Title, setTitle] = useState("");
    const [Desc, setDesc] = useState("")
    const submit = (e) =>{
        e.preventDefault();
        if(!Title | !Desc){
            alert("Title or Description cannot be blank")
        }
        else{
            addTodo(Title,Desc)
        }
    }   
    return (
       
        <div className="container my-3">
            <h3>Add a todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"> Todo Title</label>
                    <input type="text" value={Title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" />
                
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" onChange={(e)=>{setDesc(e.target.value)}} value={Desc} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-outline-success">Add Todo</button>
            </form>
        </div>
    )
}

export default Addtodo
