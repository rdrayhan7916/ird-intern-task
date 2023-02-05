import React from 'react';
import './WorkOut.css'
const WorkOut = () => {
    return (
        <div className='flex justify-around mt-28 workout'>
            <div>
                <img className='img-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPmM1s1mQfVpTVn5rkBqCe96BRc-7k6qbHw&usqp=CAU" alt="Img" />
            </div>

            <div className='text-left left-part'>
                <h1 className='font-base text-5xl mb-7'> Best full body <br />
                    Workout to loss fat
                </h1>
                <p className='hl-p text-base font-normal mt-2 '>
                    Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home.
                </p>
                <button className=' mt-6 start-btn text-base font-normal px-3 py-1 rounded-md'>Get stared
                    <i class="ml-12  fa-solid fa-arrow-right fa-circle-chevron-right"></i>
                </button>

            </div>

        </div>
    );
};

export default WorkOut;