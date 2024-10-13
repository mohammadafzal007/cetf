import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation } from "react-router-dom";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import avatarwhatsapp from "./logo.avif";
import { toast } from "react-hot-toast";
import "../App.css";
import "./uparrow.css";
import bg from "./home/homebg.webp";
import emailjs from "emailjs-com";
import { Typewriter } from "react-simple-typewriter";
import pic1c from "./home/pic1c.avif";
import pic1 from "./home/pic1.avif";
import pic2 from "./home/pic2.avif";
import pic3 from "./home/pic3.avif";
import pic4 from "./home/pic4.avif";
import o1 from "./home/contract.png";
import o2 from "./home/worldwide.png";
import o3 from "./home/society.png";
import o4 from "./home/charity.png";
import { Swiper, SwiperSlide } from "swiper/react";
import OdometerCount from "./odometer";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./carousel.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { motion } from "framer-motion";
import feedbackimages from "./home/feedback.json";
import workshopsimages from "./home/workshops.json";
import courses from "./home/courses.json";
import Contactform_course from "./contactform_course";

const Home = () => {
  const { pathname } = useLocation();
  const [openform, setopenform] = useState(false);
  // const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const scrollToTop = () => {
      window.setTimeout(() => {
        window.scrollTo(0, 0);
      }, 100); // Adjust the timeout as needed
    };

    // scrollToTop();
  }, [pathname]);
  useEffect(() => {
    // Automatically open the form when the component mounts
    // setopenform(true);
    console.log("render")
  }, []);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    sendEmail(data);
  };
  const sendEmail = (data) => {
    emailjs
      .send(
        "service_ryogc6i", // Replace with your EmailJS service ID
        "template_z2eiju3", // Replace with your EmailJS template ID
        {
          from_name: data.name, // User's name to be shown in the email
          email: data.email,
          phone: data.phone,
          service: data.course,
          template: "Course",
        },
        "R5gFv6KlfGQNPe9n2" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          toast.success(
            "Message Sent Succesfully ,Our Team will contact u soon"
          );
          console.log("Message sent successfully:", result.text);
          reset(); // Reset the form
        },
        (error) => {
          console.log("Error in sending email:", error.text);
        }
      );
  };
  // console.log(errors)
  //contact form

  const {
    register: register1,
    handleSubmit: handleSubmit1,
    reset: reset1,
    formState: { errors: errors1 },
  } = useForm();
  const onSubmit1 = (data) => {
    sendEmail1(data);
  };
  const sendEmail1 = (data) => {
    emailjs
      .send(
        "service_ryogc6i", // Replace with your EmailJS service ID
        "template_8atxqlr", // Replace with your EmailJS template ID
        {
          from_name: data.name, // User's name to be shown in the email
          email: data.email,
          phone: data.phone,
          message: data.message,
          template: "Course",
        },
        "R5gFv6KlfGQNPe9n2" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          toast.success(
            "Message Sent Succesfully ,Our Team will contact u soon"
          );
          console.log("Message sent successfully:", result.text);
          reset1(); // Reset the form
        },
        (error) => {
          console.log("Error in sending email:", error.text);
        }
      );
  };

  const certificate=[
    {id:1,text:"CCNA"},
    {id:1,text:"CHIF"},
    {id:1,text:"OSCP"},
    {id:1,text:"CEH"},
    {id:1,text:"CHFI"},
    {id:1,text:"CCNA"},
  ]
  return (
    <>
      {/* <div className='h-[50px]'>hello</div> */}
      <div
        className="w-full bg-no-repeat bg-cover bg-fixed md:bg-no-repeat md:bg-cover md:bg-fixed"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col justify-center place-items-center h-[1300px] md:h-[650px] ">
          <div className="  w-full flex flex-col gap-4 justify-center place-items-center pt-42 lg:pt-24 p-4 md:flex-row">
            {/* //titles  */}
            <div
              className=" flex flex-col justify-start place-items-center lg:place-items-start p-10 lg:p-0 w-full 
            lg:w-[550px] md:w-[350px] h-[550px] md:h-[450px] gap-10 xl:w-[800px] "
            >
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`h-[120px]  text-3xl font-semibold w-[370px] md:w-[300px] lg:w-[600px] xl:w-[800px] text-center lg:text-start text-white lg:text-4xl xl:text-5xl `}
              >
                BECOME A{" "}
                <Typewriter
                  words={[
                    "CYBER SECURITY EXPERT",
                    "AWS CLOUD EXPERT",
                    "ETHICAL HACKER",
                  ]}
                  loop= 'infinite'
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </motion.h1>

              {/* <div class="typewriter">
  Become A <h1 className='text-3xl font-semibold w-[370px]    md:w-[300px] lg:w-[600px] xl:w-[800px] text-center lg:text-start text-white lg:text-4xl xl:text-5xl'>The cat and the hat.</h1>
</div> */}

              <motion.h4
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className=" xl:text-start xl:text-4xl text-center w-[300px] text-2xl text-white lg:text-3xl lg:w-[500px] lg:text-center"
              >
                Book Your{" "}
                <span className=" bg-blue-600 text-white p-1 rounded-2xl xl:text-4xl">
                  Demo
                </span>{" "}
                Now
              </motion.h4>
              <div className=" text-center w-[300px]  flex flex-row space-x-2 lg:w-[500px] place-items-center justify-center xl:place-items-start xl:justify-start">
                <motion.button
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="p-2 flex w-[200px] md:w-[250px] border border-white btn text-xl items-center justify-center overflow-hidden bg-transparent font-medium text-white shadow-2xl transition-all duration-500 rounded-xl  hover:bg-white hover:text-blue-600 hover:shadow-blue-600"
                  onClick={() => setopenform(true)}
                >
                  Download Course
                </motion.button>
                <motion.a
                  href="tel:7982011271"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="p-2 flex w-[100px] md:w-[200px] border border-white btn text-xl items-center justify-center overflow-hidden bg-transparent font-medium text-white shadow-2xl transition-all duration-500 rounded-xl  hover:bg-white hover:text-blue-600 hover:shadow-blue-600  "
                >
                  Call Us{" "}
                </motion.a>
              </div>
              <div
                className={` 
                 flex  md:space-x- flex-col  md:h-[300px] lg:h-[150px] justify-center place-items-center w-full lg:grid lg:grid-cols-2 xl:flex xl:flex-row`}
              >
                <div className="flex justify-center place-items-center space-x-1  md:flex-row">
                  <img src={o1} className="w-10 md:w-10 lg:w-16 " />
                  <div className="flex-col flex space-x  justify-start place-items-start">
                    <div className="flex justify-center place-items-cente ">
                      <OdometerCount targetNumber={150} className="z[1]" />
                      <span className="text-3xl text-white">K+</span>
                    </div>
                    <span className="text-white ">Cyber Security Projects</span>
                  </div>
                </div>
                <div className="flex justify-center place-items-center space-x-1">
                  <img src={o2} className="w-10 md:w-10 lg:w-16 " />
                  <div className="flex-col flex space-x  justify-start place-items-start">
                    <div className="flex justify-center place-items-cente ">
                      <OdometerCount targetNumber={2000} />
                      <span className="text-3xl text-white"></span>
                    </div>
                    <span className="text-white">Customers Globally</span>
                  </div>
                </div>
                <div className="flex justify-center place-items-center space-x-1">
                  <img src={o3} className="w-10 md:w-10 lg:w-16 " />
                  <div className="flex-col flex space-x-0  justify-start place-items-start">
                    <div className="flex justify-center place-items-center  ">
                      <OdometerCount targetNumber={250} />
                      <span className="text-3xl text-white">+</span>
                    </div>
                    <span className="text-white">Cyber Security Experts</span>
                  </div>
                </div>
                <div className="flex justify-center place-items-center space-x-1">
                  <img src={o4} className="w-10 md:w-10 lg:w-16 " />
                  <div className="flex-col flex space-x-0  justify-start place-items-start">
                    <div className="flex justify-center place-items-center  ">
                      <OdometerCount targetNumber={150} />
                      <span className="text-3xl text-white">%</span>
                    </div>
                    <span className="text-white">Client Retention Rate</span>
                  </div>
                </div>
              </div>
            </div>

            {/* //form */}
            <div
              className=" flex justify-items-start flex-col m-2 p-2 bg-blue-600 rounded-3xl w-[350px] 
            md:w-[390px] md:h-[550px rounded-2xl"
            >
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-semibold text-white pt-2 text-center"
              >
                Book A Trail Demo Class
              </motion.h1>
              <motion.h1
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className=" text-xl text-white text-center font-semibold mt-2"
              >
                Training Available 24*7 Call at 7982011271
              </motion.h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col p-2  w-full  gap-4 justify-items-center place-items-center  "
              >
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col justify-start  place-items-start space-y-1"
                >
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    placeholder="Enter Your Name"
                    className="bg-white font-light p-4 outline-none text-black text-xl rounded-3xl h-12 w-[330px] "
                  />
                  {errors.name && (
                    <span className=" ml-[10px] text-red-600">
                      This field is required
                    </span>
                  )}
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col justify-start  place-items-start space-y-1"
                >
                  <input
                    type="tel"
                    {...register("phone", {
                      required: true,
                      maxLength: {
                        value: 10,
                        message: "Phone number cannot exceed 10 digits",
                      },
                      pattern: {
                        value: /^[0-9]{10}$/,
                        message: "Phone number must be exactly 10 digits",
                      },
                    })}
                    placeholder="Enter Your Contact Number"
                    className=" bg-white font-light  p-4 outline-none text-black text-xl rounded-3xl h-12 w-[330px]"
                  />
                  {errors.phone && (
                    <span className=" ml-[10px] text-red-600">
                      {errors.phone.message}
                    </span>
                  )}
                </motion.div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col justify-start  place-items-start space-y-1"
                >
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Enter Your Email"
                    className="bg-white font-light p-4 outline-none text-black text-xl rounded-3xl h-12 w-[330px] "
                  />
                  {errors.email && (
                    <span className=" ml-[10px] text-red-600">
                      This field is required
                    </span>
                  )}
                </motion.div>
                <div className="flex flex-col justify-start  place-items-start space-y-1">
                  <motion.select
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    id="services"
                    {...register("course", { required: true })}
                    className="rounded-3xl text-xl p-4 bg-white text-black  w-[330px]   focus:outline-none focus:-gray-300"
                  >
                    <option value="">Select a Course</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="Ethical Hacking Training">
                      Ethical Hacking Training
                    </option>
                    <option value="Digital Forensic Training">
                      Digital Forensic Training
                    </option>
                    <option value="Basic Networking">Basic Networking</option>
                    <option value="AWS Cloud">AWS Cloud</option>
                  </motion.select>
                  {errors.course && <span>This field is required</span>}
                </div>
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center place-items-center w-[300px] md:w-[400px]"
                >
                  <button className=" rounded-3xl w-[200px] h-[50px] bg-black text-white hover:text-black transit duration-300 hover:bg-white duration-100">
                    Get Course Details
                  </button>
                </motion.div>
              </form>
            </div>
          </div>
        </div>
      </div>

      
      <div className="">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-5xl  mt-10 text-white p-4  "
        >
          Top Popular Courses
        </motion.h1>
        <Swiper
        spaceBetween={30} // Space between each slide
        centeredSlides={false} // Don't center slides
        simulateTouch={true} // Enable mouse dragging
        grabCursor={true} // Change cursor to grab hand on hover
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false, // Autoplay even when interacting
        // }}
        pagination={{
          clickable: true, // Dots pagination
        }}
        navigation={true} // Enable navigation arrows
        modules={[Autoplay, Pagination, Navigation]} // Include required modules
        className="mySwiper cursor-grab"
        breakpoints={{
          // Configure responsive behavior
          640: {
            slidesPerView: 1, // 1 slide for small screens (mobile)
          },
          768: {
            slidesPerView: 2, // 2 slides for medium screens (tablets)
          },
          1024: {
            slidesPerView: 3, // 3 slides for large screens (desktops)
          },
        }}
      >
        {courses.map((item, index) => (
          <SwiperSlide key={index}>
            <div
            className="p-4  flex flex-col gap-2  rounded-2xl  hover:shadow-xl transition-all duration-300"
          >
            <img src={item.path} className="w-full" />
            <div className="space-y-2">
              <h4 className="text-white text-2xl">
                {item.title}
              </h4>
              <button className="btn text-xl text-white bg-blue-600  hover:text-white transition duration-300">
                <Link to={item.link}>More Info</Link>
              </button>
            </div>
          </div>
          </SwiperSlide>
        ))}
      </Swiper>
        {/* <div className="flex flex-col justify-center place-items-center p-4 lg:flex-row ">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-4  flex flex-col gap-2  rounded-2xl  hover:shadow-xl transition-all duration-300"
          >
            <img src={pic1c} className="w-full h-[250px]" />
            <div className="space-y-2">
              <h4 className="text-white text-2xl">
                Cyber Security 6-Month Diploma Course
              </h4>
              <button className="btn text-xl text-white bg-blue-600  hover:text-black trais duration-300">
                <Link to="/cybersecurity">More Info</Link>
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-4 flex flex-col gap-2 rounded-2xl  hover:shadow-xl transition-all duration-300"
          >
            <img src={pic3} className="w-full h-[250px] " />
            <div className="space-y-2">
              <h4 className="text-white text-2xl">
                Ethical Hacking Training & Certification Programme
              </h4>
              <button className="btn text-xl text-white bg-blue-600">
                <Link to="/ethicalhacking">More Info</Link>
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-4 flex flex-col gap-2 rounded-2xl  hover:shadow-xl transition-all duration-300"
          >
            <img src={pic2} className="w-full h-[250px]" />
            <div className="space-y-2">
              <h4 className="text-white text-2xl">
                Digital Forensic Training & Services
              </h4>
              <button className="btn text-xl text-white bg-blue-600">
                <Link to="/forensic">More Info</Link>
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-4 flex flex-col gap-2 rounded-2xl hover:shadow-xl transition-all duration-300"
          >
            <img src={pic4} className="w-full h-[250px]" />
            <div className="space-y-2">
              <h4 className="text-white text-2xl">
                AWS Cloud
                <br />.
              </h4>
              <button className="btn text-xl text-white bg-blue-600">
                <Link to="/aws">More Info</Link>
              </button>
            </div>
          </motion.div>
        </div> */}
      </div>

      {/* batches */}
      {openform && <Contactform_course setopenform={setopenform} />}
      <section className="w-full flex flex-col justify-center place-items-center  space-y-2  ">
        <motion.h1 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="w-full  text-white text-5xl text-center font-bold mt-10">
          Personalized Batches
        </motion.h1>
        <p className="w-full  text-white text-xl text-center ">
          Latest Cyber Security Diploma Batches
        </p>

        <div className="grid grid-cols-1 gap-2 md:gap-2 p-4 md:grid-cols-2 lg:grid-cols-4 place-items-center w-full  mt-4 ">
          <div
           whilehover={{ scale: 1.05, rotateY: 10 }}
           transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className=" h-[400px] w-[300px]  hover:scale-105 transition-all duration-300 flex flex-col justify-center place-items-center  rounded-2xl ">
            <motion.img
              src={pic1}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-[300px] h-[200px] rounded-2xl  rounded-b-none"
            />
            <div className="flex flex-col justify-center place-items-center bg-white p-4 text-center gap-4 w-[300px] h-[250px]">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-bold text-black text-xl"
              >
                CHFI
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-gray-900"
              >
                <p>Date: 17-Sept-24</p>
                <p>Timing: 12 PM - 2 PM</p>
              </motion.div>
              <button
                className=" btn text-xl text-white bg-blue-600"
                onClick={() => setopenform(true)}
              >
                View More
              </button>
            </div>
          </div>

          <div className=" h-[400px] w-[300px] hover:scale-105 transition-all duration-300 flex flex-col justify-center place-items-center  rounded-2xl ">
            <motion.img
              src={pic2}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-[px] h-[250px] rounded-2xl  rounded-b-none"
            />
            <div className="flex flex-col justify-center place-items-center bg-white p-4 text-center gap-4 w-[300px] h-[250px]">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-bold text-black text-xl"
              >
                CHFI
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-gray-900"
              >
                <p>Date: 17-Sept-24</p>
                <p>Timing: 12 PM - 2 PM</p>
              </motion.div>
              <button
                className="btn text-xl text-white bg-blue-600"
                onClick={() => setopenform(true)}
              >
                View More
              </button>
            </div>
          </div>
          <div className="  h-[400px] w-[300px] hover:scale-105 transition-all duration-300  flex flex-col justify-center place-items-center  rounded-2xl ">
            <motion.img
              src={pic3}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-[px] h-[250px] rounded-2xl  rounded-b-none"
            />
            <div className="flex flex-col justify-center place-items-center bg-white p-4 text-center gap-4 w-[300px] h-[250px]">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-bold text-black text-xl"
              >
                Ethical Hacking
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-gray-900"
              >
                <p>Date: 19-Sept-24</p>
                <p>Timing: 2 PM - 4 PM</p>
              </motion.div>
              <button
                className="btn text-xl text-white bg-blue-600"
                onClick={() => setopenform(true)}
              >
                View More
              </button>
            </div>
          </div>

          <div className="  h-[400px] w-[300px] hover:scale-105 transition-all duration-300 flex flex-col justify-center place-items-center  rounded-2xl ">
            <motion.img
              src={pic4}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-[px] h-[250px] rounded-2xl  rounded-b-none"
            />
            <div className="flex flex-col justify-center place-items-center bg-white p-4 text-center gap-4 w-[300px] h-[250px]">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-bold text-black text-xl"
              >
                Cloud
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-gray-900"
              >
                <p>Date: 17-Sept-24</p>
                <p>Timing: 4 PM - 6 PM</p>
              </motion.div>
              <button
                className="btn text-xl text-white bg-blue-600"
                onClick={() => setopenform(true)}
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </section>
      <h1 className="text-center text-4xl md:text-6xl lg:text-6xl font-bold text-white p-10">Certifications</h1>
      <Swiper
        spaceBetween={30} // Space between each slide
        centeredSlides={false} // Don't center slides
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false, // Autoplay even when interacting
        // }}
        pagination={{
          clickable: true, // Dots pagination
        }}
        navigation={true} // Enable navigation arrows
        modules={[Autoplay, Pagination, Navigation]} // Include required modules
        className="mySwiper"
        breakpoints={{
          // Configure responsive behavior
          640: {
            slidesPerView: 1, // 1 slide for small screens (mobile)
          },
          768: {
            slidesPerView: 2, // 2 slides for medium screens (tablets)
          },
          1024: {
            slidesPerView: 3, // 3 slides for large screens (desktops)
          },
        }}
      >
        {certificate.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-gradient-to-r from-blue-500 to-white w-80 h-56 flex items-center justify-center rounded-lg shadow-lg text-center overflow-hidden group transition-transform duration-300 hover:scale-105">
              <h1 className="text-4xl font-bold text-black">{item.text}</h1>
              <a 
                onClick={() => setopenform(true)}
                className="cursor-pointer hover:bg-blue-500 absolute bottom-4 left-4 bg-black text-white py-2 px-4 rounded shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:shadow-xl"
              >
                More Info
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="p-4">
        <h1 className="text-center text-6xl text-white mb-10 font-montserrat font-semibold">
          Training & Workshop Sessions
        </h1>
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {workshopsimages.map((image, index) => (
          <div key={index} className="w-full overflow-hidden">
            <img
              src={image.path}
              alt={image.path}
              className="w-full h-[300px] object-cover rounded-lg shadow-lg scale-1 transition-all duration-300 hover:scale-110"
            />
          </div>
        ))}
      </div> */}
        <Swiper
          spaceBetween={30} // Space between each slide
          centeredSlides={false} // Don't center slides
          autoplay={{
            delay: 2500,
            disableOnInteraction: false, // Autoplay even when interacting
          }}
          pagination={{
            clickable: true, // Dots pagination
          }}
          navigation={true} // Enable navigation arrows
          modules={[Autoplay, Pagination, Navigation]} // Include required modules
          className="mySwiper"
          breakpoints={{
            // Configure responsive behavior
            640: {
              slidesPerView: 1, // 1 slide for small screens (mobile)
            },
            768: {
              slidesPerView: 2, // 2 slides for medium screens (tablets)
            },
            1024: {
              slidesPerView: 3, // 3 slides for large screens (desktops)
            },
          }}
        >
          {workshopsimages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.path}
                alt={`Slide ${index + 1}`}
                className="swiper-image overflow-hidden group transition-transform duration-300 hover:scale-105" // Apply custom CSS class for image styling
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* carousel */}
      <div className="flex flex-col justify-center place-items-center p-4">
        <h1 className="text-4xl m-4 text-center text-white">
          Let Our Students Speak For Us
        </h1>
        {/* <div className='grid grid-cos-1 gap-10 md:grid-cols-2 xl:grid-cols-3 items-center'>
       {feedbackimages.map((image,index) => {
            return <img src={image.path} key={index} />
           
          })}
       </div> */}

        <Swiper
          spaceBetween={30} // Space between each slide
          centeredSlides={false} // Don't center slides
          autoplay={{
            delay: 2500,
            disableOnInteraction: false, // Autoplay even when interacting
          }}
          pagination={{
            clickable: true, // Dots pagination
          }}
          navigation={true} // Enable navigation arrows
          modules={[Autoplay, Pagination, Navigation]} // Include required modules
          className="mySwiper"
          breakpoints={{
            // Configure responsive behavior
            640: {
              slidesPerView: 1, // 1 slide for small screens (mobile)
            },
            768: {
              slidesPerView: 2, // 2 slides for medium screens (tablets)
            },
            1024: {
              slidesPerView: 3, // 3 slides for large screens (desktops)
            },
          }}
        >
          {feedbackimages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.path}
                alt={`Slide ${index + 1}`}
                className="swiper-image" // Apply custom CSS class for image styling
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* contact us form */}
      <div className="flex flex-col space-y-4 mt-4">
        <h1 className="text-center text-3xl text-white font-bold">
          Contact Us Today for Cyber Security Training
        </h1>
        <p className="text-center text-xl text-white font-semibold">
          Get in touch with us to enroll in our cyber security programs.
        </p>

        <div className=" text-white w-full flex flex-col md:flex-row md:justify-between p-4 lg:p-20 md:space-x-10 ">
          {/* content */}
          <div className="w-1/2 p-10  space-y-4">
            <h1 className="text-4xl">Contact Us</h1>
            <div className="flex gap-4  p-4">
              <a
                href="https://www.google.com/maps/place/Cyberelite+Task+Force/@28.574483,77.218091,10041m/data=!3m1!1e3!4m6!3m5!1s0x390ce34ef00a1897:0xd453a4ffd9c7d23a!8m2!3d28.5744833!4d77.2180912!16s%2Fg%2F11y7h5v7nl?hl=en-US&entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
                className="fa-solid fa-location-dot text-blue-600 text-2xl "
              ></a>

              <p className="w-full text-xl ">
                First Floor, Pilanji, 2028/24, Pilanji, Block E, Kotla
                Mubarakpur, Kidwai Nagar, New Delhi, Delhi 110003, India
              </p>
            </div>
            <div className="flex gap-4 p-4">
              <a
                href="mailto:mail@cetf.org.in"
                className="text-2xl fa-solid fa-envelope text-blue-600"
              ></a>
              <p className="w-full text-xl">mail@cetf.org.in</p>
            </div>
            <div className="flex gap-4 p-4">
              <a
                href="tel:7982011271"
                className="text-2xl fa-solid fa-phone text-blue-600"
              ></a>
              <p className="w-full text-xl">+91 7982011271</p>
            </div>
          </div>

          {/* Form*/}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <motion.form
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6 mt-[20px]"
              onSubmit={handleSubmit1(onSubmit1)}
            >
              <div className="flex flex-col">
                <input
                  type="text"
                  id="name"
                  {...register1("name", { required: true })}
                  placeholder="Enter Your Name"
                  className=" text-xl p-3 rounded-md font-light bg-white text-black border border-gray-500 focus:outline-none focus:border-gray-300"
                />
                {errors1.name && (
                  <span className=" ml-[10px] text-red-600">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="text"
                  {...register1("phone", {
                    required: "This Field is required",
                    maxLength: {
                      value: 10,
                      message: "Phone number cannot exceed 10 digits",
                    },
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Phone number must be exactly 10 digits",
                    },
                  })}
                  placeholder="Enter Your Phone"
                  className=" text-xl p-3 rounded-md font-light bg-white text-black border border-gray-500 focus:outline-none focus:border-gray-300"
                />
                {errors1.phone && (
                  <span className=" ml-[10px] text-red-600">
                    This field is required
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <input
                  type="email"
                  id="email"
                  {...register1("email", { required: true })}
                  placeholder="Enter Your Email"
                  className=" text-xl p-3 rounded-md font-light bg-white text-black border border-gray-500 focus:outline-none focus:border-gray-300"
                />
                {errors1.email && (
                  <span className=" ml-[10px] text-red-600">
                    This field is required
                  </span>
                )}
              </div>

              <div className="flex flex-col w-full">
                <textarea
                  name="message"
                  {...register1("message", { required: true })}
                  placeholder="Type Your Message.."
                  className="font-light text-xl text-black bg-white p-4 border border-slate-400 rounded-xl lg:w-full lg:h-[100px]  xl:w-full w-full h-[100px]"
                />
              </div>
              {errors1.message && (
                <span className=" ml-[10px] text-red-600">
                  This field is required
                </span>
              )}

              <div>
                <button className="text-2xl bg-blue-600 text-white w-full p-3 rounded-md hover:bg-blue-500">
                  Submit Your Message
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>

      <button
        className="z-[1000] arrowbtn fixed bottom-32 right-6 rounded-[2px]  w-6 h-6 bg-white text-2xl text-blue-600 "
        title="Back To Top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <i className=" fa-solid fa-angle-up"></i>
      </button>
      <FloatingWhatsApp
        phoneNumber={"+917982011271"}
        accountName={"Support Team CETF"}
        // Optional: your avatar image
        statusMessage="Online" // Optional status message
        chatMessage={"Hello! How can we help you?"}
        avatar={avatarwhatsapp}
        notification
        notificationSound
        notificationDelay={5}
      />
    </>
  );
};

export default Home;
