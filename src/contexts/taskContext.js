import { createContext, useCallback, useContext, useMemo } from "react";
import useFetch from "../hooks/useFetch";
import useRequest from "../hooks/useRequest";

const TaskContext = createContext(null)

const TaskContextProvider = ({children}) => {
    const {response, error, loading: dataLoading, resendRequest} = useFetch({url:'/api/v1/taskList', method: 'GET' })
    const [sendDeleteRequest, deleteLoading] = useRequest({method: 'DELETE'})
    const [sendUpdateRequest, updateLoading] = useRequest({method: 'PUT'})
    const taskList = useMemo(() => {
        return response?.items.map(tasks => {
            return {
              title: tasks.title,
              name: tasks.name,
              deadline: tasks.deadline,
              isCompleted: tasks.isCompleted,
              id: tasks._uuid
            }
        }) || []
    },[response])


    const onDelete = useCallback(()=> (taskId) => {
            sendDeleteRequest(null, `/api/v1/taskList/${taskId}`).then(() => resendRequest())
          },[resendRequest])

    const onFinish = useCallback(() => (isCompleted, taskId) => {
        sendUpdateRequest({isCompleted : !isCompleted}, `/api/v1/taskList/${taskId}`).then(() => resendRequest())
      },[updateLoading])


    const contextValue = useMemo(() => ({
        dataLoading,
        deleteLoading,
        updateLoading,
        error,
        taskList,
        onDelete,
        onFinish
    }),[dataLoading, deleteLoading, updateLoading, error, taskList, onDelete, onFinish])

    return <TaskContext.Provider value={contextValue}>
        {children}
    </TaskContext.Provider>
}

export const useTaskContext = () => {
    const contextValue = useContext(TaskContext)
    if (!contextValue) throw new Error('You component is not inside TaskContextProvider')

    return contextValue
}


export default TaskContextProvider