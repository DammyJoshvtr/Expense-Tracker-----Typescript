import React from 'react'
import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider } from 'react-router-dom'
import {ExpenseProvider} from './context/ExpenseContext.tsx'
import MainLayout from './layouts/MainLayout.tsx'
import Dashboard from '../src/pages/Dashboard.tsx'
import AllExpenses from '../src/pages/AllExpenses.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Dashboard />} />
      <Route path='/allexpenses' element={<AllExpenses />} />
    </Route>
  )
)

const App = () => {
  return (
    <ExpenseProvider>
      <RouterProvider router={router} />
    </ExpenseProvider>
  )
}

export default App