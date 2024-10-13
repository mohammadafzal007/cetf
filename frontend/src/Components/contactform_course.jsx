import React from 'react'
import {motion} from 'framer-motion'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import emailjs from 'emailjs-com';  

const contactform_course = ({setopenform}) => {
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
              setopenform(false)
              reset(); // Reset the form
            },
            (error) => {
              console.log('Error in sending email:', error.text);
            }
          );
      };
      const handleBackdropClick = (e) => {
        if (e.target.id === "modalBackdrop") {
          setopenform(false);
        }
      };
  return (
    <div className=''>
       
 <div id="modalBackdrop" ON onClick={handleBackdropClick} className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1001]'>


          <div className=" flex mt-10 justify-items-start flex-col m-2 p-2 bg-blue-500 rounded-3xl w-[350px] 
            md:w-[390px] md:h-[520px]  z-">
              <button
              onClick={()=>setopenform(false)}
              className="mb-2 self-end px-2 py-1 text-white  rounded-full text-2xl"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
              <motion.h1
                
                className="text-3xl font-semibold text-white pt-2 text-center">Contact For Course Information</motion.h1>
             {/* <motion.h1
               
                className=" text-xl text-white text-center font-semibold mt-2">Training Available 24*7 Call at  7982011271</motion.h1> */}
              <form onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col p-2  w-full  gap-4 justify-items-center place-items-center  ">
                <motion.div
                 
                  className='flex flex-col justify-start  place-items-start space-y-1'
                >
                  <input type="text" {...register("name", { required: true })} placeholder="Enter Your First Name" className='bg-white font-light p-4 outline-none text-black text-xl rounded-3xl h-12 w-[330px] ' />
                  {errors.name && <span className=' ml-[10px] text-red-600'>This field is required</span>}
                </motion.div>
                <motion.div
                
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
                  })} placeholder="Enter Your Contact Number" id="phone" className=' bg-white font-light  p-4 outline-none text-black text-xl rounded-3xl h-12 w-[330px]' />
                  {errors.phone && <span className=' ml-[10px] text-red-600'>{errors.phone.message}</span>}
                </motion.div>
                <motion.div
                 
                  className='flex flex-col justify-start  place-items-start space-y-1'
                >
                  <input type="email" {...register("email", { required: true })} placeholder="Enter Your Email" className='bg-white font-light p-4 outline-none text-black text-xl rounded-3xl h-12 w-[330px] ' />
                  {errors.email && <span className=' ml-[10px] text-red-600'>This field is required</span>}
                </motion.div>
                <div className='flex flex-col justify-start  place-items-start space-y-1'>
                  <motion.select
                   
                    transition={{ duration: 0.7 }} id="course" {...register("course", { required: true })}
                    className="rounded-3xl text-xl p-4 bg-white text-black  w-[330px]   focus:outline-none focus:-gray-300">
                    <option value="" >Select a Course</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Ethical Hacking Training">Ethical Hacking Training</option>
                    <option value="Digital Forensic Training">Digital Forensic Training</option>
                    <option value="Basic Networking">Basic Networking</option>
                    <option value="AWS Cloud">CCNA</option>
                    <option value="AWS Cloud">OSCP</option>
                    <option value="AWS Cloud">CPENT</option>
                    <option value="AWS Cloud">CSA</option>
                    <option value="AWS Cloud">CCNP</option>
                    <option value="AWS Cloud">ECIH</option>
                   
                  </motion.select>
                  {errors.exampleRequired && <span>This field is required</span>}
                </div>
                <motion.div
                 
                  className="flex justify-center place-items-center w-[300px] md:w-[400px]">
                  <button className="relative flex h-[50px] w-40 text-2xl items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 rounded-3xl before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-blue-600 hover:shadow-blue-600 hover:before:border-[25px]">
                    <span className="relative z-10">Submit</span>
                  </button>
                </motion.div>

              </form>
            </div>
            </div>

    </div>
  )
}

export default contactform_course