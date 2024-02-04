import { createBrowserRouter } from 'react-router-dom'
import { App } from './App'
import { Error } from './Error'
import { Users } from './Users'

export const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,
            errorElement: <Error />,
        },
        {
            path: '/users/:id',
            element: <Users />,
            errorElement: <Error />,
        },
    ])
