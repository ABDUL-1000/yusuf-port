import { socialMedia } from '@/data'

import Image from 'next/image'
import React from 'react'

const SocialMedia = () => {
  return (
    <div className='gap-3 m-2 flex '>
      {socialMedia.map(({id, alt, href, img}) => (
          <div key={id} className=' '>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Image
                src={img}
                alt={alt}
                width={50}
                height={50}
                className='rounded-full border-[0.05rem] p-2 border-blue-950 dark:border-white'

              
              />

              
            </a>
          </div>
          
      ))}
    </div>
  )
}

export default SocialMedia
