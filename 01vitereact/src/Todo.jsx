import { useState } from "react"
import "./Todo.css"
import {v4 as uuidv4} from 'uuid'
// export default function Todo(){
//     let [todos,setTodos] = useState([{task:"sample - task",
//         id:uuidv4()}]);
//     let [newTodo,setNewTodo]=useState("");

//     function addNewTask(){
//         setTodos([...todos,{task:newTodo,id:uuidv4()}]);
        
        

//     }
//     function handleEvent(event){
//         console.log(event.target.value)
//         setNewTodo(event.target.value)
//     }
//     function deleteBtn(id){
//         setTodos(todos.filter((todo)=>todo.id != id))

       
//     }
//     function updateAllCases(){
//         setTodos((todos)=>(
//             todos.map((todo)=>{
//                  return {
//                     ...todo,
//                     task:todo.task.toUpperCase()
//                 }
//              })
//             ))
//     }
//     function updateone(id){

//     }
    
//     return (
//         <>
//         <h1>To Do App</h1>
//         <div className="todo">
//              <div className="todo-1">
//               <input placeholder="Please add task"  value={newTodo} 
//               onChange={handleEvent}/>
//               <button onClick={addNewTask} >Task Add</button> 
//              </div>
//         </div>
//         <ul>
//         {
//             todos.map((todo)=>(
//               <li key={todo.id}>
//               <span>{todo.task}</span>
//               <button className="deleteBtn" onClick={()=>deleteBtn(todo.id)}>Delete</button>
//               <button className= "updateone" onClick={()=>updateone(todo.id)}>Update One </button>
                    
//               </li>
              
//             ))
//          }
//         </ul>
//         <button className="updateAllCases" onClick={updateAllCases}>Update All Cases</button>
//         </>
//     )
// }