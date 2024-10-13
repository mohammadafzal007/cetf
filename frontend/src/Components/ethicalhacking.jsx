import React,{useState,useEffect} from 'react';
import {motion} from 'framer-motion'
import pdf from "./pdfs/cetf_CEH_Course.pdf"

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
     <h1 className='text-white text-2xl font-bold'>Certified Ethical Hacker | CEH</h1>
           <p className='font-light text-white'>CEHv12 is an advanced cybersecurity training covering ethical hacking, penetration testing, andsecure network infrastructure.Participants gain hands-on experiencewith the latest tools, addressingcontemporary vulnerabilities andenhancing their ability to proactivelymitigate cybersecurity threats.
Elite Cybercraft: Mastering in Hacking & Security
www.cetf.org.in cetf.in +91 7982011271



</p>
{/* <p className='font-light text-white'>
One of the key components of the CEH course is its focus on practical application. Learners engage in simulated environments and perform penetration testing exercises that mimic real-life cyber attacks, allowing them to practice and refine their skills in a controlled setting. By the end of the program, participants are equipped with the knowledge and tools necessary to identify weaknesses in an organization’s cybersecurity defenses and implement appropriate countermeasures.

The CEH course is designed for IT professionals, network administrators, and security enthusiasts seeking to enhance their cybersecurity skills. It serves as a valuable credential for those looking to pursue careers as ethical hackers, penetration testers, or security analysts, helping them gain a competitive edge in the growing field of information security.</p> */}
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
    <h1 className='text-2xl text-white'>Content for CEH v12</h1>
    <a href={pdf} download="cetf_CEH_Course.pdf">
    <button className="flex h-[60px] w-60 text-xl items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-500 rounded-3xl  hover:bg-white hover:text-blue-600 hover:shadow-blue-600 ">
                  Download Syllabus
                  </button>
                  </a>
</div>
<div className="w-full h-[400px] p-4   overflow-y-scroll mt-4 bg-white border-sky-400 ">
      <div className="space-y-4 text-xl font-semibold text-black  ">
        <span>Module 01:</span><span> Introduction to Ethical Hacking</span><br/><hr/>
        <span>Module 02:</span><span> Footprinting and Reconnaissance</span><br/><hr/>
        <span>Module 03:</span><span> Scanning Networks</span><br/><hr/>
        <span>Module 04:</span><span> Enumeration</span><br/><hr/>
        <span>Module 05:</span><span> Vulnerability Analysis</span><br/><hr/>
        <span>Module 06:</span><span> System Hacking</span><br/><hr/>
        <span>Module 07:</span><span> Malware Threats</span><br/><hr/>
        <span>Module 08:</span><span> Sniffing</span><br/><hr/>
        <span>Module 09:</span><span> Spcial Engineering</span><br/><hr/>
        <span>Module 10:</span><span> Denial-of-Service</span><br/><hr/>
        <span>Module 11:</span><span> Session Hijacking</span><br/><hr/>
        <span>Module 12:</span><span> Evading IDS, Firewalls and Honeypots</span><br/><hr/>
        <span>Module 13:</span><span> Hacking Web Server</span><br/><hr/>
        <span>Module 14:</span><span> Hacking Web Applications</span><br/><hr/>
        <span>Module 15:</span><span> SQL Injection</span><br/><hr/>
        <span>Module 16:</span><span> Hacking Wireless Networks</span><br/><hr/>
        <span>Module 17:</span><span> Hacking Mobile Platforms</span><br/><hr/>
        <span>Module 18:</span><span> IoT Hacking</span><br/><hr/>
        <span>Module 19:</span><span> Cloud Computing</span><br/><hr/>
        <span>Module 20:</span><span> Cryptography</span><br/><hr/>

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