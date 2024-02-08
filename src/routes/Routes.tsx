import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from './HomePage'
import { ErrorPage } from './ErrorPage'
import { UserPage } from './UserPage'

export const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/users/:id',
            element: <UserPage />,
            errorElement: <ErrorPage />,
        },
    ])
