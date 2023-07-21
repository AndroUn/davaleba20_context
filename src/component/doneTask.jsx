import { languageDictionary } from "../contexts/languageContext"
import styles from "../css_modules/todoList.module.css"
import { Link } from "react-router-dom"
import { useLanguageContext } from "../contexts/languageContext"

const DoneTask = ({id, title, name, deadline, delet, isCompleted, finish}) => {
    const {language}= useLanguageContext()

    return (
    <div className={styles.taskBox} key={id}>
        <div>
            <p className={styles.taskP}> {languageDictionary[language].taskTitle}: {title}</p>
            <p className={styles.taskP}> {languageDictionary[language].namePlaceholder}: {name}</p>
            <p className={styles.taskP}> {languageDictionary[language].deadline}: {deadline}</p>
        </div>
        <div className={styles.buttonWrapper}>
            <Link className={styles.editBtn} to={`/update/${id}`}> {languageDictionary[language].edit}</Link>
            <button className={styles.editBtn} onClick={()=> delet(id)}> {languageDictionary[language].delete}</button>
            <button className={styles.editBtn} onClick={()=> finish(isCompleted, id)}> {languageDictionary[language].notFinished}</button>
        </div>
    </div>

    )
} 
export default DoneTask