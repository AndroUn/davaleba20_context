import { useNavigate } from 'react-router-dom';
import TodoForm from '../component/TodoForm';
import useRequest from '../hooks/useRequest';



const CreatePage = () => {

    const [sendRequest, loading] = useRequest({url:'/api/v1/taskList', method: 'POST'})
    const navigate = useNavigate()

    const onSubmit = ({title, name, deadline, isCompleted}) => {
        sendRequest([{title, name, deadline, isCompleted}])
        .then(() => navigate('/'))
        .catch(err => console.log(err))
    }

    if(loading) return <div className="lds-dual-ring"></div>

    return(
        <div>
            <TodoForm onFormSubmit={onSubmit}/>
        </div>
    )
    
}

export default CreatePage