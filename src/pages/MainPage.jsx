import TodoTask from '../component/TodoTask';
import { useTaskContext } from '../contexts/taskContext';

const MainPage = () => {
    const {dataLoading, deleteLoading, updateLoading, error, taskList, onDelete, onFinish} = useTaskContext()


    if(dataLoading | deleteLoading | updateLoading) return <div className="lds-dual-ring"></div>
    if(error) return <p>{error}</p>

    const undoneTasks = taskList.filter((t) => t.isCompleted == false)
 
    return(
        <div>
          {undoneTasks.map((t) => 
            <TodoTask key={t.id} id={t.id} title={t.title} name={t.name} deadline={t.deadline} isCompleted={t.isCompleted} delet={onDelete} finish={onFinish}/>
          )}
      </div>
    )

    
}

export default MainPage