import React from 'react'

import { motion } from 'framer-motion';
import { styles } from '../styles';
import { interests } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({index, title, icon}) => {
  return (
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1-px] rounded-[20px] shadow-card'
      >
        <div
        options={{
          max:45,
          scale: 1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex 
                    justify-evenly items-center flex-col'>
          <img src={icon} alt={title}
          className='w-16 h-16 object-contain'/>
          <h3 className='text-white font-bold text-[20px] text-center'>{title}</h3>
        </div>

      </motion.div>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I am a second year student studying Computer Science at the Universty of British Columbia. Here are some of my areas of interest!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {interests.map((interest, index) => (
            <ServiceCard key={interest.title} index={index} {...interest} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");