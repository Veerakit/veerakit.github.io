import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

import Logo from "../images/itracklogo.png";

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav);
    return(
        <div className='fixed w-full h-[68px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 z-10'>
          <div>
            <img src={Logo} alt="logo PG" style={{width: '35px'}} />
          </div>
              <ul className="hidden md:flex">
                <li className="rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300">
                  <Link to='home' smooth={true} duration={500}>
                      Home
                  </Link>
                </li>

                <li className="rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300">
                  <Link to='about' smooth={true} duration={500}>
                      Dashboard
                  </Link>
                </li>

                <li className="rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300">
                  <Link to='education' smooth={true} duration={500}>
                      Activity List
                  </Link>
                </li>

                <li className="rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300">
                  <Link to='contact' smooth={true} duration={500}>
                      Login
                  </Link>
                </li>
              </ul>
          
          {/*Hamburger*/ }
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars/>:<FaTimes/>}
            </div>
            {/*Mobile menu*/}
            <ul className= {!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center className= text-4xl'} >
                <li className="py-6 text-4xl rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300">
                    <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>

                <li className="py-6 text-4xl rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300">
                    <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                        Dashboard
                    </Link>
                </li>

                <li className="py-6 text-4xl rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300">
                    <Link onClick={handleClick} to='education' smooth={true} duration={500}>
                        Activity List
                    </Link>
                </li>

                <li className="py-6 text-4xl rounded-xl bg-[#0a192f] hover:bg-[#1e45c5] duration-200 active:bg-[#1e45c5] focus:outline-none focus:ring focus:ring-violet-300">
                    <Link onClick={handleClick} to='experience' smooth={true} duration={500}>
                        Login
                    </Link>
                </li>
                
            </ul>
        </div>
    );
}

export default Navbar;