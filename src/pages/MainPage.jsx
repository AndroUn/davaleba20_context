import useFetch from '../hooks/useFetch';
import TodoTask from '../component/TodoTask';
import useRequest from '../hooks/useRequest';


const MainPage = () => {
    const {response, error, loading:dataLoading, resendRequest} = useFetch({url:'/api/v1/taskList', method: 'GET' })
    const [sendFirstRequest, deleteLoading ] = useRequest({method: 'DELETE'})
    const [sendSecondRequest, updateLoading] = useRequest({method: 'PUT'})
    const taskList = response?.items.map(tasks => {
        return {
          title: tasks.title,
          name: tasks.name,
          deadline: tasks.deadline,
          isCompleted: tasks.isCompleted,
          id: tasks._uuid
        }
    }) || []


    const onDelete = (taskId) => {
      sendFirstRequest(null, `/api/v1/taskList/${taskId}`).then(() => resendRequest())
    }

    const onFinish = (isCompleted, taskId) => {
      sendSecondRequest({isCompleted : !isCompleted}, `/api/v1/taskList/${taskId}`).then(() => resendRequest())
    }



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