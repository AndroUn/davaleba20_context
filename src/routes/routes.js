import MainPage from "../pages/MainPage"
import CreatePage from "../pages/createPage"
import LinkLayout from "../Layout/LinkLayout"
import UpdatePage from "../pages/UpdatePage"
import DonePage from "../pages/donePage"
import TaskContextProvider from "../contexts/taskContext"
import LanguageContextProvider from "../contexts/languageContext"

const routes = [
    {
        element: ( <div>
        <LanguageContextProvider>
            <LinkLayout />
        </LanguageContextProvider>
    </div>),
        path: "/",
        children: [
            {
                element: (
                    <div>
                        <TaskContextProvider>
                            <MainPage />
                        </TaskContextProvider>
                    </div>
                ),
                index: true,
            },
            {
                element: <CreatePage />,
                path: '/create',
            },
            {
                element: (
                    <div>
                        <TaskContextProvider>
                            <DonePage />
                        </TaskContextProvider>
                    </div>
                ),
                path: '/done',
            },
        ]},
        {
            element: <UpdatePage />,
            path: '/update/:taskId',
        }

]


export default routes