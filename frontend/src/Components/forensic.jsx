import React,{useState,useEffect} from 'react';
import {motion} from 'framer-motion'
import pdf from "./pdfs/cetf_CHFI_Course.pdf"

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
     <h1 className='text-white text-2xl font-bold'>Certified Hacking Forensic Investigator | CHFI</h1>
           <p className='font-light text-white'>This program equips you with hands-on expertise in digital forensics, ensuring you can collect, analyze, and preserve electronic evidence crucial in real-lifecases. By mastering the latest forensic tools,you'll enhance your ability to uncover andprosecute cybercriminals, contributingsignificantly to the successful resolution ofcybercrime incidents. Stay ahead in the digitalage and strengthen your investigativecapabilities with CHFIv10 training.

</p>
{/* <p className='font-light text-white'>
Moreover, after the successful completion of the Certified Ethical Hacker v13 Ai course, a person will certainly be able to hack into systems from any remote location and secure them like a professional Security Analyst in the coolest way possible via the techniques and tactics that you will learn from our verified curriculum from EC Council in our authentic CEH Training in Delhi through its latest edition of CEH v13 Ai.</p> */}
<div className='grid grid-cols-1 md:grid-cols-3 '>

<div>
    <span className='font-bold text-white'>Course Duration     </span >:  <span className='text-white'>40 Hours</span>
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
<button className="flex p-2 h-[60px] w-72 text-xl items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-500 rounded-3xl  hover:bg-white hover:text-blue-600 hover:shadow-blue-600 ">
                  <span className="" onClick={()=>setopenform(true)}>Book Your Demo Class</span>
                </button>
            </div>
          </div>



     
        <div className='p-10 lg:p-10  space-y-4'>
         
<div>

<div className="flex justify-between place-items-center w-full">
    <h1 className='text-2xl text-white'>Content for CHFI</h1>
    <a href={pdf} download="cetf_CHFI_Course.pdf">
    <button className="flex h-[60px] w-60 text-xl items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-500 rounded-3xl  hover:bg-white hover:text-blue-600 hover:shadow-blue-600 ">
                  Download Syllabus
                  </button>
                  </a>
</div>
<div className="w-full h-[400px] p-4   overflow-y-scroll mt-4 bg-white border-sky-400 ">
      <div className="space-y-4 text-xl font-semibold text-black  ">
        <span>Module 01:</span><span>Computer Forensics in Today’s World</span><br/><hr/>
        <span>Module 02:</span><span>Computer Forensics Investigation Process</span><br/><hr/>
        <span>Module 03:</span><span>Understanding Hard Disks and File Systems</span><br/><hr/>
        <span>Module 04:</span><span>Data Acquisition and Duplication</span><br/><hr/>
        <span>Module 05:</span><span>Defeating Anti-Forensics Techniques</span><br/><hr/>
        <span>Module 06:</span><span>Windows Forensics</span><br/><hr/>
        <span>Module 07:</span><span>Linux and Mac Forensics</span><br/><hr/>
        <span>Module 08:</span><span>Network Forensics</span><br/><hr/>
        <span>Module 09:</span><span>Investigating Web Attacks</span><br/><hr/>
        <span>Module 10:</span><span>Dark Web Forensics</span><br/><hr/>
        <span>Module 11:</span><span>Cloud Forensics</span><br/><hr/>
        <span>Module 12:</span><span>Investigating EmailCrimes</span><br/><hr/>
        <span>Module 13:</span><span>Malware Forensics</span><br/><hr/>
        <span>Module 14:</span><span> Mobile Forensics</span><br/><hr/>
        <span>Module 15:</span><span>Iot Forensics</span><br/><hr/>

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