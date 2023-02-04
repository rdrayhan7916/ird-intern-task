import React from 'react';
import './NavBar.css'
const NavBar = () => {
    return (
        <div className=' flex justify-between pt-10 mr-8 ml-28'>
            <div >
                <h1 className='nav-text text-xl font-normal'><span className='rounded-md  gym px-3 py-1'>Gym</span> <span className='barn'>barn</span></h1>
            </div>
            <div className='inline'>
                <a className='nav-link mr-4' href=''>Home</a>
                <a className='nav-link mr-4' href=''>Program</a>
                <a className='nav-link mr-4' href=''>Blog </a>
                <a className='nav-link mr-4' href=''>About us</a>
                <a className='mr-4 log px-6 py-2 rounded-md text-white' href=''>Log in</a>
            </div>
        </div>
    );
};

export default NavBar;