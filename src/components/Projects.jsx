import React from 'react'
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";


import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { blender_images } from '../constants/data';
import { fadeIn, textVariant } from '../utils/motion';
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/counter.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

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
  const [open, setOpen] = React.useState(false);

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
          Here are some things that I've coded!
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

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("","", 0.1, 1)}
          className='m-5 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Also some things I've create in Blender!
        </motion.p>
      </div>

      <div>
        <button className = 'p-5 rounded-2xl text-white font-bold bg-tertiary mx-auto block'
                type="button" onClick={() => setOpen(true)}>
          Click Me
        </button>

        <Lightbox
          plugins={[Captions, Counter, Thumbnails]}
          counter={{ container: { style: { top: "unset", bottom: 0 } } }}
          open={open}
          close={() => setOpen(false)}
          slides={blender_images}
        />
      </div>
    </>
  )
}

export default SectionWrapper(Projects, "projects");