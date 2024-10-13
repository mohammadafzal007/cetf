import React ,{useEffect} from 'react'
import contactbg from "./contact/contactbg.jpg";
import {motion} from 'framer-motion';
import { useLocation } from 'react-router-dom';
import emailjs from 'emailjs-com';
import {toast} from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import "./uparrow.css"
import avatarwhatsapp from "./logo.avif"



const Contact = () => {
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
        'template_8atxqlr', // Replace with your EmailJS template ID
        {
          from_name: data.name, // User's name to be shown in the email
          email: data.email,
          phone: data.phone,
          message: data.message,
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
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="w-full pt-20 lg:pt-24 bg-no-repeat bg-cover bg-fixed flex justify-center place-items-center flex-col" style={{ backgroundImage: `url(${contactbg})` }}>
      <div className=' w-full lg:mt-20 flex justify-center place-items-center flex-col'>
        <motion.h1
         className='w-[300px]  text-center text-4xl font-semibold md:w-[600px] lg:w-[600px] lg:text-5xl mb-4 text-white'
        initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{once:'true'}}
      transition={{ duration: 0.5 }}
         >Visit One of our Offices</motion.h1>
        <motion.h4 
        className='w-[300px] lg:w-[600px] text-center text-xl font-semibold lg:text-3xl text-white'
         initial={{ opacity: 0, y: 50 }}
         whileInView={{ opacity: 1, y: 0 }}
      viewport={{once:'true'}}
      transition={{ duration: 0.5 }}
        >Our offices are open 24x7 and visitors are welcome.</motion.h4>
      </div>
      <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{once:'true'}}
      transition={{ duration: 0.5 }}
      className='flex flex-col-reverse p-5  lg:m-4 gap-4 w-[300px] lg:w-[1020px] lg:flex-row xl:w-[1300px] justify-center place-items-center  '>
        <div className=' w-[300px] h-[300px] lg:w-[680px] lg:h-[400px] xl:w-[850px] xl:h-[450px] '>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14015.3481708656!2d77.2179774!3d28.574655699999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce34ef00a1897%3A0xd453a4ffd9c7d23a!2sCyberelite%20Task%20Force!5e0!3m2!1sen!2sin!4v1726338636242!5m2!1sen!2sin"
           className='  w-[300px] h-[300px] lg:w-[680px] lg:h-[400px] xl:w-[850px] xl:h-[450px]'  allow="geolocation" gesturehandling='greedy' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
        <form className='bg-white w-[300px] h-[450px]  flex justify-start gap-2 place-items-center p-8 flex-col  rounded-3xl lg:w-[300px] lg:h-[400px] xl:w-[400px]  xl:h-[450px]'  onSubmit={handleSubmit(onSubmit)}>
            <div>

            <input
              id="name"
              {...register("name", { required: true })}
              type='text' className='p-4 border border-slate-400 rounded-xl  w-[250px] h-[60px] lg:w-[250px] lg:h-[50px]  xl:w-[300px] text-black bg-white' placeholder='Enter Your Name'></input>
            {errors.name && <span className=' ml-[10px] text-red-600'>This field is required</span>}
              </div>
              <div>

            <input   {...register("phone", {
              required: "This Field is required", maxLength: {
                value: 10,
                message: 'Phone number cannot exceed 10 digits',
              },
              pattern: {
                value: /^[0-9]{10}$/,
                message: 'Phone number must be exactly 10 digits',
              },
            })} type='tel' className='p-4 border border-slate-400 rounded-xl font-light w-[250px] h-[60px] lg:w-[250px] lg:h-[50px]  xl:w-[300px] text-black bg-white' placeholder='Enter Your Phone'></input>
            {errors.phone && <span className=' ml-[10px] text-red-600'>This field is required</span>}
            </div>
            <div>

            <input  {...register("email", { required: true })} type='email' className='p-4 border border-slate-400 rounded-xl font-light w-[250px] h-[60px] lg:w-[250px] lg:h-[50px]  xl:w-[300px] text-black bg-white' placeholder='Enter Your Email Address'></input>
            {errors.email && <span className=' ml-[10px] text-red-600'>This field is required</span>}
            <div className='flex justify-start flex-col gap-4'>
              <textarea
                name="message"
                {...register("message", { required: true })}
                placeholder='Type Your Message..' className='font-light text-black bg-white p-4 border border-slate-400 rounded-xl lg:w-[250px] lg:h-[100px]  xl:w-[300px] w-[250px] h-[100px] mt-2' />
              {errors.message && <span className=' ml-[10px] text-red-600'>This field is required</span>}
                </div>
              <button className='btn mt-4 bg-sky-500 border-none text-white text-xl font-light rounded-3xl xl:mt-10'>Send Your Message</button>
            </div>
          </form>

        
      </motion.div>
      <button className="fixed bottom-32 right-6 rounded-xl  w-10 h-10 bg-white text-4xl text-blue-600 " title="Back To Top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}><i class="fa-solid fa-angle-up"></i></button>
      <FloatingWhatsApp phoneNumber={"+917982011271"} accountName={"Support Team CETF"}
        // Optional: your avatar image
        statusMessage="Online" // Optional status message
        chatMessage={"Hello! How can we help you?"}
        // allowClickAway 
        notification
        avatar={avatarwhatsapp}
        notificationSound
        notificationDelay={5}
      />
    </div>
    
  )
}

export default Contact