import TodoTask from '../component/TodoTask';
import { useTaskContext } from '../contexts/taskContext';



const DonePage = () => {
  const {dataLoading, deleteLoading, updateLoading, error, taskList, onDelete} = useTaskContext()


  if(dataLoading | deleteLoading | updateLoading) return <div className="lds-dual-ring"></div>
  if(error) return <p>{error}</p>

  const doneTasks = taskList.filter((t) => t.isCompleted == true)

  return(
      <div>
        {doneTasks.map((t) => 
          <TodoTask key={t.id} id={t.id} title={t.title} name={t.name} deadline={t.deadline} isCompleted={t.isCompleted} delet={onDelete}/>
        )}
    </div>
  )
}


export default DonePage