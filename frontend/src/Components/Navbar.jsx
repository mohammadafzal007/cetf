import React, { useState ,useEffect} from 'react';
import logo from "./logo.avif";
import { Link, useLocation } from 'react-router-dom';
import {motion} from 'framer-motion';

const Navbar = () => {
  const [open, setopen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
const {pathname}=useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
const hamburgeropen=()=>{
setopen(!open)
// console.log(open)
}

  

  return (
    <div className={`z-[1000] fixed  w-full transition-all lg:h-[100px] duration-150 ease-in  ${scrolled?'text-white bg-zinc-800 ':'bg-transparent text-white'} flex justify-between place-items-center lg:justify-between p-4`}>
       <a href="/" className='cursor-pointer lg:p-20 '> <motion.img src={logo} 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
       className='w-[50px] lg:w-[150px] lg:p-4' alt="Logo" /></a>
  
        
        <li onClick={hamburgeropen} className='  text-2xl list-none  absolute top-4 right-4 lg:hidden hover:text-gray-300 underline-offset-8 lg:text-xl xl:text-xl font-light duration-200 ease-in '><i className={` fa-solid ${open?'fa-xmark':'fa-bars'}`}></i></li>
      <motion.div 
      // initial={{ y: 10, opacity: 0 }}
      // whileInView={{ y: 0, opacity: 1 }}
      // viewport={{ once: true }}
      // transition={{ duration: 0.5 }}
      className={``} >
              
        <motion.ul
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
         className={`transition-all  duration-300 ease-in absolute ${open?'top-[60px]':'top-[-350px]'} w-full bg-gray-500 right-0 h-80 flex flex-col justify-end place-items-end gap-4 p-10 lg:top-[10px] lg:bg-transparent lg:h-[100px] lg:w-[600px] lg:flex-row lg:right-10 `}>
    
          <li className={` hover:text-gray-300 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${pathname==="/"?"underline text-gray-400":""} underline-offset-8 lg:text-xl xl:text-xl font-light `}><Link to="/" onClick={hamburgeropen}>Home</Link></li>
          <li className={`hover:text-gray-300 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${pathname==="/trainings"?"underline text-gray-400":""} underline-offset-8 lg:text-xl xl:text-xl font-light`}><Link to="/trainings" onClick={hamburgeropen}>Training</Link></li>
          <li className={`hover:text-gray-300 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${pathname==="/services"?"underline text-gray-400":""} underline-offset-8 lg:text-xl xl:text-xl font-light`}><Link to="/services"onClick={hamburgeropen}>Services</Link></li>
          <li className={`hover:text-gray-300 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${pathname==="/about"?"underline text-gray-400":""} underline-offset-8 lg:text-xl xl:text-xl font-light`}><Link to="/about" onClick={hamburgeropen}>About</Link></li>
          <li className={`hover:text-gray-300 relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center ${pathname==="/contact"?"underline text-gray-400":""} underline-offset-8 lg:text-xl xl:text-xl font-light`}><Link to="/contact" onClick={hamburgeropen}>Contact</Link></li>
      
        <ul className=" flex  gap-4">
          <li className='hover:text-blue-700 cursor-pointer'><a href="https://www.facebook.com/cetf.in" target="_blank" className="fa-brands fa-facebook"></a></li>
          <li className='hover:text-red-700 cursor-pointer'><a href="https://www.instagram.com/cetf.in?igsh=aW1vZGN2eXRxeW9i" target="_blank"  className="fa-brands fa-instagram"></a></li>
          <li className='hover:text-blue-700 cursor-pointer'><a href="https://www.linkedin.com/company/cyberelite-task-force/" target="_blank" className="fa-brands fa-linkedin"></a></li>
        </ul>
        </motion.ul>
      </motion.div>
        {/* <button onClick={hamburgeropen} className='lg:hidden text-2xl'><i className={`duration-200 ease-in fa-solid ${open?'fa-xmark':'fa-bars'}`}></i></button> */}
    </div>
  );
};

export default Navbar;
