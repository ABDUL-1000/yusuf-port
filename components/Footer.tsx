import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
<footer className='w-full md:mb-5 mb-[100px] pb-10 ' id='contact'>
<div className='w-full absolute left-0 -bottom-72 min-h-92'>
<img src="/footer-grid.svg" alt="grid" 
className='w-full h-full opacity-50'
/>
</div>
<div className='flex flex-col  items-center'>
<h1 className='lg:max-w-[45vw] text-center '>
    Ready to take <span className='text-purple-300'>your</span> digital presence to the <span className='text-purple-300'>next level?</span> 
</h1>
<p className='text-white md:mt-10 text-center my-5'>
    Reach out to me today and let's discuss how I can help you achive your goals.
</p>
<a href="mailto:abdullatifgiwa2019@gmail.com">
    <MagicButton title="Let's get in touch" position="right"
    icon={<FaLocationArrow/>}/>
</a>
</div>
<div className='flex mt-16 md:flex-row flex-col items-center justify-between'>
    <p className='md:text-base text-center text-sm md:text-normal font-light'>Copywrite © 2025 Abdullateef</p>

<div className='flex items-center md:gap-3 gap-2 lg:gap-6'>
{socialMedia.map((profile) => (
    <div key={profile.id} className='w-10 h-10 cursor-pointer  flex items-center justify-center backdrop-blur-lg saturate-150 bg-opacity-75 bg-black rounded-lg border border-black'>
        <img src={profile.img} alt={profile.alt} width={20} height={20}/>

    </div>
    
))}
</div>
</div>
</footer>
  )
}

export default Footer
