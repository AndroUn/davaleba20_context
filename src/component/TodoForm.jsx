import styles from '../css_modules/todoList.module.css'
import { useState, useRef } from 'react';
import { useLanguageContext, languageDictionary } from '../contexts/languageContext';


const TodoForm = ({onFormSubmit, taskName, SmnName, deadline}) => {

    const taskRef = useRef()
    const nameRef = useRef()
    const deadlineRef = useRef()
    const [isCompleted] = useState(false)
    const {language}= useLanguageContext()
   

    const onSubmit = (e) => {
        e.preventDefault() 
        const newTask = {
            title: taskRef.current.value,
            name: nameRef.current.value,
            deadline: deadlineRef.current.value,
            isCompleted: isCompleted
        }

        if(taskRef.current && taskRef.current.value.trim() !== "" && nameRef.current.value.trim() !== "" && deadlineRef.current.value.trim() !== "" ){
            onFormSubmit(newTask)
        }else{
            alert("Enter data")
        }
    }

    return(
        <div>
            <form onSubmit={onSubmit} className={styles.toDoForm}>
                <input 
                    type="text"
                    placeholder={languageDictionary[language].taskTitle}
                    ref = {taskRef}
                    defaultValue={taskName}
                    className={styles.formInput}
                />

                <input 
                    type="text"
                    placeholder={languageDictionary[language].namePlaceholder}
                    ref = {nameRef}
                    defaultValue={SmnName}
                    className={styles.formInput}
                />

                <input 
                    type="date"
                    ref = {deadlineRef}
                    defaultValue={deadline}
                    className={styles.formInput}
                />



                <button className={styles.formBtn}>{languageDictionary[language].submit}</button>
            </form>
        </div>
    )
}

export default TodoForm