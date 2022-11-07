import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/logo/logo.jpg'

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <nav className="bg-gray-900 py md:w-full px-8">
            <div className='flex justify-between items-center mx-4'>
                <div>
                    <Link to='/' className='block ml-0'>
                        <img className='w-[80px] md:hidden' src={logo} alt="brand logo" />
                    </Link>
                </div>
                <div onClick={() => setOpen(!open)} className="w-10 md:hidden ml-4 text-white">
                    {
                        open ? <span>
                            <svg className='w-10 ml-3' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" ariaHidden="true" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd"></path></svg>
                        </span>
                            :
                            <span>
                                <svg className='w-6 mr-3' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 12 16" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"></path></svg>
                            </span>
                    }
                </div>
            </div>
            <div className={`bg-gray-900 flex text-white z-50 flex-col items-start justify-start mt-none md:flex-row md:items-center h-full md:h-fit md:w-full md:flex md:justify-end absolute md:static duration-500 ease-in  
            ${open ? 'left-[0px] pl-5 pr-16 pt-3' : '-left-[300px] md:left-0'}`}>
                <Link to='/' className='text-blue-600 font-bold text-2xl md:grow' >
                    <img className='w-20 hidden md:block' src={logo} alt="brand logo" />
                </Link>

                <NavLink to='/profile'
                    onClick={() => setOpen(false)} className={({ isActive }) => isActive ?
                        'text-orange-600 mt-3 md:mt-0 md:hidden' : 'mt-3 md:mt-0 md:hidden'}>
                    <button className='btn btn-xs btn-primary  py-0'>PROFILE</button>
                </NavLink>
                <NavLink to='/home'
                    onClick={() => setOpen(false)} className={({ isActive }) => isActive ?
                        'text-orange-600 mt-3 md:mt-0 mr-6' : 'mr-6 mt-3 md:mt-0'}>HOME</NavLink>
                <NavLink to='/services'
                    onClick={() => setOpen(false)} className={({ isActive }) => isActive ?
                        'text-orange-600 mt-3 md:mt-0 mr-6' : 'mr-6 mt-3 md:mt-0'} >SERVICES</NavLink>
                <NavLink to='/galary'
                    onClick={() => setOpen(false)} className={({ isActive }) => isActive ?
                        'text-orange-600 mt-3 md:mt-0 mr-6' : 'mr-6 mt-3 md:mt-0'} >GALAY</NavLink>
                <NavLink to='/about'
                    onClick={() => setOpen(false)} className={({ isActive }) => isActive ?
                        'text-orange-600 mt-3 md:mt-0' : ' mt-3 md:mt-0'} >ABOUT US</NavLink>

                {/* {
                    user?.uid ?
                        <Link className='order-first md:order-none' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                            <img onClick={() => setProfileView(!profileView)} className='w-10 rounded-full' src={user?.photoURL} alt="" />
                        </Link>
                        :
                        <NavLink onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active mt-3 md:mt-0' : 'mt-3 md:mt-0'} to='/login'>LOGIN</NavLink>
                } */}
            </div>
        </nav>
    );
};

export default Header;