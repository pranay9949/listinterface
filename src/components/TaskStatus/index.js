import './index.css'


const TaskStatus=(props)=>{
 const {assignItem,onDeleteAssignedTask,onPendingClick,onProgressClick,onCompletedClick}=props
 const {date,task,user,id,status}=assignItem
 const deleteTask=()=>{
    onDeleteAssignedTask(id)
 }
 const onClickPending=()=>{
    onPendingClick(id)
 }
 const onClickProgress=()=>{
    onProgressClick(id)
 }
 const onClickCompleted=()=>{
     onCompletedClick(id)
 }

    return(
        <div className='item '>
            <div>
        <p className='para'><span>Task : </span>{task}</p>
        <p className='para'><span>Assigned To : </span> {user}</p>
        <p className='para'><span>Current Status : </span>{status}</p>
        <div className=' date-item'>
        <p className='date-obj'>{date.toLocaleString()}</p>
        <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png " className='img-del' onClick={deleteTask}/>
        </div>
        </div>
        <div className='btns'>
            {status=="Pending"?<button onClick={onClickPending} className='bg-pending progress-btns' >Pending</button>:<button onClick={onClickPending} className='progress-btns' >Pending</button>}
            {status=="In Progress"?<button onClick={onClickProgress} className='bg-progress progress-btns'>In Progress</button>:<button onClick={onClickProgress} className='b progress-btns'>In Progress</button>}
            {status=="Completed"?<button onClick={onClickCompleted} className='bg-completed progress-btns'>Completed</button>:<button onClick={onClickCompleted} className='progress-btns'>Completed</button>}
        </div>
     </div>
    )
}

export default TaskStatus