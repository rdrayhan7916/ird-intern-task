import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className='banner rounded-xl  flex justify-evenly py-8 mt-32 mx-16'>
            <div className='flex align-middle person '>
                <div >
                    <i class="p-4 text-3xl rounded-md mr-5 mt-4 person-icon fa-solid fa-person"></i>
                </div>
                <div>
                    <h1 className='bn-text text-xl font-bold'>Get that 11 line <br /> in 30 days</h1>
                    <a className=' font-thin' href="http://" target="_blank" rel="noopener noreferrer">Learn more  <i class="ml-5 fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className='flex align-middle person '>
                <div >
                    <i class="p-4 text-3xl rounded-md mr-5 mt-4 person-icon fa-solid fa-person"></i>
                </div>
                <div>
                    <h1 className='bn-text text-xl font-bold'>14 Days <br /> sherd challenge</h1>
                    <a className=' font-thin' href="http://" target="_blank" rel="noopener noreferrer">Learn more  <i class="ml-5 fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
            <div className='flex align-middle person '>
                <div >
                    <i class="p-4 text-3xl rounded-md mr-5 mt-4 person-icon fa-solid fa-person"></i>
                </div>
                <div>
                    <h1 className='bn-text text-xl font-bold'>Get flat belly <br /> in 30 days</h1>
                    <a className=' font-thin' href="http://" target="_blank" rel="noopener noreferrer">Learn more  <i class="ml-5 fa-solid fa-arrow-right"></i></a>
                </div>
            </div>

        </div>
    );
};

export default Banner;