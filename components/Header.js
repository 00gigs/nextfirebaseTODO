import React from 'react'

export const Header = () => {
  return (
    <div className='sticky top-0 w-full left-0 bg-slate-900 bg-inherit border-b border-white flex items-center justify-between p-4'>
        <h1 className='text-3xl select-none sm:text-6xl font-bold'>TODO LIST</h1>
        <i class="fa-solid fa-user text-xl duration-300 hover:opacity-40 sm:text-3xl"></i>
    </div>
  )
}
