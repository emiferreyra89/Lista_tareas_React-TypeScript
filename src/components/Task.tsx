type TaskProps = {
  task : string
  cleanTask : () => void
}

export const Task = ({task,cleanTask}:TaskProps) => {
  return (
    <div className="task">
      <span>{task}</span>
      <button onClick={cleanTask}>Borrar Tarea</button>
    </div>
  )
}