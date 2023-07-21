import { useNavigate, useParams } from "react-router-dom"
import TodoForm from "../component/TodoForm"
import useFetch from "../hooks/useFetch"
import useRequest from "../hooks/useRequest"

const UpdatePage = () => {
    const {taskId} = useParams() 
    const {response, loading, error} = useFetch({url:`/api/v1/taskList/${taskId}`, method: 'GET' })

    const navigate = useNavigate()
    const [sendRequest]= useRequest({url: `/api/v1/taskList/${taskId}`, method: 'PUT'})
    const onSubmit = ({title, name, deadline, isCompleted}) => {
        sendRequest({title, name, deadline, isCompleted})
        .then(() => navigate('/'))
        .catch((err) => console.log(err))
    }

    if (loading && !response) return <div className="lds-dual-ring"></div>
    if (error || !response) return <p>Something went wrong</p>

    return <TodoForm onFormSubmit={onSubmit} taskName={response.title} SmnName={response.name} deadline={response.deadline}/>
}

export default UpdatePage