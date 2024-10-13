import React from 'react'
import cetflogo from "./logo.avif"
import {motion} from 'framer-motion'
import msme from "./MSME_logo.png"
const Footer = () => {
  return (
    <>
 <hr/>
    <div className='flex justify-between place-items-center space-y-4 flex-col lg:flex-row p-10'>
      <div className='flex gap-6 flex-col justify-center place-items-center'>
        <motion.img 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        src={cetflogo} className='w-[200px]'/>
        <motion.h4 
         initial={{ y: 50, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
        className='text-white text-xl'>© 2024. All rights reserved.</motion.h4>
      </div>
      <motion.img 
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      src={msme} className="w-[200px]"/>
      <div
      className='text-white space-y-2 grid grid-cols-1 text-xl'>
        <h1>CONTACT US</h1>
        <motion.a 
         initial={{ y: 50, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
        href="tel:+91 7982011271" >+91 7982011271</motion.a>
        <motion.a 
         initial={{ y: 50, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         viewport={{ once: true }}
         transition={{ duration: 0.5 }}
        href="mailto:mail@cetf.org.in">mail@cetf.org.in</motion.a>
      <motion.ul 

      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className=" flex  gap-4 flex-row justify-center place-items-center">
      
      {/* href="https://www.facebook.com/cetf.in" */}
      <li className='hover:text-blue-700'><a href="https://www.facebook.com/cetf.in"className="fa-brands fa-facebook"></a></li>
      <li className='hover:text-red-700'><a href="https://www.instagram.com/cetf.in?igsh=aW1vZGN2eXRxeW9i"className="fa-brands fa-instagram"></a></li>
      <li className='hover:text-blue-700'><a href="https://www.linkedin.com/company/cyberelite-task-force/"className="fa-brands fa-linkedin"></a></li>
        </motion.ul>
      </div>
      {/* <motion.div>
        <motion.form 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='flex flex-col space-y-4 place-items-start justify-center mr-[-20px] text-white '>
          <h4 className='text-xl'>Enroll in our exclusive Cyber Security Training sessions</h4>
          <input type="email" placeholder="Enter Email for more info" className='bg-white text-black p-2 w-full text-xl '/>
          <button className='btn w-full text-white text-xl '>Submit for more Information</button>
        </motion.form>
      </motion.div> */}
    </div>

    
    </>

  )
}

export default Footer