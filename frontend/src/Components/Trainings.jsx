
import { Link } from 'react-router-dom';
import React,{useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import "./uparrow.css"
import avatarwhatsapp from "./logo.avif"

import bg from "./trainings/bg.jpg"
import { motion } from 'framer-motion';
import pic1 from "./trainings/pic1.avif";
import pic2 from "./trainings/pic2.avif";
import pic3 from "./trainings/pic3.avif";
import pic4 from "./trainings/pic4.avif";
import whychoose1 from "./trainings/whychoose1.avif";
import whychoose2 from "./trainings/whychoose2.avif";
import whychoose3 from "./trainings/whychoose3.avif";
import whychoose4 from "./trainings/whychoose4.avif";
const Trainings = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100); // Adjust the timeout as needed
    };

    scrollToTop();
  }, [pathname]);
  return (

    <>



    {/* //title */}
      <div className="w-full h-[600px] lg:h-[600px] pt-8 bg-no-repeat bg-cover bg-fixed md:bg-no-repeat md:bg-cover md:bg-fixed" style={{ backgroundImage: `url(${bg})` }}>
        <div className=' w-full lg:mt-32 mt-20 flex justify-center place-items-center flex-col gap-12'>
          <motion.h1
            className='w-[350px] lg:w-[1030px] text-center text-5xl font-semibold lg:text-7xl mb-4 text-white md:text-7xl md:w-[600px]'
            initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
          >Our Trainings</motion.h1>
          <motion.h4
            className='w-[350px] lg:w-[1000px] xl:w-[1300px] text-center text-[21px] font-thin lg:text-3xl md:text-3xl text-white md:w-[700px]'
            initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
          ><span className='font-bold '>At EliteCyber Global Technologies LLP</span>, we offer comprehensive training programs designed to equip you with the skills needed to excel in the field of cybersecurity and cloud computing. Our expert-led courses provide hands-on experience and in-depth knowledge, preparing you for real-world challenges. Explore our specialized training programs below:</motion.h4>
        </div>
      </div>






      {/* //courses */}
      <div className='flex flex-col justify-center place-items-center w-full mt-4 gap-4'>
        <div className='h-[750px] w-[330px]   md:flex-row md:w-[700px]  md:h-[400px] lg:w-[1020px] lg:h-[400px] flex flex-col lg:flex-row md:p-2 p-4  gap-4 rounded-2xl  xl:w-[1300px]'>
          <motion.img src={pic1}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='w-[330px] h-[300px] rounded-2xl lg:w-[500px] xl:h-[350px] ' />
          <div className='flex flex-col justify-start  place-items-start lg:w-[450px] xl:w-[750px] gap-4 w-[330px] md:h-[350px] h-[300px] p-4 md:p-0  xl:h-[350px]'>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='font-bold text-white text-xl xl:text-3xl'>Cyber Security 6-Months Diploma</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='text-gray-400 text-xl  xl:text-2xl xl:w-[650px] lg:w-[400px]'>Our Cyber Security Diploma is a comprehensive 6-month program designed to give you a solid foundation in cybersecurity principles and practices. This program consists of six modules, each targeting a crucial aspect of cybersecurity:</motion.p>
            <Link to="/cybersecurity" className='btn text-xl text-white bg-sky-600'>More Info</Link>
          </div>
        </div>
        <div className='h-[750px] w-[330px]  lg:w-[1020px] lg:h-[400px] md:w-[700px]  md:h-[400px]  flex flex-col lg:flex-row md:flex-row p-4  gap-4 rounded-2xl  xl:w-[1300px]'>
          <motion.img src={pic2}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='w-[330px] h-[300px] rounded-2xl lg:w-[500px] xl:h-[350px]' />
          <div className='flex flex-col justify-start place-items-start lg:w-[450px] md:h-[350px] xl:w-[750px] gap-4 w-[330px] h-[300px] p-4  xl:h-[350px]'>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='font-bold text-white text-xl xl:text-3xl'>Certified Ethical Hacker (CEH)</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='text-gray-400 text-xl  xl:text-2xl xl:w-[650px] lg:w-[400px]'>
The CEH certification is a globally recognized credential that validates your ability to think and act like a hacker to better protect organizational networks. Our CEH training includes:</motion.p>
            <Link to="/ethicalhacking" className='btn text-xl text-white bg-sky-600'>More Info</Link>
          </div>
        </div>
        <div className='h-[750px] w-[330px]  lg:w-[1020px] lg:h-[400px] flex flex-col  md:w-[700px]  md:h-[400px]  md:flex-row lg:flex-row p-4  gap-4 rounded-2xl  xl:w-[1300px]'>
          <motion.img src={pic3}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='w-[330px] h-[300px] rounded-2xl lg:w-[500px] xl:h-[350px]' />
          <div className='flex flex-col justify-start place-items-start lg:w-[450px] xl:w-[750px] gap-4 w-[330px] md:h-[350px] h-[300px] p-4  xl:h-[350px]'>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='font-bold text-white text-xl xl:text-3xl'>Computer Hacking Forensic Investigator (CHFI)</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='text-gray-400 text-xl  xl:text-2xl xl:w-[650px] lg:w-[400px]'>Our CHFI training program equips you with the skills to identify, track, and prosecute cybercriminals. This course covers:</motion.p>
            <Link to="/forensic" className='btn text-xl text-white bg-sky-600'>More Info</Link>
          </div>
        </div>
        <div className='h-[750px] w-[330px]  lg:w-[1020px] lg:h-[400px]  md:w-[700px]  md:h-[400px]  md:flex-row flex flex-col lg:flex-row p-4  gap-4 rounded-2xl  xl:w-[1300px]'>
          <motion.img src={pic4}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='w-[330px] h-[300px] rounded-2xl lg:w-[500px] xl:h-[350px]' />
          <div className='flex flex-col justify-start place-items-start lg:w-[450px] xl:w-[750px] gap-4 w-[330px] h-[300px] p-4  xl:h-[350px]'>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='font-bold text-white text-xl xl:text-3xl'>Cloud Trainings: AWS Associate and Security</motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className='text-gray-400 text-xl  xl:text-2xl xl:w-[650px] lg:w-[400px]'>Cloud computing is a critical skill in today’s IT landscape. Our AWS training programs are designed to provide you with a deep understanding of cloud services and security best practices.</motion.p>
            <Link to="/aws" className='btn text-xl text-white bg-sky-600'>More Info</Link>
          </div>
        </div>

      </div>

{/* why choose us section */}







      <div className="w-full  pt-8 bg-no-repeat bg-cover bg-fixed md:bg-no-repeat md:bg-cover md:bg-fixed" style={{ backgroundImage: `url(${bg})` }}>

      <h1 className='text-center text-white text-4xl font-bold'>Why Choose Us?</h1>
      <div className='grid grid-cols-1 gap-6 lg:gap-2 lg:p-2 p-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center w-full  mt-4 '>
        
<div className='h-[400px] w-[330px]  flex flex-col justify-center place-items-center  rounded-2xl '>
  <motion.img src={whychoose1} 
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='w-[330px] h-[250px] rounded-2xl  rounded-b-none'/>
  <div className='flex flex-col justify-center place-items-center bg-white p-4 text-center gap-4 w-[330px] h-[230px]' >
<motion.h1 
initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
className='font-bold text-black text-xl'>Expert Instructors</motion.h1>
  <motion.p  
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='text-gray-900'>Our trainers are industry experts with extensive experience in their respective fields.</motion.p>
  </div>
</div>
<div className='h-[400px] w-[330px]  flex flex-col justify-center place-items-center  rounded-2xl '>
  <motion.img src={whychoose2} 
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='w-[330px] h-[250px] rounded-2xl  rounded-b-none'/>
  <div className='flex flex-col justify-center place-items-center bg-white p-4 text-center gap-4 w-[330px] h-[230px]' >
<motion.h1 
initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
className='font-bold text-black text-xl'>Hands-on Learning</motion.h1>
  <motion.p  
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='text-gray-900'>We emphasize practical learning through labs, case studies, and real-world scenarios.</motion.p>
  </div>
</div>
<div className='h-[400px] w-[330px]  flex flex-col justify-center place-items-center  rounded-2xl '>
  <motion.img src={whychoose3} 
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='w-[330px] h-[250px] rounded-2xl  rounded-b-none'/>
  <div className='flex flex-col justify-center place-items-center bg-white p-4 text-center gap-4 w-[330px] h-[230px]' >
<motion.h1 
initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
className='font-bold text-black text-xl'>Certification Preparation</motion.h1>
  <motion.p  
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='text-gray-900'>Our courses are designed to help you pass industry-recognized certifications with confidence.</motion.p>
  </div>
</div>
{/* <> */}
<div className='h-[400px] w-[330px]  flex flex-col justify-center place-items-center  rounded-2xl '>
  <motion.img src={whychoose4} 
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='w-[330px] h-[250px] rounded-2xl  rounded-b-none'/>
  <div className='flex flex-col justify-center place-items-center bg-white p-4 text-center gap-4 w-[330px] h-[230px]' >
<motion.h1 
initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
className='font-bold text-black text-xl'>Career Support</motion.h1>
  <motion.p  
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='text-gray-900'>We provide guidance and support to help you advance your career in cybersecurity and cloud computing.</motion.p>
  </div>
</div>
</div>

{/* //enroll button */}
<div className='flex flex-col justify-center place-items-center p-10 gap-6'>
  <p className='text-white text-3xl text-center  xl:visible '>Enroll in our training programs today and take the first step towards a rewarding career in cybersecurity and cloud technologies. Contact us for more information or to register for a course.</p>
  <button className='btn  bg-blue-600 text-white text-xl'>Enroll Now</button>
</div>
</div>
<button className="fixed bottom-32 right-6 rounded-xl  w-10 h-10 bg-white text-4xl text-blue-600 " title="Back To Top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><i class="fa-solid fa-angle-up"></i></button>
      <FloatingWhatsApp phoneNumber={"+917982011271"} accountName={"Support Team CETF"}
        // Optional: your avatar image
        statusMessage="Online" // Optional status message
        chatMessage={"Hello! How can we help you?"}
        // allowClickAway 
        avatar={avatarwhatsapp}
        notification
        notificationSound
        notificationDelay={5}
      />
    </>
  )
}

export default Trainings