import './index.css'


const TaskItem=(props)=>{
    const {note,onDelete}=props
    const {date,id} =note
    const deleteItem=()=>{
        onDelete(id)
    }
    return(
        <div className='items'>
           <p className='para'>Task : {note.value}</p>
           <div className='bottom-cont'>
           <p className='date-obj'>{date.toLocaleString()}</p>
           <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png " className='img-element' onClick={deleteItem}/>
           </div>
        </div>
       
    )
}

export default TaskItem