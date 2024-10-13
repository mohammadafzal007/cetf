import React,{useState,useEffect} from 'react';
import {motion} from 'framer-motion'
import pdf from "./pdfs/cetf_Cybersecurity_Course.pdf"
import Contactform_course from './contactform_course';
const cybersecurity = () => {
  const[openform,setopenform]=useState(false)
  useEffect(()=>{
    const scrollToTop = () => {
        window.setTimeout(() => {
          window.scrollTo(0, 0);
        }, 100); // Adjust the timeout as needed
      };
  
      scrollToTop();
  })
  return (
    <>
    <div className='flex flex-col justify-center place-items-center  pt-20  w-full'>
        
            {/* //titles  */}
            <div className=' flex flex-col w-full 
            space-y-4 p-10 lg:p-10 '>
     <h1 className='text-white text-2xl font-bold'>CyberSecurity</h1>
           <p className='font-light text-white'>Learn from the Best 6 Months Diploma in Information Security Course in Delhi, which comprises all the fundamentals of Cyber Security, Penetration Testing, Forensics, Advanced Networking, Web Application Security, Mobile Security, and Python Programming as a bundle of resources that you can get in a single shot of education program. This splendid Introduction to Information Security Course will give you an in-depth analyzed curriculum and an entire overview of the Security Awareness Training through a unique platform.
</p>
{/* <p className='font-light text-white'>
</p> */}
<div className='grid grid-cols-1 md:grid-cols-3 '>

<div>
    <span className='font-bold text-white'>Course Duration     </span >:  <span className='text-white'>6 Months</span>
</div>
<div>
    <span className='font-bold text-white'>Language    </span>:   <span  className='text-white'>Hindi/English</span>
</div>
<div>
    <span className='font-bold text-white'>Course Delivery   </span>:  <span className='text-white'>Online /Offline</span>
</div>
<div>
    <span className='font-bold text-white'>Contact us      </span>:  <a href="tel:7982011271" className='text-white'>+91 7982011271</a>
</div>
<div>
    <span className='font-bold text-white'>Email Id </span>:   <a href="mailto:mail@cetf.org.in"  className='text-white'>mail@cetf.org.in</a>
</div>
</div>
<button className=" p-2 flex h-[60px] w-72 text-xl items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-500 rounded-3xl  hover:bg-white hover:text-blue-600 hover:shadow-blue-600 ">
                  <span className="" onClick={()=>setopenform(true)}>Book Your Demo Class</span>
                </button>
            </div>
          </div>



     
        <div className='p-10 lg:p-10  space-y-4'>
       
<div>

<div className="flex justify-between place-items-center w-full flex-col md:flex-row">
    <h1 className='text-2xl text-white'>Content for CEH v13 Ai Course in Delhi</h1>

    <a href={pdf} download="cetf_Cybersecurity_Course.pdf">
    <button className="flex h-[60px] w-60 text-xl items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-500 rounded-3xl  hover:bg-white hover:text-blue-600 hover:shadow-blue-600 ">
                  Download Syllabus
                  </button>
                  </a>
</div>
<div className="w-full h-[400px] p-4   overflow-y-scroll mt-4 bg-white border-sky-400 ">
      <div className="space-y-4 text-xl font-semibold text-black  ">
        <span>Module 01:</span><span>Networking</span><br/><hr/>
        <span>Module 02:</span><span>Linux</span><br/><hr/>
        <span>Module 03:</span><span>Python  Language</span><br/><hr/>
        <span>Module 04:</span><span>Ethical Hacking v12</span><br/><hr/>
        <span>Module 05:</span><span>Network Penetration Testing</span><br/><hr/>
        <span>Module 06:</span><span>Web Application Testing</span><br/><hr/>
      </div>
    </div>
</div>
        </div>
{openform&& <Contactform_course setopenform={setopenform}/>
}
        </>
    
  )
}

export default cybersecurity