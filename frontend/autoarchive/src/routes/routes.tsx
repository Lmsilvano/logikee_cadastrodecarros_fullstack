import HomePage from '../pages/HomePage'
import AutoExplorePage from '../pages/AutoExplorePage.tsx'

export const privateRoutes = [
    {
        path: "/",
        element: <HomePage />,

    },
    {
        path: "autoexplore",
        element: <AutoExplorePage />
    }
]


export const publicRoutes = [
    {
        path: '/signin',
        element: null
    }
]