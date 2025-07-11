import React, { useState } from 'react'
import { faBars, faCog, faCross, faEnvelope, faGear, faHeart, faMailBulk, faMoon, faPhone, faPlus, faRobot, faUserGroup, faVestPatches} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
// import { faMoon } from '@fortawesome/free-solid-svg-icons';
import {motion} from 'motion/react'
const Sidebar = () => {
  const [modes,setModes] = useState(true);
  return (
    <motion.div 
      initial={{opacity:0.5,x:-500,scaleX:2}}
      animate={{x:0,opacity:1,y:0,scaleX:1}}
      transition={{delay:0.1,duration:0.5,ease:'easeInOut'}}
    className='sidebar-container'>

      <motion.div
      initial={{opacity:0,x:-300}}
      animate={{x:0,opacity:1,y:0}}
      transition={{delay:0.2,duration:0.3,ease:'easeInOut'}}
       className='features'><FontAwesomeIcon icon={faPlus}  className='featureIcon' /><span> New Chat</span></motion.div>

      <motion.div
      initial={{opacity:0,x:-300}}
      animate={{x:0,opacity:1,y:0}}
      transition={{delay:0.2,duration:0.3,ease:'easeInOut'}}
      onClick={()=>setModes(prev=>!prev)}
       className='features'><FontAwesomeIcon icon={modes?faSun:faMoon} className='featureIcon' /><span>{modes?'Light':'Dark'}</span></motion.div>

      <motion.div
      initial={{opacity:0,x:-300}}
      animate={{x:0,opacity:1,y:0}}
      transition={{delay:0.2,duration:0.3,ease:'easeInOut'}}
       className='features'><FontAwesomeIcon  icon={faUserGroup} className='featureIcon'/><span>Groups</span></motion.div>

      <motion.div
      initial={{opacity:0,x:-300}}
      animate={{x:0,opacity:1,y:0}}
      transition={{delay:0.2,duration:0.3,ease:'easeInOut'}}
       className='features'><FontAwesomeIcon icon={faHeart}  className='featureIcon' /><span>Favourites</span></motion.div>

      <motion.div
      initial={{opacity:0,x:-300}}
      animate={{x:0,opacity:1,y:0}}
      transition={{delay:0.2,duration:0.3,ease:'easeInOut'}}
       className='features'><FontAwesomeIcon icon={faRobot}  className='featureIcon' /><span>AI</span></motion.div>

      <motion.div
      initial={{opacity:0,x:-300}}
      animate={{x:0,opacity:1,y:0}}
      transition={{delay:0.2,duration:0.3,ease:'easeInOut'}}
       className='features'><FontAwesomeIcon icon={faCog} className='featureIcon' /><span>Settings</span></motion.div>

      <motion.div
      initial={{opacity:0,x:-300}}
      animate={{x:0,opacity:1,y:0}}
      transition={{delay:0.2,duration:0.3,ease:'easeInOut'}}
       className='features'><FontAwesomeIcon icon={faEnvelope} className='featureIcon' /><span>Contact us</span></motion.div>

    </motion.div>
  )
}

export default Sidebar
