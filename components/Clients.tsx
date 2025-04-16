import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

const Clients = () => {
  return (
   <div className='py-20'>
           <h1 className='text-center lg:text-[3rem] font-bold text-sm'>
               Kind words from {''}
               <span className='text-purple-300'> satisfied Clients
   
               </span>
   
           </h1>
         <div className='flex flex-col items-center justify-center max-lg:mt-10 '>
          <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
          <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed='slow'
        
          />
          <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 mt-10'>
            {companies.map(({id, img, nameImg, name}) => (
                <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                  <img src={img} 
                  alt={name} 
                  className='md:max-w-10 max-w-5'
                  />
                  <img src={nameImg} 
                  alt={name} 
                  className='md:max-w-24 max-w-20'
                  />
                </div>
            ))}
          </div>
          </div>
          </div>
         </div>
  )
}

export default Clients
