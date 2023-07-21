import { createContext, useContext, useState } from "react"

export const languageDictionary = {
    en : {
           edit: 'Edit',  
           delete: 'Delete',
           finish: 'Finish',
           namePlaceholder: 'Name',
           taskTitle: 'Task',
           deadline: 'deadline',
           submit: 'submit',
           mainPage: 'Main Page',
           createPage: 'Create Page',
           donePage: 'Done tasks',
           notFinished: 'is not Done'

        },

    ka : { 
            edit: 'შეცვლა',   
            delete: 'წაშლა',
            finish: 'დასრულება',
            namePlaceholder: 'სახელი',
            taskTitle: 'ტასკი',
            deadline: 'დედლაინი',
            submit: 'შექმნა',
            mainPage: 'მთავარი გვერდი',
            createPage: 'ახალი ტასკის შექმნა',
            donePage: 'დასრულებული ტასკები',
            notFinished: 'შესასრულებელი'

    }
}




const LanguageContext = createContext(null)

const LanguageContextProvider = ({children}) => {
    const [language, setLanguage] = useState(true)


    const contextValue = ({
        language: language ? 'en' : 'ka',
        toggleLanguage: ()=> setLanguage((prev) => !prev)
    })

    return <LanguageContext.Provider value={contextValue}>
        {children}
    </LanguageContext.Provider>
}


export const useLanguageContext = () => {
    const contextValue = useContext(LanguageContext)
    if (!contextValue) throw new Error('You component is not inside TaskContextProvider')

    return contextValue
}

export default LanguageContextProvider