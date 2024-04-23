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
          w-full flex items-center py-5
          fixed top-0 z-20
          bg-primary
          `}>
          <div className='w-full flex justify-between
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
                       className='object-cover'
                       width={150} height={150}
                  />
              </Link>

{/*ok*/}
          </div>

      </nav>
    )
}
export default Navbar
