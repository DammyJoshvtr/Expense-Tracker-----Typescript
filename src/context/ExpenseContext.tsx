import { createContext, useContext, useState, useEffect } from 'react'

interface Expense {
  title: string
  amount: string
  date: string
  description: string
}

interface ExpenseContextType {
  expenses: Expense[]
  addExpense: (expense: Expense) => void
}

const ExpenseContext = createContext<ExpenseContextType | null>(null)

export const ExpenseProvider = ({ children }: { children: React.ReactNode }) => {

  // Load from localStorage correctly
  const [expenses, setExpenses] = useState<Expense[]>(() => {
    const saved = localStorage.getItem("expenses")
    return saved ? JSON.parse(saved) : []
  })
  
  const addExpense = (expense: Expense) => {
    setExpenses(prev => [...prev, expense])
  }

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses))
  }, [expenses])

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
