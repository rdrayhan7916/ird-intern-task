import React from 'react';
import './Healthy.css'

const Healthy = () => {
    return (
        <div className='flex justify-around mt-8 health '>
            <div className='text-left left-part '>
                <h1 className='font-bold text-5xl'> Healthy in side <br />
                    <span className='span'>fresh</span>  out side
                </h1>
                <p className='hl-p text-base font-normal mt-2 '>
                    Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine.
                </p>
                <div className='flex justify-start mt-5'>

                    <button className=' start-btn text-base font-normal px-3 py-1 rounded-md'>Get stared
                        <i class="ml-7 fa-sharp fa-solid fa-circle-chevron-right"></i>
                    </button>

                    <button className=' lrn-btn  start-btn text-base font-normal px-3 py-1 rounded-md'>
                        <i class="fa-solid fa-circle-play mr-2"></i>
                        Learn more</button>


                </div>
                <div>
                    <h1 className='brands'>Brands:</h1>
                    <div className='flex'>
                        <img className='w-16 h-7 mr-4' src="https://i.stack.imgur.com/WYAWe.jpg" alt="nike-logo" srcset="" />

                        <img className='w-16 h-7 mr-5' src="https://1000logos.net/wp-content/uploads/2016/10/Adidas-Logo-1967.jpg" alt="nike-logo" srcset="" />

                        <img className='w-16 h-7 mr-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrWAeTJ2f8bxQ0_1-lFIsGRnfYd-ls8TFsQ&usqp=CAU" alt="nike-logo" srcset="" />

                        <img className='w-16 h-7 mr-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4zzYDLPffCuJAZ8hwzOaM1dmp4C29oe165g&usqp=CAU" alt="nike-logo" srcset="" />

                    </div>
                </div>
            </div>
            <div>
                <img className='img-1 ' src="https://w0.peakpx.com/wallpaper/565/807/HD-wallpaper-gym-bodybuilding-gym-motivation-thumbnail.jpg" alt="Img" />

            </div>

        </div>
    );
};

export default Healthy;