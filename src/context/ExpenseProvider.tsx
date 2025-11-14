import { createContext, useContext, useState } from 'react'

interface Expense {
  title: string,
  amount: string,
  date: string,
  description: string
}

interface ExpenseContextType {
  expenses: Expense[],
  addExpense: (expense: Expense) => void
}

const ExpenseContext = createContext<ExpenseContextType | null>(null)

export const ExpenseProvider = ({ children }: { children: React.ReactNode }) => {
  const [expenses, setExpenses] = useState<Expense[]>([])

  const addExpense = (expense: Expense) => {
    setExpenses(prev => [...prev, expense])
  }

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  )
}

export const useExpense = () => {
  const context = useContext(ExpenseContext)
  if (!context) {
    throw new Error("useExpense must be used inside an ExpenseProvider")
  }
  return context
}