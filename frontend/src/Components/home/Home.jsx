import React, { useEffect, useState } from 'react';
import { useLocation ,Link} from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import OdometerCount from './odometer';
import emailjs from 'emailjs-com';
import Typewriter from 'typewriter-effect';
import "../App.css"
import bg from "./home/homebg.webp"
// import formimage from "./home/formimage.avif"
import pic1c from "./home/pic1c.avif"
import pic1 from "./home/pic1.avif"
import pic2 from "./home/pic2.avif"
import pic3 from "./home/pic3.avif"
import pic4 from "./home/pic4.avif"
import o1 from "./home/contract.png"
import o2 from "./home/worldwide.png"
import o3 from "./home/society.png"
import o4 from "./home/charity.png"
import w1 from "./home/w1.jpg"
import w2 from "./home/w2.jpg"
import w3 from "./home/w3.jpg"
import w4 from "./home/w4.jpg"
import w5 from "./home/w5.jpg"
import w6 from "./home/w6.jpg"
import w7 from "./home/w7.jpg"
import w8 from "./home/w8.jpg"


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carousel.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion'
import feedbackimages from "./home/feedback.json"
import { toast } from 'react-hot-toast'
import Contactform_course from './contactform_course';


const Home = () => {
  const[openform,setopenform]=useState(false)
  const { pathname } = useLocation();
  useEffect(() => {
    const scrollToTop = () => {
      window.setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100); // Adjust the timeout as needed
    };

    scrollToTop();
  }, [pathname]);
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
          service: data.course,
          template:"Course"
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


// for conatct form 
const {
  register:register1,
  handleSubmit:handleSubmit1,
  reset:reset1,
  formState: { errors:errors1 },
} = useForm()
const onSubmit1 = (data) => {
  sendEmail1(data);
}
const sendEmail1 = (data) => {
  emailjs
    .send(
      'service_ryogc6i', // Replace with your EmailJS service ID
      'template_z2eiju3', // Replace with your EmailJS template ID
      {
        from_name: data.name, // User's name to be shown in the email
        email: data.email,
        phone: data.phone,
        message: data.message,
        template:"Course"
      },
      'R5gFv6KlfGQNPe9n2' // Replace with your EmailJS user ID
    )
    .then(
      (result) => {
        toast.success("Message Sent Succesfully ,Our Team will contact u soon")
        console.log('Message sent successfully:', result.text);
        reset1(); // Reset the form
      },
      (error) => {
        console.log('Error in sending email:', error.text);
      }
    );
};
  return (
    <>

      <div className="w-full bg-no-repeat bg-cover bg-fixed md:bg-no-repeat md:bg-cover md:bg-fixed" style={{ backgroundImage: `url(${bg})` }}>

        <div className='flex flex-col justify-center place-items-center h-[1100px] md:h-[600px] '>
          <div className=" w-full  flex flex-col gap-4 justify-center place-items-center  lg:pt-24 p-4 md:flex-row ">
            {/* //titles  */}
            <div className='flex flex-col justify-start place-items-center lg:place-items-start p-10 lg:p-2 w-full 
            lg:w-[550px] md:w-[350px] h-[550px] md:h-[450px]  space-y-4 xl:w-[800px] '>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className='  text-3xl font-semibold w-[360px]   md:w-[300px] lg:w-[600px] xl:w-[800px] text-center lg:text-start text-white lg:text-4xl xl:text-5xl '>BECOME A <Typewriter
                  options={{
                    strings: ['CYBER SECURITY EXPERT', 'FORENSIC EXPERT ', 'AWS CLOUD EXPERT', 'WEB DEVELOPER'],
                    autoStart: true,
                    loop: true,
                  }}
                /></motion.h1>
              <motion.h4
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className=' xl:text-start xl:text-4xl text-center w-[300px] text-2xl text-white lg:text-[30px] lg:w-[500px] lg:text-center'>Book Your <span className=' inline-block w-[90px] h-[40px] pt-1 lg:h-[50px] lg:w-[100px] lg:pl-3 bg-blue-600 text-white  rounded-2xl xl:text-3xl'>Demo</span> Now</motion.h4>
              <div className=' text-center w-[300px]  flex flex-row space-x-2 lg:w-[500px] place-items-center justify-center xl:place-items-start xl:justify-start'>
                {/* <h1 className=''>kdjfksjfsl</h1> */}
                <button className="flex h-[60px] w-60 text-xl items-center justify-center overflow-hidden bg-transparent border font-medium text-red-500 shadow-2xl transition-all duration-500 rounded-3xl  hover:bg-white hover:text-blue-600 hover:shadow-blue-600 ">
                  <span className="">Download Course</span>
                </button>
                <button className="flex h-[60px] w-60 text-xl items-center justify-center overflow-hidden bg-transparent border font-medium text-white shadow-2xl transition-all duration-500 rounded-3xl  hover:bg-white hover:text-blue-600 hover:shadow-blue-600 ">
                  <a href="tel:7982011271" className="">Call Us</a>
                </button>
              </div>
           

              <div className='p-10  flex space-y-2 md:space-x-2 flex-col  md:h-[300px] justify-center place-items-center w-full lg:grid lg:grid-cols-2 xl:flex xl:flex-row'>
              <div className='flex justify-center place-items-center space-x-1  md:flex-row'>
                  <img src={o1} className='w-10 md:w-10 lg:w-16 ' />
                  <div className="flex-col flex space-x  justify-start place-items-start">
                    <div className="flex justify-center place-items-cente ">
                      <OdometerCount targetNumber={150} className="z[1]"/><span className='text-3xl text-white'>K+</span>
                    </div>
                    <span className='text-white '>Cyber Security Projects</span>
                  </div>
                </div>
                <div className='flex justify-center place-items-center space-x-1'>
                  <img src={o2} className='w-10 md:w-10 lg:w-16 ' />
                  <div className="flex-col flex space-x  justify-start place-items-start">
                    <div className="flex justify-center place-items-cente ">
                      <OdometerCount targetNumber={2000} /><span className='text-3xl text-white'></span>
                    </div>
                    <span className='text-white'>Customers Globally</span>
                  </div>
                </div>
                <div className='flex justify-center place-items-center space-x-1'>
                  <img src={o3} className='w-10 md:w-10 lg:w-16 ' />
                  <div className="flex-col flex space-x-0  justify-start place-items-start">
                    <div className="flex justify-center place-items-center  ">
                      <OdometerCount targetNumber={250} /><span className='text-3xl text-white'>+</span>
                    </div>
                    <span className='text-white'>Cyber Security Experts</span>
                  </div>
                </div>
                <div className='flex justify-center place-items-center space-x-1'>
                  <img src={o4} className='w-10 md:w-10 lg:w-16 ' />
                  <div className="flex-col flex space-x-0  justify-start place-items-start">
                    <div className="flex justify-center place-items-center  ">
                      <OdometerCount targetNumber={150} /><span className='text-3xl text-white'>%</span>
                    </div>
                    <span className='text-white'>Client Retention Rate</span>
                  </div>
                </div>
              </div>
            </div>




            {/* //form */}
            <div className=" flex justify-items-start flex-col m-2 p-2 bg-blue-600 rounded-3xl w-[350px] 
            md:w-[390px] md:h-[550px rounded-2xl">
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-3xl font-semibold text-white pt-2 text-center">Book A Trail Demo Class</motion.h1>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className=" text-xl text-white text-center font-semibold mt-2">Training Available 24*7 Call at  7982011271</motion.h1>
              <form onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col p-2  w-full  gap-4 justify-items-center place-items-center  ">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className='flex flex-col justify-start  place-items-start space-y-1'
                >
                  <input type="text" {...register("name", { required: true })} placeholder="Enter Your First Name" className='bg-white font-light p-4 outline-none text-black text-xl rounded-3xl h-12 w-[330px] ' />
                  {errors.firstname && <span className=' ml-[10px] text-red-600'>This field is required</span>}
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className='flex flex-col justify-start  place-items-start space-y-1'
                >
                  <input type="tel" {...register("phone", {
                    required: "This Field is required", maxLength: {
                      value: 10,
                      message: 'Phone number cannot exceed 10 digits',
                    },
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: 'Phone number must be exactly 10 digits',
                    },
                  })} placeholder="Enter Your Contact Number" className=' bg-white font-light  p-4 outline-none text-black text-xl rounded-3xl h-12 w-[330px]' />
                  {errors.contact && <span className=' ml-[10px] text-red-600'>{errors.contact.message}</span>}
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className='flex flex-col justify-start  place-items-start space-y-1'
                >
                  <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email" className='bg-white font-light p-4 outline-none text-black text-xl rounded-3xl h-12 w-[330px] ' />
                  {errors.email && <span className=' ml-[10px] text-red-600'>This field is required</span>}
                </motion.div>
                <div className='flex flex-col justify-start  place-items-start space-y-1'>
                  <motion.select
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }} id="services" {...register("course", { required: true })}
                    className="rounded-3xl text-xl p-4 bg-white text-black  w-[330px]   focus:outline-none focus:-gray-300">
                    <option value="" >Select Your Course</option>
                    <option value="cyber-security">Cyber Security</option>
                    <option value="Ethical Hacking Training">Ethical Hacking Training</option>
                    <option value="Digital Forensic Training">Digital Forensic Training</option>
                    <option value="AWS">AWS Cloud</option>
                  </motion.select>
                  {errors.course && <span>This field is required</span>}
                </div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="flex justify-center place-items-center w-[300px] md:w-[400px]">
                  <button className="flex h-[60px] w-60 text-xl items-center justify-center overflow-hidden border font-medium text-white shadow-2xl transition-all duration-500 rounded-3xl  hover:bg-white hover:text-blue-600 hover:shadow-blue-600 ">
                    <span className="">Submit</span>
                  </button>
                </motion.div>

              </form>
            </div>
          </div>



        </div>
      </div>
      <div className=''>
        {/* -------------------<span>Our Courses</span>---------------- */}
  <motion.h1 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className='text-center text-4xl   text-white p-4  '>Top Popular Courses</motion.h1>
  <div className='flex flex-col justify-center place-items-center p-4 lg:flex-row '>

  <motion.div 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="p-4  flex flex-col gap-2  rounded-2xl  hover:shadow-xl transition-all duration-300">
    <img src={pic1c} className='w-full h-[250px]'/>
    <div className="space-y-2">
    <h4 className='text-white text-2xl'>Cyber Security 6-Month Diploma Course</h4>
    <button className='btn text-xl text-white bg-blue-600  hover:text-black trais duration-300'><Link to="/cybersecurity">More Info</Link></button>
    </div>
  </motion.div>
  <motion.div 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="p-4 flex flex-col gap-2 rounded-2xl  hover:shadow-xl transition-all duration-300">
    <img src={pic3} className='w-full h-[250px] '/>
    <div className="space-y-2">
    <h4 className='text-white text-2xl'>Ethical Hacking Training & Certification Programme</h4>
    <button className='btn text-xl text-white bg-blue-600'><Link to="/ethicalhacking">More Info</Link></button>
    </div>
  </motion.div>
  <motion.div 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="p-4 flex flex-col gap-2 rounded-2xl  hover:shadow-xl transition-all duration-300">
    <img src={pic2} className='w-full h-[250px]'/>
    <div className="space-y-2">
    <h4 className='text-white text-2xl'>Digital Forensic Training & Services</h4>
    <button className='btn text-xl text-white bg-blue-600'><Link to="/forensic" >More Info</Link></button>
    </div>
  </motion.div>
  <motion.div 
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="p-4 flex flex-col gap-2 rounded-2xl hover:shadow-xl transition-all duration-300">
    <img src={pic4} className='w-full h-[250px]'/>
    <div className="space-y-2">
    <h4 className='text-white text-2xl'>AWS Cloud<br/>.</h4>
    <button className='btn text-xl text-white bg-blue-600'><Link to="/aws" >More Info</Link></button>
    </div>
  </motion.div>
  </div>
</div>

      {/* batches */}
      {openform&& 
      <Contactform_course setopenform={setopenform}/>}
      <section className='w-full flex flex-col justify-center place-items-center p-2 space-y-2  '>
        <h1 className='w-full  text-white text-5xl text-center font-montserrat font-semibold'>Personalized Batches</h1>
        <p className='w-full  text-white text-xl text-center font-montserrat'>Latest Cyber Security Diploma Batches</p>


        <div className='grid grid-cols-1 gap-10 p-2 md:grid-cols-2 lg:grid-cols-4 place-items-center w-full  mt-4 '>
          <div className=' transition-all duration-300 h-[400px] w-[300px]  flex flex-col justify-center place-items-center  rounded-2xl '>
            <motion.img src={pic1}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className='w-[300px] h-[200px] lg:w-[200px] xl:w-[300px] rounded-2xl  rounded-b-none' />
            <div className='flex flex-col justify-center place-items-center bg-white p-4 text-center gap-4 lg:w-[200px] w-[300px] h-[250px] xl:w-[300px]' >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className='font-bold text-black text-xl'>Basic Networking</motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className='text-gray-900'><h5>Date: 17-Sept-24</h5>
                <h5>Timing: 12 PM - 2 PM</h5></motion.div>
              <button className='btn text-white ' onClick={()=>setopenform(true)}>Get Details</button>

            </div>
          </div>

          <div className='h-[400px] w-[300px]  flex flex-col justify-center place-items-center  rounded-2xl  '>
          <motion.img src={pic2}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className='w-[300px] h-[200px] lg:w-[200px] xl:w-[300px] rounded-2xl  rounded-b-none' />
            <div className='flex flex-col justify-center place-items-center bg-white p-4 text-center gap-4 lg:w-[200px] w-[300px] h-[250px] xl:w-[300px] ' >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className='font-bold text-black text-xl'>CHFI</motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className='text-gray-900'><h5>Date: 17-Sept-24</h5>
                <h5>Timing: 12 PM - 2 PM</h5></motion.div>
              <button className='btn text-white' onClick={()=>setopenform(true)}>Get Details</button>

            </div>
          </div>
          <div className='h-[400px] w-[300px]  flex flex-col justify-center place-items-center  rounded-2xl '>
            <motion.img src={pic3}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className='w-[300px] h-[250px] xl:w-[300px]  rounded-2xl  lg:w-[200px] rounded-b-none' />
            <div className='flex flex-col justify-center place-items-center bg-white p-4 text-center gap-4 lg:w-[200px]  w-[300px] h-[250px] xl:w-[300px] ' >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className='font-bold text-black text-xl'>Ethical Hacking</motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className='text-gray-900'><h5>Date: 19-Sept-24</h5>
                <h5>Timing: 2 PM - 4 PM</h5></motion.div>
              <button className='btn text-white' onClick={()=>setopenform(true)}>Get Details</button>

            </div>
          </div>

          <div className='h-[400px] w-[300px]  flex flex-col justify-center place-items-center  rounded-2xl '>
            <motion.img src={pic4}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className='w-[300px] h-[250px]  xl:w-[300px] lg:w-[200px] rounded-2xl  rounded-b-none' />
            <div className='flex flex-col justify-center place-items-center lg:w-[200px] bg-white p-4 text-center gap-4 w-[300px] h-[250px] xl:w-[300px] ' >
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className='font-bold text-black text-xl'>Cloud</motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className='text-gray-900'><h5>Date: 17-Sept-24</h5>
                <h5>Timing: 4 PM - 6 PM</h5></motion.div>
              <button className='btn text-white' onClick={()=>setopenform(true)}>Get Details</button>

            </div>
          </div>
        </div>
      </section>
      {/* <hr /> */}





      <div className="container mx-auto p-4 ">
        <h1 className='text-center text-4xl text-white mb-10 font-montserrat font-semibold'>Training & Workshop Sessions</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className='w-full overflow-hidden'>

            <img src={w1} alt="Image 1" className=" w-full h-[300px] object-cover rounded-lg shadow-lg scale-1 transition-all duration-300 hover:scale-150 "></img>
          </div>
          <div className='w-full overflow-hidden'>

            <img src={w2} alt="Image 1" className="w-full h-[300px] object-cover rounded-lg shadow-lg scale-1 transition-all duration-300 hover:scale-150 overflow-hidden"></img>
          </div>
          <div className='w-full overflow-hidden'>

            <img src={w3} alt="Image 1" className="w-full h-[300px] object-contain rounded-lg shadow-lg scale-1 transition-all duration-300 hover:scale-150 overflow-hidden"></img>
          </div>
          <div className='w-full overflow-hidden'>

            <img src={w4} alt="Image 1" className="w-full h-[300px] object-cover rounded-lg shadow-lg scale-1 transition-all duration-300 hover:scale-150 overflow-hidden"></img>
          </div>
          <div className='w-full overflow-hidden'>

            <img src={w5} alt="Image 1" className="w-full h-[300px] object-cover rounded-lg shadow-lg scale-1 transition-all duration-300 hover:scale-150 overflow-hidden"></img>
          </div>
          <div className='w-full overflow-hidden'>

            <img src={w6} alt="Image 1" className="w-full h-[300px] object-cover rounded-lg shadow-lg scale-1 transition-all duration-300 hover:scale-150 overflow-hidden"></img>
          </div>
          <div className='w-full overflow-hidden'>

            <img src={w7} alt="Image 1" className="w-full h-[300px] object-cover rounded-lg shadow-lg scale-1 transition-all duration-300 hover:scale-150 overflow-hidden"></img>
          </div>
          <div className='w-full overflow-hidden'>

            <img src={w8} alt="Image 1" className="w-full h-[300px] object-cover rounded-lg shadow-lg scale-1 transition-all duration-300 hover:scale-150 overflow-hidden"></img>
          </div>


        </div>
      </div>

      {/* carousel */}
      <div className='flex flex-col justify-center place-items-center p-4 '>
        
      <div class="flex items-center justify-center place-items-center">
    <div class="w-[100px] border-[2px] border-blue-600"></div>
    <span class="mx-4 text-white text-4xl mb-4 font-montserrat font-semibold">Let Our Students Speak For Us</span>
    <div class="w-[100px] border-[2px] border-blue-600"></div>
</div>


        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          // spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper z-[-1]"
        >
          {feedbackimages.map((image, index) => {
            return <SwiperSlide key={index}>
              <img src={image.path} />
            </SwiperSlide>
          })}
        </Swiper>
      </div>




      {/* contact us form */}
      <div className='flex flex-col space-y-4 mt-4'>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='text-center text-4xl text-white font-bold font-montserrat'>
          Contact Us Today for Cyber Security Training
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='text-center text-xl text-white font-montserrat '>Get in touch with us to enroll in our cyber security programs.</motion.p>

        <div className=" text-white w-full flex flex-col md:flex-row md:justify-between p-4 lg:p-20 md:space-x-10 ">
          {/* content */}
          <div className='w-1/2 p-10  space-y-4'>
          <h1 className='text-4xl' >Contact Us</h1>
<div className='flex gap-4  p-4'>

  <a  href="https://www.google.com/maps/place/Cyberelite+Task+Force/@28.574483,77.218091,10041m/data=!3m1!1e3!4m6!3m5!1s0x390ce34ef00a1897:0xd453a4ffd9c7d23a!8m2!3d28.5744833!4d77.2180912!16s%2Fg%2F11y7h5v7nl?hl=en-US&entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" className="fa-solid fa-location-dot text-blue-600 text-2xl "></a>

<p className='w-full text-xl '>First Floor, Pilanji, 2028/24, Pilanji, Block E, Kotla Mubarakpur, Kidwai Nagar, New Delhi, Delhi 110003, India</p>
</div>
<div className='flex gap-4 p-4'>
<a href="mailto:mail@cetf.org.in" className="text-2xl fa-solid fa-envelope text-blue-600"></a>
<p className='w-full text-xl'>mail@cetf.org.in</p>
</div>
<div className='flex gap-4 p-4'>
<a href="tel:7982011271" className="text-2xl fa-solid fa-phone text-blue-600"></a>
<p className='w-full text-xl'>+91 7982011271</p>
</div>


          </div>


          {/* Form*/}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <motion.form
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="space-y-6 mt-[20px]" onSubmit={handleSubmit1(onSubmit1)}>
              <div className="flex flex-col">

                <input
                  type="text"
                  id="name"
              {...register1("name", { required: true })}
                  placeholder="Enter Your Name"
                  className=" text-xl p-3 rounded-md font-light bg-white text-black border border-gray-500 focus:outline-none focus:border-gray-300"
                />
                {errors1.name && <span className=' ml-[10px] text-red-600'>This field is required</span>}
              </div>
              <div className="flex flex-col">

                <input
                  type="text"
                  {...register1("phone", {
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
                 {errors1.phone && <span className=' ml-[10px] text-red-600'>This field is required</span>}
              </div>

              <div className="flex flex-col">

                <input
                  type="email"
                  id="email"
                  {...register1("email", { required: true })} 
                  placeholder="Enter Your Email"
                  className=" text-xl p-3 rounded-md font-light bg-white text-black border border-gray-500 focus:outline-none focus:border-gray-300"
                />
                   {errors1.email && <span className=' ml-[10px] text-red-600'>This field is required</span>}
              </div>

              <div className='flex flex-col w-full'>
                <textarea  name="message"
                {...register1("message", { required: true })} placeholder='Type Your Message..' className='font-light text-xl text-black bg-white p-4 border border-slate-400 rounded-xl lg:w-full lg:h-[100px]  xl:w-full w-full h-[100px]' />

              </div>
              {errors1.message && <span className=' ml-[10px] text-red-600'>This field is required</span>}


              <div>
                <button className="text-2xl bg-blue-600 text-white w-full p-3 rounded-md hover:bg-blue-500">Submit Your Message</button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
      <button className="fixed bottom-32 right-6 rounded-2xl  w-16 h-16 bg-white text-4xl text-blue-600 " title="Back To Top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><i className="fa-solid fa-jet-fighter-up"></i></button>
      <FloatingWhatsApp phoneNumber={"+917982011271"} accountName={"Support Team CETF"}
        // Optional: your avatar image
        statusMessage="Online" // Optional status message
        chatMessage={"Hello! How can we help you?"}
        // allowClickAway 
        notification
        notificationSound
        notificationDelay={5}
      />
    </>

  )
}

export default Home