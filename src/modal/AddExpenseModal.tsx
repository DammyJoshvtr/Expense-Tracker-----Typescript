import React, { useRef, useEffect, useState } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
  onClose: () => void
}

interface Expense {
  expenseTitle: string,
  expenseAmount: string,
  expenseDate: string,
  expenseDescription: string
}

const AddExpenseModal: React.FC<ModalProps> = ({ onClose }) => {
  const [expenseTitle, setExpenseTitle] = useState<string>('')
  const [expenseAmount, setExpenseAmount] = useState<string>('')
  const [expenseDate, setExpenseDate] = useState<string>('')
  const [expenseDescription, setExpenseDescription] = useState<string>('')
  const [allExpense, setAllExpense] = useState<Expense[]>([]) 

  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleCloseModal = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleCloseModal)
    return () => document.removeEventListener('mousedown', handleCloseModal)
  }, [onClose])

  const handleSubmitExpense = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault()
    setAllExpense([...allExpense, {expenseTitle, expenseAmount, expenseDate, expenseDescription} ])

    setExpenseTitle('')
    setExpenseAmount('')
    setExpenseDate('')
    setExpenseDescription('')

    console.log([...allExpense, {expenseTitle, expenseAmount, expenseDate, expenseDescription} ])
  }

  const isFormComplete =
    !expenseTitle ||
    !expenseAmount ||
    !expenseDate ||
    !expenseDescription

  return (
    <div ref={modalRef} className='bg-white p-6 rounded-md shadow-lg w-96'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl mb-4'>Add New Expense</h2>
        <X
          size={25}
          className='hover:text-red-500 cursor-pointer'
          onClick={onClose}
        />
      </div>

      <form onSubmit={handleSubmitExpense} className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='Expense Title'
          value={expenseTitle}
          onChange={(e) => setExpenseTitle(e.target.value)}
          className='h-12 border-2 px-4 rounded-md'
        />

        <input
          type='number'
          placeholder='Amount ($)'
          value={expenseAmount}
          onChange={(e) => setExpenseAmount((e.target.value))}
          className='h-12 border-2 px-4 rounded-md'
        />

        <input
          type='date'
          value={expenseDate}
          onChange={(e) => setExpenseDate(e.target.value)}
          className='h-12 border-2 px-4 rounded-md'
        />

        <textarea
          placeholder='Description'
          value={expenseDescription}
          onChange={(e) => setExpenseDescription(e.target.value)}
          className='h-24 border-2 px-4 rounded-md resize-none'
        />

        <button
          type='submit'
          disabled={ isFormComplete }
          // onClick={() => setExpenseTitle('')}
          className={` py-2 rounded  ${isFormComplete? 'bg-gray-500 text-white cursor-not-allowed': 'bg-blue-500 text-white hover:bg-blue-600 cursor-pointer'}`}
        >
          Add Expense
        </button>
      </form>
    </div>
  )
}

export default AddExpenseModal
