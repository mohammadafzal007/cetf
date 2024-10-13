import React ,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import "./uparrow.css"
import avatarwhatsapp from "./logo.avif"

import bg from './services/bg.jpg'
import {motion} from 'framer-motion'
import { useForm } from 'react-hook-form'
import emailjs from 'emailjs-com';
import {toast} from "react-hot-toast"
import Contactform_services from './contactform_services';
import pic1 from "./services/pic1.jpg"
import pic2 from "./services/pic2.webp"
import pic3 from "./services/pic3.webp"
import pic4 from "./services/pic4.webp"
import pic5 from "./services/pic5.jpeg"
import pic6 from "./services/pic6.jpeg"
import pic7 from "./services/pic7.webp"
import pic8 from "./services/pic8.png"
import whychoose1 from "./services/whychoose1.avif";
import whychoose2 from "./services/whychoose2.avif";
import whychoose3 from "./services/whychoose3.avif";
import whychoose4 from "./services/whychoose4.avif";
const Services = () => {
  const { pathname } = useLocation();
 const[openform,setopenform]=useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    sendEmail(data);
  }
  const sendEmail = (data) => {
    emailjs
      .send(
        'service_ryogc6i', // Replace with your EmailJS service ID
        'template_z2eiju3', // Replace with your EmailJS template ID
        {
          from_name: data.name, // User's name to be shown in the email
          email: data.email,
          phone: data.phone,
          service: data.service,
          template:"Service"
        },
        'R5gFv6KlfGQNPe9n2' // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          toast.success("Message Sent Succesfully ,Our Team will contact u soon")
          console.log('Message sent successfully:', result.text);
          reset(); // Reset the form
        },
        (error) => {
          console.log('Error in sending email:', error.text);
        }
      );
  };
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
     {openform && 
    <Contactform_services setopenform={setopenform} />}
    <div className="
    w-full  h-[600px] lg:h-[600px] pt-8 bg-no-repeat bg-cover bg-fixed md:bg-no-repeat md:bg-cover md:bg-fixed" style={{backgroundImage:`url(${bg})`}}>
    <div class="absolute  bg-black "></div>
      <div className=' w-full lg:mt-32 mt-20 flex justify-center place-items-center  flex-col gap-12'>
        <motion.h1
         className='w-[350px] lg:w-[1030px] text-center  text-6xl font-semibold lg:text-7xl mb-4 text-white md:text-7xl md:w-[600px]'
         initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
         >Our Services</motion.h1>
        <motion.h4 
        className='w-[350px] lg:w-[1000px] xl:w-[1300px]   text-center text-[21px] font-thin lg:text-3xl md:text-3xl text-white md:w-[700px]'
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        ><span className='font-bold '>At EliteCyber Global Technologies LLP</span>, we offer comprehensive training programs designed to equip you with the skills needed to excel in the field of cybersecurity and cloud computing. Our expert-led courses provide hands-on experience and in-depth knowledge, preparing you for real-world challenges. Explore our specialized training programs below:</motion.h4>
      </div>
      </div>

      {/* // services */}

      <div className='grid grid-cols-1 gap-6 p-2 md:grid-cols-2 lg:grid-cols-3 place-items-center w-full  mt-4 '>
<div className='h-[550px] w-[330px]  flex flex-col justify-center place-items-center  rounded-2xl ' >
  <motion.img src={pic1} 
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='w-[330px] h-[250px] rounded-2xl  rounded-b-none'/>
  <div className='flex flex-col justify-center place-items-center bg-white p-4 text-center gap-4 w-[330px] h-[310px]' >
<motion.h1 
initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
className='font-bold text-black text-xl'>Vulnerability Assessment and Penetration Testing (VAPT)</motion.h1>
  <motion.p  
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='text-gray-900'>Scope and Use: Identify, evaluate, and mitigate security vulnerabilities in your IT infrastructure. Our VAPT services include network, web application, mobile application, and cloud environment testing</motion.p>
  
  <button  className='bg-sky-500 p-2 text-xl  text-white rounded-2xl' onClick={()=>setopenform(true)}>Get Service</button>
  </div>
</div>

<div className='h-[550px] w-[330px]  flex flex-col justify-center place-items-center  rounded-2xl '>
  <motion.img src={pic2} 
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='w-[330px] h-[250px] rounded-2xl  rounded-b-none'/>
  <div className='flex flex-col justify-center place-items-center bg-white p-4 text-center gap-4 w-[330px] h-[310px]' >
<motion.h1 
initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
className='font-bold text-black text-xl'>Digital Forensics and Incident Response (DFIR)</motion.h1>
  <motion.p  
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='text-gray-900'>Scope and Use: Investigate cyber incidents, collect digital evidence, and respond to security breaches. Our DFIR services help you recover from attacks and prevent future incidents.</motion.p>
  <button  className='bg-sky-500 p-2 text-xl  text-white rounded-2xl' onClick={()=>setopenform(true)}>Get Service</button>
 
  </div>
</div>
<div className='h-[550px] w-[330px]  flex flex-col justify-center place-items-center  rounded-2xl '>
  <motion.img src={pic3} 
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='w-[330px] h-[250px] rounded-2xl  rounded-b-none'/>
  <div className='flex flex-col justify-center place-items-center bg-white p-4 text-center gap-4 w-[330px] h-[310px]' >
<motion.h1 
initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
className='font-bold text-black text-xl'>Security Awareness Training</motion.h1>
  <motion.p  
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
 className='text-gray-900'>Scope and Use: Educate your employees on cybersecurity best practices to reduce human error and prevent security breaches. Our training programs cover phishing awareness, secure password management, and safe internet practices.</motion.p>
  <button  className='bg-sky-500 p-2 text-xl  text-white rounded-2xl' onClick={()=>setopenform(true)}>Get Service</button>
 
  </div>
</div>

<div className='h-[550px] w-[330px]  flex flex-col justify-center place-items-center  rounded-2xl '>
  <motion.img src={pic4} 
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='w-[330px] h-[250px] rounded-2xl  rounded-b-none'/>
  <div className='flex flex-col justify-center place-items-center bg-white p-4 text-center gap-4 w-[330px] h-[310px]' >
<motion.h1 
initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
className='font-bold text-black text-xl'>Managed Security Services</motion.h1>
  <motion.p  
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='text-gray-900'>Scope and Use: Outsource your security operations to our expert team. We provide continuous monitoring, threat detection, incident response, and security management to protect your assets.</motion.p>
  <button  className='bg-sky-500 p-2 text-xl  text-white rounded-2xl' onClick={()=>setopenform(true)}>Get Service</button>

</div>
</div>

<div className='h-[550px] w-[330px]  flex flex-col justify-center place-items-center  rounded-2xl '>
  <motion.img src={pic5} 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
transition={{ duration: 0.5 }}
  className='w-[330px] h-[250px] rounded-2xl  rounded-b-none'/>
  <div className='flex flex-col justify-center place-items-center bg-white p-4 text-center gap-4 w-[330px] h-[310px]' >
<motion.h1 
initial={{ opacity: 0, y: 50 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
className='font-bold text-black text-xl'>Cybercrime Case Assistance for Law Enforcement</motion.h1>
  <motion.p  
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
transition={{ duration: 0.5 }}
  className='text-gray-900'>Scope and Use: Assist law enforcement agencies in solving cybercrime cases or cases requiring cyber forensic expertise. Our services cover various domains, including mobile devices, disks, emails, drones, and more.</motion.p>
  <button  className='bg-sky-500 p-2 text-xl  text-white rounded-2xl' onClick={()=>setopenform(true)}>Get Service</button>

  </div>
</div>

<div className='h-[550px] w-[330px]  flex flex-col justify-center place-items-center  rounded-2xl '>
  <motion.img src={pic6} 
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='w-[330px] h-[250px] rounded-2xl  rounded-b-none'/>
  <div className='flex flex-col justify-center place-items-center bg-white p-4 text-center gap-4 w-[330px] h-[310px]' >
<motion.h1 
initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
className='font-bold text-black text-xl'>Digital Forensics Services in Forensic Raids</motion.h1>
  <motion.p  
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='text-gray-900'>Scope and Use: Our team can assist in digital forensics services during forensic raids with various law enforcement agencies. We provide expert support in collecting and analyzing digital evidence in real-time.</motion.p>
  <button  className='bg-sky-500 p-2 text-xl  text-white rounded-2xl' onClick={()=>setopenform(true)}>Get Service</button>

  </div>
</div>

<div className='h-[550px] w-[330px]  flex flex-col justify-center place-items-center  rounded-2xl '>
  <motion.img src={pic7} 
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='w-[330px] h-[250px] rounded-2xl  rounded-b-none'/>
  <div className='flex flex-col justify-center place-items-center bg-white p-4 text-center gap-4 w-[330px] h-[310px]' >
<motion.h1 
initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
className='font-bold text-black text-xl'>Cybersecurity Consulting</motion.h1>
  <motion.p  
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='text-gray-900'>Scope and Use: Get expert advice and strategic guidance to enhance your security posture. Our consulting services include security architecture design, policy development, and security program management.</motion.p>
  <button  className='bg-sky-500 p-2 text-xl  text-white rounded-2xl' onClick={()=>setopenform(true)}>Get Service</button>

  </div>
</div>

<div className='h-[550px] w-[330px]  flex flex-col justify-center place-items-center  rounded-2xl '>
  <motion.img src={pic8} 
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='w-[330px] h-[250px] rounded-2xl  rounded-b-none'/>
  <div className='flex flex-col justify-center place-items-center bg-white p-4 text-center gap-4 w-[330px] h-[310px]' >
<motion.h1 
initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
className='font-bold text-black text-xl'>Customized Training Programs</motion.h1>
  <motion.p  
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='text-gray-900'>Scope and Use: Develop tailored training programs to meet the specific needs of your organization. Our customized training covers a wide range of cybersecurity topics and skill levels.</motion.p>
  <button  className='bg-sky-500 p-2 text-xl  text-white rounded-2xl' onClick={()=>setopenform(true)}>Get Service</button>
 
  </div>
</div>


      </div>



      

      <div className="w-full  pt-8 bg-no-repeat bg-cover bg-fixed md:bg-no-repeat md:bg-cover md:bg-fixed" style={{backgroundImage:`url(${bg})`}}>
      <div className=' w-full lg:mt-22  flex justify-center place-items-center flex-col gap-12'>
        <motion.h1
         className='w-[350px] lg:w-[1030px] text-center text-6xl font-semibold lg:text-7xl mb-4 text-white md:text-7xl md:w-[600px]'
         initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
         >Why Choose Us?</motion.h1>
         </div>
         <div className='grid grid-cols-1 gap-6 p-2 md:grid-cols-2 lg:grid-cols-3 place-items-center w-full  mt-4 '>
<div className='h-[480px] w-[330px]  flex flex-col justify-center place-items-center  rounded-2xl '>
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
className='font-bold text-black text-xl'>Expert Team</motion.h1>
  <motion.p  
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='text-gray-900'>
Our team consists of seasoned professionals with extensive experience in cybersecurity and cloud security</motion.p>
  </div>
</div>

<div className='h-[480px] w-[330px]  flex flex-col justify-center place-items-center  rounded-2xl '>
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
className='font-bold text-black text-xl'>Tailored Solutions</motion.h1>
  <motion.p  
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='text-gray-900'>We customize our services to meet the unique needs and requirements of each client.</motion.p>
  </div>
</div>
<div className='h-[480px] w-[330px]  flex flex-col justify-center place-items-center  rounded-2xl '>
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
className='font-bold text-black text-xl'>Cutting-Edge Technology</motion.h1>
  <motion.p  
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='text-gray-900'>We utilize the latest tools and techniques to ensure the highest level of security.</motion.p>
  </div>
</div>

<div className='h-[480px] w-[330px]  flex flex-col justify-center place-items-center  rounded-2xl '>
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
className='font-bold text-black text-xl'>Proven Track Record</motion.h1>
  <motion.p  
  initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
      transition={{ duration: 0.5 }}
  className='text-gray-900'>Our successful projects and satisfied clients speak to our expertise and commitment to excellence.</motion.p>
  </div>
</div>


         </div>
      </div>

      {/* ..contact for services */}


    <div className=" text-white w-full flex flex-col md:flex-row md:justify-between p-4 lg:p-20 md:space-x-10 ">
    {/* content */}
      <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
   transition={{ duration: 0.5 }}
      className="md:w-1/2 flex flex-col lg:justify-start xl:justify-start justify-center md:place-items-start place-items-center space-y-10  p-2">
        <h2 className="text-4xl font-bold md:text-5xl">Get Service</h2>
        <p className='text-xl'>24/7 Support: We provide round-the-clock support to ensure your security needs are always met.</p>
        <p className='text-xl'>Get Service today to learn more about how our services can help protect your organization and enhance your security posture.</p>
      </motion.div>

      {/* Form*/}
      <div className="md:w-1/2 mt-8 md:mt-0 " >
        <motion.form  onSubmit={handleSubmit(onSubmit)} 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
     transition={{ duration: 0.5 }}
        className="space-y-6">
          <div className="flex flex-col">
           
            <input 
              type="text" 
              id="name"
              {...register("name", { required: true })}
      
              placeholder="Enter Your Name" 
              className=" text-xl p-3 rounded-md font-light bg-white text-black border border-gray-500 focus:outline-none focus:border-gray-300"
            />
            {errors.firstname && <span className=' ml-[10px] text-red-600'>This field is required</span>}
          </div>
          
          <div className="flex flex-col">
            
            <input 
              type="email" 
              id="email" 
              {...register("email", { required: true })}
        
              placeholder="Enter Your Email" 
              className=" text-xl p-3 rounded-md font-light bg-white text-black border border-gray-500 focus:outline-none focus:border-gray-300"
            />
            {errors.email && <span className=' ml-[10px] text-red-600'>This field is required</span>}
          </div>
          <div className="flex flex-col">
            
            <input 
              type="phone" 
              id="phone" 
              {...register("phone", {
                required: "This Field is required", maxLength: {
                  value: 10,
                  message: 'Phone number cannot exceed 10 digits',
                },
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Phone number must be exactly 10 digits',
                },
              })}
       
              placeholder="Enter Your Phone" 
              className=" text-xl p-3 rounded-md font-light bg-white text-black border border-gray-500 focus:outline-none focus:border-gray-300"
            />
            {errors.phone && <span className=' ml-[10px] text-red-600'>{errors.phone.message}</span>}
          </div>
          <div className="flex flex-col">
          
            <select 
              id="services" {...register("service", { required: true })}
       
              className=" text-xl p-3 rounded-md  text-white border border-gray-500 focus:outline-none focus:border-gray-300"
            >
              <option value="" >Select a service</option>
              <option value="VAPT">Vulnerability Assessment and Penetration Testing (VAPT)</option>
              <option value="DFIR">Digital Forensics and Incident Response (DFIR)</option>
              <option value="Managed Security Services">Managed Security Services</option>
              <option value="Cybercrime Case Assistance for Law Enforcement">Cybercrime Case Assistance for Law Enforcement</option>
              <option value="Digital Forensics Services in Forensic Raids">Digital Forensics Services in Forensic Raids</option>
              <option value="Cybersecurity Consulting">Cybersecurity Consulting</option>
            </select>
            {errors.course && <span className='text-red-600'>This field is required</span>}
          </div>

          <div>
            <button className="bg-blue-600 text-white w-full p-3 rounded-md hover:bg-blue-500">Submit</button>
          </div>
        </motion.form>
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

export default Services