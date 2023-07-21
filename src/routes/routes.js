import MainPage from "../pages/MainPage"
import CreatePage from "../pages/createPage"
import LinkLayout from "../Layout/LinkLayout"
import UpdatePage from "../pages/UpdatePage"
import DonePage from "../pages/donePage"
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
                element: <MainPage />,
                index: true,
            },
            {
                element: <CreatePage />,
                path: '/create',
            },
            {
                element: <DonePage />,
                path: '/done',
            },
        ]},
        {
            element: ( <div>
                <LanguageContextProvider>
                    <UpdatePage />
                </LanguageContextProvider>
            </div>),
            path: '/update/:taskId',
        }
]


export default routes