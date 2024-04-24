
import React, {useState} from "react";
import {Link} from "react-router-dom";
import {styles} from "../styles.js";
import {navLinks} from "../constants/index.js";
import {logoColor,menu,close} from '../assets'
const Navbar = () => {
    const[active,setActive]=useState('""');
    return(

        <nav
            className={`${styles.paddingX}
          w-full flex items-center py-10
          fixed top-0 z-20
          bg-primary
          `}>
            <div className='w-10/12 flex justify-between
          items-center py-5 fixed top-0 z-20
          bg-primary'>

                <Link to="/"
                      className='flex items-center gap-2'
                      onClick={() => {
                          setActive("");
                          window.scrollTo(0, 0);
                      }}

                >

                    <img src={logoColor} alt='logo'
                         className='w-29 h-20 object-contain'

                    />
                    <p className="text-white text-[18px]
                    font-bold cursor-pointer">
                        Pradyumna
                        <span className='sm:block hidden'>| Python Programmer</span>

                    </p>
                </Link>

                <ul className='list-none
                hidden sm:flex flex-row gap-10'>
                    {navLinks.map((nav) => (
                        <li
                            key={nav.id}
                            className={`${
                                active === nav.title ? "text-white" : "text-secondary"
                            } hover:text-white text-[18px] font-medium cursor-pointer`}
                            onClick={() => setActive(nav.title)}
                        >
                            <a href={`#${nav.id}`}>{nav.title}</a>
                        </li>
                    ))}
                </ul>



            </div>

        </nav>
    )
}
export default Navbar