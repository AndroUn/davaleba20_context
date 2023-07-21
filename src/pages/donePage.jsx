import useFetch from '../hooks/useFetch';
import useRequest from '../hooks/useRequest';
import DoneTask from '../component/doneTask';



const DonePage = () => {
  const {response, error, loading: dataLoading, resendRequest} = useFetch({url:'/api/v1/taskList', method: 'GET' })
  const [sendRequest, deleteLoading ] = useRequest({method: 'DELETE'})
  const [sendSecondRequest] = useRequest({method: 'PUT'})
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
    sendRequest(null, `/api/v1/taskList/${taskId}`).then(() => resendRequest())
  }

  const onFinish = (isCompleted, taskId) => {
    sendSecondRequest({isCompleted : !isCompleted}, `/api/v1/taskList/${taskId}`).then(() => resendRequest())
  }


  if(dataLoading | deleteLoading) return <div className="lds-dual-ring"></div>
  if(error) return <p>{error}</p>

  const doneTasks = taskList.filter((t) => t.isCompleted === true)

  return(
      <div>
        {doneTasks.map((t) => 
          <DoneTask key={t.id} id={t.id} title={t.title} name={t.name} deadline={t.deadline} isCompleted={t.isCompleted} delet={onDelete} finish={onFinish}/>
        )}
    </div>
  )
}


export default DonePage