import React from 'react'

const Titlebar = () => {
  return (
    <div className='w-full h-20 flex flex-row justify-between items-center px-8 bg-gray-200'>
      {/* title */}
      <div className='text-2xl'>
        Expense Tracker
      </div>

      {/* search bar */}
      <div>
        <input
        type='text'
        placeholder='Search Anything'
        className='w-xl h-11 border-2 rounded-md focus:outline-none focus:ring-1 px-4' />
      </div>

      {/* other Info */}
      <div className='flex flex-row justify-between items-center w-48 text-[20px]'>
        <div>
          Signin
        </div>
        <div>
          Login
        </div>
      </div>
    </div>
  )
}

export default Titlebar