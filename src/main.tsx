import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store, persistor } from './redux/index.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { RouterProvider} from 'react-router-dom'
import { router } from './routes/Routes.tsx'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PersistGate loading={ null } persistor={ persistor }>
      <Provider store={ store }>
        <RouterProvider router={ router } />
      </Provider>
    </PersistGate>
  </React.StrictMode>,
)
