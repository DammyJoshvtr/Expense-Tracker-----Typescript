import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddExpenseModal from '../modal/AddExpenseModal.tsx'

const Homepage = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)

  const handleModalOpen = () => {
    setIsOpen(true)
  }

  return (
    <section className='min-h-screen flex flex-col justify-center items-center'>
      <h1 className='text-5xl font-bold mb-6'>💰 Expense Tracker</h1>
      <p className='text-lg text-center mb-8 max-w-md'>
        Track your daily spending, manage your budget, and gain insights into your expenses.
      </p>

      <div className='flex gap-4'>
        <button
          onClick={ handleModalOpen }
          className='border px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600 cursor-pointer'
        >
          Add Expense
        </button>

        <button
          onClick={() => navigate('/allexpenses')}
          className='border px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer'
        >
          All Expenses
        </button>
      </div>

      {
        isOpen && (
          <div className='fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex justify-center items-center'>
            <AddExpenseModal onClose={() => setIsOpen(false)} />
          </div>
      )}
    </section>
  )
}

export default Homepage
