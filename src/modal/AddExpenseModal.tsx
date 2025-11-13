import React, { useRef, useEffect } from 'react'
import { X } from 'lucide-react'
interface ModalProps {
  onClose: () => void
}

const AddExpenseModal: React.FC<ModalProps> = ({ onClose }) => {
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

  return (
    <div className='bg-white p-6 rounded-md shadow-lg w-96'>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl mb-4'>Add New Expense</h2>
        <X size={25} 
        className='hover:text-red-500 cursor-pointer'
        onClick={ onClose } />
      </div>
      <form className='flex flex-col gap-4'>
        <input
          type='text'
          placeholder='Expense Title'
          className='h-12 border-2 px-4 rounded-md' />
        
        <input
          type='number'
          placeholder='Amount ($)'
          className='h-12 border-2 px-4 rounded-md' />

        <input
          type='date'
          placeholder='Date'
          className='h-12 border-2 px-4 rounded-md' />

        <input
          type='textarea'
          placeholder='Description'
          className='h-24 border-2 px-4 rounded-md' />

        <button
          type='submit'
          className='bg-blue-500 text-white py-2 rounded hover:bg-blue-600'
        >
          Add Expense
        </button>
      </form>
    </div>
  )
}

export default AddExpenseModal