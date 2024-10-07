import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorView from './components/views/ErrorView.jsx'
import MainView from './components/views/MainView.jsx'
import ZoomedView from './components/views/ZoomedView.jsx'

const router = createBrowserRouter(

  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<ErrorView />}>
      <Route path='' element={<MainView />} />
      <Route path='/:projectId' element={<ZoomedView />} />
    </Route>
  )


);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
