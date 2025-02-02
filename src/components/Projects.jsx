import React from 'react'

import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({index, name, description, tags, image, source_code_link}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div className="p-5 rounded-2xl xs:w-[360px] w-full bg-tertiary"
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}>
          <div onClick={() => window.open(source_code_link, "_blank")} className='relative w-full h-[230px] cursor-pointer hover:brightness-50'>
          <img src={image} alt={name} className='w-full h-full object-cover rounded-2xl'/>
          </div>

          <div className='mt-5'>
            <h3  className='text-[23px] text-white font-bold'>{name}</h3>
            <p className='text-secondary mt-2 text-[14px]'>{description}</p>
          </div>

          <div className='mt-4 flex flex-wrap gap-2'>
            {tags.map((tag) => (
              <p key={tag.name}
              className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Some personal projects I have worked on</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("","", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Here are some personal projects that I've worked on.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`}
                         index={index}
                         {...project}
            />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects");