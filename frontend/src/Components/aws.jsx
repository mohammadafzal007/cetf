import React,{useState,useEffect} from 'react';
import {motion} from 'framer-motion'
import Contactform_course from './contactform_course';
import pdf from "./pdfs/cetf_AWS_Course.pdf"

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
     <h1 className='text-white text-2xl font-bold'>AWS Cloud Expert</h1>
           <p className='font-light text-white'>Unlock the potential of cloud computing with our comprehensive AWS Cloud Program. Delve into the fundamental concepts and advanced techniques ofAmazon Web Services (AWS), the leading cloudplatform. Through practical exercises and real-world examples, gain proficiency in deployingrobust and scalable solutions, leveraging key AWSservices such as EC2, S3, and Lambda. Masteressential skills in security, monitoring, andoptimization to ensure peak performance and cost-efficiency.
AWS Cloud Training: Navigating the Cloud with Confidence
www.cetf.org.in cetf.in +91 7982011271
</p>
<p className='font-light text-white'>
Learn best practices for AWS security, focusing on IAM policies, KMS encryption, and MFA implementation. Gain expertise in monitoring and auditing AWS environments withCloudTrail and AWS Config. Through hands-on labsand real-world scenarios, develop skills to architectsecure and compliant AWS solutions. Ensureconfidentiality, integrity, and availability of cloudinfrastructure and applications.
Unlock the potential of cloud computing with our comprehensive AWS Cloud Program. Delve into the fundamental concepts and advanced techniques ofAmazon Web Services (AWS), the leading cloudplatform. Through practical exercises and real-world examples, gain proficiency in deployingrobust and scalable solutions, leveraging key AWSservices such as EC2, S3, and Lambda. Masteressential skills in security, monitoring, andoptimization to ensure peak performance and cost-efficiency.
AWS Cloud Training: Navigating the Cloud with Confidence
www.cetf.org.in cetf.in +91 7982011271</p>
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
    <h1 className='text-2xl text-white'>Content for AWS Cloud</h1>
    <a href={pdf} download="cetf_AWS_Course.pdf">
    <button className="flex h-[60px] w-60 text-xl items-center justify-center overflow-hidden bg-blue-600 font-medium text-white shadow-2xl transition-all duration-500 rounded-3xl  hover:bg-white hover:text-blue-600 hover:shadow-blue-600 ">
                  Download Syllabus
                  </button>
                  </a>
</div>
<div className="w-full h-[400px] p-4   overflow-y-scroll mt-4 bg-white border-sky-400 ">
      <div className="space-y-4 text-xl font-semibold text-black  ">
        <span>Module 01:</span><span> AWS Introduction - Regions and Availability Zones</span><br/><hr/>
        <span>Module 02:</span><span> Infrastructure,Pricing,Support-Review</span><br/><hr/>
        <span>Module 03:</span><span> AWS virtual servers- EC2 service and EC2 Instances</span><br/><hr/>
        <span>Module 04:</span><span> Amazon S3 - Object Storage in AWS</span><br/><hr/>
        <span>Module 05:</span><span> Identity And Access Management in AWS</span><br/><hr/>
        <span>Module 06:</span><span> File Storage Solutions in AWS - EFS</span><br/><hr/>
        <span>Module 07:</span><span> Load Balancing Solutions in AWS</span><br/><hr/>
        <span>Module 08:</span><span> High Availability and Scalability:ELB & ASG</span><br/><hr/>
        <span>Module 09:</span><span> Architect Your Private VPC and Subnet</span><br/><hr/>
        <span>Module 10:</span><span> Content Distribution with Amazon Cloudfront</span><br/><hr/>
        <span>Module 11:</span><span> Route53- AWS Domain Registrar and DNS</span><br/><hr/>
        <span>Module 12:</span><span> Relational Databases Solution in AWS</span><br/><hr/>
    

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