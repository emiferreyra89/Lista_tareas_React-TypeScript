import {Task} from "./Task";

type Props = {
  taskList : string[]
  deleteTask : (index:number) => void
}

export const ListTask = ({taskList, deleteTask}:Props) => {
  return (
    <div className="taskList">
      {taskList.map((task,index) => (
        <Task key={index} task={task} cleanTask={()=>deleteTask(index)}/>
      ))}
    </div>
  )
}