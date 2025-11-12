import React from 'react'
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider } from 'react-router-dom'
  import MainLayout from './layouts/MainLayout.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>

    </Route>
  )
)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App