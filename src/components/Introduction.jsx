import React from 'react';

import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SpaceCanvas } from './canvas';

const Introduction = () => {
  return (
    <section id="top" className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl
                      mx-auto flex flex-row items-start gap-5`}>
        <div>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#d1e7e7]'>Rachel</span></h1>
            <p className={`${styles.heroSubText} mt-2 text-secondary`}>
                Welcome to my personal website.
            </p>
        </div>
      </div>

      <div className='cursor-pointer w-full h-full z-0'>
        <SpaceCanvas />
      </div>

    </section>
  )
}

export default Introduction;