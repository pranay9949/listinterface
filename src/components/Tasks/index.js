import { Component } from "react";
import TaskItem from '../TaskItem'
import TaskStatus from '../TaskStatus'
import TaskSummary from '../TaskSummary'
import {v4 as uuidv4} from 'uuid'

import './index.css'

const userDetails=[{
  id:1,
  userName:"Smriti"
},
{
  id:2,
  userName:"Rohit Sharma"
},
{
  id:3,
  userName:"Dhoni"
},
{
  id:4,
  userName:"Virat"
}]
class Tasks extends Component{
  state={taskObj:[],text:"",selectedUser:"",selectedTask:"",assignObj:[]}
  onInputChange=(e)=>{
   this.setState({text:e.target.value})
  }
  onSelectUser=(e)=>{
    this.setState({selectedUser:e.target.value})
    console.log(e.target.value)
  }
  onSelectTask=(e)=>{
    this.setState({selectedTask:e.target.value})
    console.log(e.target.value)
  }
  onSubmit=(e)=>{
    e.preventDefault()
    const {text}=this.state
    const obj={
      id:uuidv4(),
       value:text,
       date:new Date()

    }
   
   if(text.length>0){this.setState((prevState)=>({
      taskObj:[...prevState.taskObj,obj],text:""
    }))}
    else{
      alert("please enter Task to be done")
    }
    
  }
  onAssignTask=()=>{
    const{selectedTask,selectedUser,assignObj}=this.state
    const assignedTask={
      id:uuidv4(),
      task:selectedTask,
      user:selectedUser,
      status:"Pending",
      date:new Date()
    }
    const filtered=assignObj.filter((item)=>(selectedTask==item.task))
    if(filtered.length>0){
      alert("Task was already assigned")
    }
    else if(selectedTask.length>0 && selectedUser.length>0){
      this.setState((prevState)=>({
        assignObj:[...prevState.assignObj,assignedTask]
      }))

    }
   
    else if(selectedTask.length==0){
       alert("Please add Task to be Assigned")
    }
    else{
      alert("Please select User")
    }
  }
  onDelete=(id)=>{
    const {taskObj}=this.state
   this.setState({taskObj:taskObj.filter((item)=>(
    item.id!=id
   ))})
  }
  onDeleteAssignedTask=(id)=>{
    const {assignObj}=this.state
    this.setState({assignObj:assignObj.filter((item)=>(
      item.id!==id
    ))})
  }
  onPendingClick=(id)=>{
   const {assignObj}=this.state
   const updatedItems = assignObj.map((item)=>{
    if(item.id==id){
      return {...item,status:"Pending"}
    }
    return item
   })
   this.setState({assignObj:updatedItems})
  }
  onProgressClick=(id)=>{
    const {assignObj}=this.state
    const updatedItems = assignObj.map((item)=>{
     if(item.id==id){
       return {...item,status:"In Progress"}
     }
     return item
    })
    this.setState({assignObj:updatedItems})
   }
   onCompletedClick=(id)=>{
    const {assignObj}=this.state
    const updatedItems = assignObj.map((item)=>{
     if(item.id==id){
       return {...item,status:"Completed"}
     }
     return item
    })
    this.setState({assignObj:updatedItems})
   }
    render(){
      const {taskObj,text,assignObj}=this.state
        console.log(assignObj)
        return(
          <div>
           <nav className="nav-item">
               <h1>Tasks</h1>
           </nav>
           <div className="container">
            <form className="input-cont" onSubmit={this.onSubmit}>
              <input type="text" value={text}placeholder="Add a task.." onChange={this.onInputChange}/>
              <button className="btn-add">Add Task</button>
            </form>
            <div className="note-items">

            {taskObj.map((item)=>(
              <TaskItem note={item} onDelete={this.onDelete} key={item.id}/>
            ))}
           </div>
      
           <h1>Task Assignment</h1>
            <div className="options">
            <div className="header">
            <h3>Select user</h3>
           
            <select className="users" onClick={this.onSelectUser}>
             {userDetails.map((user)=>(
              <option key={user.id}>{user.userName}</option>
             ))}
            </select>
            </div>
            <div className="header">
              <h3>Select Task</h3>
            <select className="users " onClick={this.onSelectTask}>
              
             {taskObj.map((task)=>(
              <option value={task.value} key={task.id}>{task.value}</option>
             ))}
            </select>
            </div>
            </div>
            <div className="assign-btn-div">
            <button className="assign-btn" onClick={this.onAssignTask}>AssignTask</button>
            </div>
            <div className="assign-items">

            
            {assignObj.map((assignItem)=>(
              <TaskStatus assignItem={assignItem} onDeleteAssignedTask={this.onDeleteAssignedTask} onPendingClick={this.onPendingClick} onCompletedClick={this.onCompletedClick} onProgressClick={this.onProgressClick} key={assignItem.id}/>
            ))}
            </div>
     
            <TaskSummary assignObj={assignObj}/>

           </div>
           

          </div>
        )
    }
}
export default Tasks