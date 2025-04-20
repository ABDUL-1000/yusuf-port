import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MvvingBar'

const Experience = () => {
  return (
    <div className='py-20'>
    <h1 className='text-center lg:text-[3rem] font-bold text-sm'>
        My {''}
        <span className='text-purple-300'> Work Experience

        </span>

    </h1>
  <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 items-center gap-10'>
   {workExperience.map((card) => (
      <Button
      key={card.id}
        duration={Math.floor(Math.random() * 1000) + 1000}
        borderRadius="1.75rem"
        className="flex-1 text-white border-slate-200 dark:border-slate-800"
      >
        <div className='flex flex-col lg:items-center py-6 p-3 lg:flex-row lg:p-10 gap-2 md:p-5'>
        <img src={card.thumbnail} alt={card.thumbnail}  className='lg:w-32 md:w-20 w-16'/>
        <div className='lg:ms-5'>
          <h1 className='text-start text-xl font-bold md:font-2xl'>
            {card.title}
          </h1>
          <p className='text-start text-gray-400 mt-3 font-semibold'>
            {card.desc}

          </p>
        </div>
        </div>
      </Button>
   ))}
</div>
</div>
  )
}

export default Experience
