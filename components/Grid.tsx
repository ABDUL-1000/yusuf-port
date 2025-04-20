'use client'

import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { projects } from '@/data'
import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemLeft = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const itemRight = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const Grid = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className=""
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center lg:text-[3rem] font-bold text-sm pb-20"
      >
        Some of My{' '}
        <span className="text-purple-300">
          Projects
        </span>
      </motion.h1>

      <motion.section
        id="projects"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {
          projects.map(({ id, title, img, des, link, iconLists }, i) => (
            <motion.div
              key={id}
              variants={i % 2 === 0 ? itemLeft : itemRight}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <BentoGridItem
                id={id}
                title={title}
                description={des}
                link={link}
                icon={iconLists}
                img={img}
              />
            </motion.div>
          ))
        }
      </motion.section>
  
    </motion.div>
  )
}

export default Grid
