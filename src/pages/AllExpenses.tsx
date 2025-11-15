import { useEffect, useState } from "react"
import { useExpense } from "../context/ExpenseContext"

const AllExpenses = () => {
  const { expenses } = useExpense()

  const [showExpenses, setShowExpenses] = useState<typeof expenses>([])

  useEffect(() => {
    setShowExpenses([...expenses])
  }, [expenses])

  return (
    <section className="p-4">
      <h1 className="text-5xl mb-6">All Expenses</h1>

      <div className="flex flex-col gap-4">
        {showExpenses.length === 0 ? (
          <p>No expenses yet.</p>
        ) : (
          showExpenses.map((exp, index) => (
            <div key={index} className="border p-4 rounded-md shadow">
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <p>Amount: ${exp.amount}</p>
              <p>Date: {exp.date}</p>
              <p>Description: {exp.description}</p>
            </div>
          ))
        )}
      </div>
    </section>
  )
}

export default AllExpenses
