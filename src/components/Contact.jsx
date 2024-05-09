import React from 'react'

import {motion }from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn, textVariant } from '../utils/motion';
import { contact_links } from '../constants';
import { Tilt } from 'react-tilt';

const Contact = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Let's connect!</p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>

      <div className='flex justify-center mt-10'>
          <motion.div variants={textVariant()}
            className='bg-tertiary flex justify-around items-center
                   w-[600px] h-[400px] rounded-2xl border-t-2 border-b-2'>
            {contact_links.map((link, index) => (
              <div className='flex flex-col items-center'>
                <img className="w-20 h-20"src={link.image}/>
                <a href={`http://${link.link}`} target="_blank" 
                  className='mt-5 font-bold text-secondary hover:text-blue-400'>
                  {link.name}
                </a>
              </div>

            ))}
          </motion.div>
        </div>

        <div className='flex mt-20 justify-center'>
          <a href="#top"> 
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div 
            animate={{
              y:[0, 24, 0]}}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className='w-3 h-3 rounded-full bg-secondary mb-1' />
          </div>
          </a>

        </div>


    </>
  )
}

export default SectionWrapper(Contact, "contact");