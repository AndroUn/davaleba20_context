import { Link, Outlet } from "react-router-dom"
import styles from '../css_modules/todoList.module.css'
import { useLanguageContext, languageDictionary } from "../contexts/languageContext"

const LinkLayout = () => {
    const {language, toggleLanguage}= useLanguageContext()
    return(
        <div>
            <div className={styles.menu}>
                <Link className={styles.menu_item} to={'/'}> {languageDictionary[language].mainPage} </Link>
                <Link className={styles.menu_item} to={'/create'} > {languageDictionary[language].createPage} </Link>
                <Link className={styles.menu_item} to={'/done'} > {languageDictionary[language].donePage} </Link>
            </div>
                <select onChange={toggleLanguage} className={styles.languages} >
                <option value="en">English</option>
                <option value="ka">ქართული</option>
                </select>
            <Outlet />
        </div>
    )
}

export default LinkLayout