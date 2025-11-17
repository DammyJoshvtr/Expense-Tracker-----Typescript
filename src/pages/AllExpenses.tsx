import { useEffect, useState } from "react"
import { useExpense } from "../context/ExpenseContext"
import { X, ArrowUpDown } from 'lucide-react'

const AllExpenses = () => {
  const { expenses, deleteExpense } = useExpense()

  const [showExpenses, setShowExpenses] = useState<typeof expenses>([])

  useEffect(() => {
    setShowExpenses([...expenses])
  }, [expenses])

  return (
    <section className="p-6 w-full">

      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        
        {/* Title + Sort */}
        <div className="flex items-center gap-6">
          <h1 className="text-4xl font-semibold text-gray-800">
            All Expenses
          </h1>

          <div className="flex items-center gap-2 border rounded-md px-3 py-2 bg-white shadow-sm">
            <span className="text-gray-600 text-sm font-medium flex flex-row items-center gap-2">
              <ArrowUpDown />
              Sort by:</span>
            <select className="focus:outline-none bg-transparent text-sm text-gray-800">
              <option>Title</option>
              <option>Amount</option>
              <option>Date</option>
            </select>
          </div>
        </div>

        {/* Total */}
        <div className="text-green-700 text-2xl font-semibold">
          Total: $0
        </div>
      </div>

      {/* Expenses List */}
      <div className="flex flex-col gap-6">
        {showExpenses.length === 0 ? (
          <p className="text-gray-500 text-lg">No expenses yet.</p>
        ) : (
          showExpenses.map((exp, index) => (
            <div 
              key={index} 
              className="
                w-full md:w-2/3 lg:w-1/2 
                p-6 bg-white rounded-xl border shadow-md 
                transition-transform duration-200 hover:scale-[1.01]
              "
            >
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {exp.title}
                </h3>

                <X size={25} className='hover:text-red-500 cursor-pointer'
                onClick={ () => deleteExpense(index) } />
              </div>

              <div className="space-y-1 text-gray-700">
                <p className="text-lg">
                  <span className="font-semibold">Amount:</span> ${exp.amount}
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Date:</span> {exp.date}
                </p>
                <p className="text-lg">
                  <span className="font-semibold">Description:</span> {exp.description}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

    </section>
  )
}

export default AllExpenses
