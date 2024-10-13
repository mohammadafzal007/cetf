import React,{useState,useEffect} from 'react';
import contactbg from './about/aboutbg.jpg'
import {motion} from 'framer-motion';
import { useLocation } from 'react-router-dom'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import avatarwhatsapp from "./logo.avif"
import "./uparrow.css"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay } from 'swiper'; // Correct import for Autoplay and Pagination
// import 'swiper/swiper-bundle.css'; // Correct CSS import
// import './SwiperComponent.css'; // Optional: import your custom CSS file

import pic1 from "./about/pic1.avif"
import pic2 from "./about/pic2.avif"
import pic3 from "./about/pic3.avif"
import w1 from "./about/w1.avif"
import w2 from "./about/w2.webp"
import w3 from "./about/w3.webp"
import w4 from "./about/w4.avif"
import w5 from "./about/w5.avif"
import w6 from "./about/w6.avif"


const About = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const scrollToTop = () => {
      window.setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100); // Adjust the timeout as needed
    };

    scrollToTop();
  }, [pathname]);
  // Function to open the image in full screen
 
  return (
    <>
    {/* //title */}
    <div className="w-full h-[700px] lg:h-[600px] pt-8 bg-no-repeat bg-cover bg-fixed md:bg-no-repeat md:bg-cover md:bg-fixed" style={{backgroundImage:`url(${contactbg})`}}>
      <div className=' w-full lg:mt-32 md:mt-23 flex justify-center place-items-center flex-col gap-12'>
        <motion.h1
         className='w-[280px] lg:w-[1020px] md:w-[700px] md:text-5xl text-center text-4xl font-semibold lg:text-6xl mb-4 text-white xl:text-7xl xl:font-semibold xl:w-[1150px]'
         initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
         >Meet the Visionaries Behind EliteCyber Global Technologies LLP (Cyberelite Task Force)</motion.h1>
        <motion.h4 
        className='w-[350px] lg:w-[600px] md:w-[600px] md:text-[23px] text-center text-[20px] font-thin lg:text-xl text-white'
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        ><span className='font-bold '>At EliteCyber Global Technologies LLP</span>, we pride ourselves on our team of experts who drive innovation and excellence in the field of cyber security. Get to know the dedicated professionals shaping the future of cyber security and digital forensics at Cyberelite Task Force.</motion.h4>
      </div>
      </div>

      {/* members info */}
      <div className='p-10  w-full'>
      
        <div 
        className='flex flex-col gap-4 mb-4 justify-center place-items-center lg:justify-center lg:place-items-center '>
          <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className='text-4xl font-semibold text-white lg:text-6xl'>Meet Our Team</motion.h1>
          <motion.h3 
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
          className=' font-light text-gray-500 text-xl lg:text-2xl'>Get to know the 3 talented individuals behind CeTF: </motion.h3>
          <motion.h3 
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
          className=' font-light  text-gray-500 text-xl lg:text-2xl '>Gourav Jha, Gaurav Panwar and Kapil Tanwar.</motion.h3>
        </div>

        <div className='flex flex-col w-full gap-8 justify-center place-items-center  '>

<div className='flex flex-col gap-4  w-[280px] p-2 lg:flex-row-reverse  md:w-[750px] md:flex-row-reverse lg:w-[900px] xl:w-[1200px] xl:h-[400px]  '>
  <motion.img src={pic1} 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className='rounded-2xl h-[270px] xl:h-[350px]'/>
  <motion.div 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className='flex flex-col gap-4 '>
  <h1 className='font-bold text-2xl text-white xl:text-3xl'>Gourav Jha – Chief Executive Officer</h1>
  <p className='font-thin text-[15px] text-gray-300 xl:text-xl md:p-2'>As the CEO of EliteCyber Global Technologies LLP, Gourav Jha leads our digital forensics and incident response training and services. With a unique journey from a non-technical background to becoming a leading expert in cyber security, Gourav started his career as a Python trainer. He successfully trained individuals from diverse technical backgrounds, including BTech, BCA, and MCA students. Driven by a passion for ethical hacking, Gourav expanded his expertise to teach CEH v12 concepts and support law enforcement agencies in tackling cyber crimes. His hands-on experience spans forensic tools like TX1, Falcon Neo, Magnet Axiom, and FTK, as well as techniques for cryptocurrency fraud investigation using Chainalysis and Breadcrumbs. Gourav has also conducted numerous sessions on cyber awareness for senior law enforcement officers, focusing on cyber frauds, digital forensics, and the role of forensic investigations</p>
  </motion.div>
</div>
<div className='flex flex-col gap-4  w-[280px] p-2 lg:flex-row lg:w-[900px] md:w-[750px] md:flex-row xl:w-[1200px] xl:h-[400px]'>
  <motion.img src={pic2} 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className='rounded-2xl h-[270px] xl:h-[350px]'/>
  <motion.div 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className='flex flex-col gap-4'>
  <h1  className='font-bold text-2xl text-white xl:text-3xl'>Gaurav Panwar – Chief Technology Officer</h1>
  <p className='font-thin text-[15px] text-gray-300 xl:text-xl'>As the Chief Technology Officer, Gaurav Panwar is responsible for all CEH trainings, cyber security education, and VAPT (Vulnerability Assessment and Penetration Testing) services at EliteCyber Global Technologies LLP. With a strong technical background and a passion for computer games, Gaurav has developed a deep understanding of cyber security principles and cloud security. He excels in delivering both theoretical and practical training for CEH certifications, and has received commendations from senior law enforcement officers for his effective training methods. Gaurav’s role includes providing top-notch cyber security training and managing VAPT services to help organizations strengthen their security posture.</p>
  </motion.div>
</div>
<div className='flex flex-col gap-4  w-[280px] p-2 lg:flex-row-reverse lg:w-[900px] md:w-[750px] md:flex-row-reverse xl:w-[1200px] xl:h-[400px]'>
  <motion.img src={pic3} 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className='rounded-2xl h-[270px] xl:h-[350px]' />
  <motion.div 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
  className='flex flex-col gap-4'>
  <h1 className='font-bold text-2xl text-white xl:text-3xl'>Kapil Tanwar – Chief Security Officer</h1>
  <p className='font-thin text-[15px] text-gray-300 xl:text-xl'>Kapil Tanwar serves as the Chief Security Officer at EliteCyber Global Technologies LLP, where he oversees all cloud-related training and services. Beginning his career from a non-technical background, Kapil’s determination and enthusiasm for learning led him to excel in the field of cloud security. He started as an AWS Cloud Trainer, learning the core aspects of cybersecurity and developing expertise in cloud services. Today, he handles projects involving security deployment and infrastructure setup for organizations. Kapil is dedicated to providing high-quality training to corporate clients and managing cloud security projects with a focus on practical solutions and industry best practices.</p>
  </motion.div>
</div>
      </div>
      </div>
{/* webinar photos */}

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2 place-items-center">
    <div className='w-full overflow-hidden'>

      <img src={w1} alt="Image 1" className="w-full h-[500px] object-cover rounded-lg shadow-lg scale-1 transition-all duration-300 hover:scale-110 "></img>
    </div>
    <div className='w-full overflow-hidden'>

      <img src={w2} alt="Image 1" className="w-full h-[500px] object-cover rounded-lg shadow-lg scale-1 transition-all duration-300 hover:scale-110 overflow-hidden"></img>
    </div>
    <div className='w-full overflow-hidden'>

      <img src={w3} alt="Image 1" className="w-full h-[500px] object-cover rounded-lg shadow-lg scale-1 transition-all duration-300 hover:scale-110 overflow-hidden"></img>
    </div>
    <div className='w-full overflow-hidden'>

      <img src={w4} alt="Image 1" className="w-full h-[500px] object-cover rounded-lg shadow-lg scale-1 transition-all duration-300 hover:scale-110 overflow-hidden"></img>
    </div>
    <div className='w-full overflow-hidden'>

      <img src={w5} alt="Image 1" className="w-full h-[500px] object-cover rounded-lg shadow-lg scale-1 transition-all duration-300 hover:scale-110 overflow-hidden"></img>
    </div>
    <div className='w-full overflow-hidden '>

      <img src={w6} alt="Image 1" className="w-full h-[500px] object-contain rounded-lg shadow-lg scale-1 transition-all duration-300 hover:scale-110 overflow-hidden"></img>
    </div>
   
    </div>

    <button className="fixed bottom-32 right-6 rounded-xl  w-10 h-10 bg-white text-4xl text-blue-600 " title="Back To Top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><i class="fa-solid fa-angle-up"></i></button>
      <FloatingWhatsApp phoneNumber={"+917982011271"} accountName={"Support Team CETF"}
        // Optional: your avatar image
        statusMessage="Online" // Optional status message
        chatMessage={"Hello! How can we help you?"}
        avatar={avatarwhatsapp}
        // allowClickAway 
        notification
        notificationSound
        notificationDelay={5}
      />
    </>

  )
}

export default About