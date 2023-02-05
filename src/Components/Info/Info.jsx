import React from 'react';
import './Info.css'
const Info = () => {
    return (
        <div className='info grid grid-cols-2 mt-32'>
            <div>
                <h1 className='ml-16 info-htext text-5xl font-normal'>
                    Healthy in side <br />
                    fresh out side
                </h1>
            </div>
            <div>
                <p className='mr-12 info-p text-base'>
                    Exercise is a very important need for our body. Health and fitness will be obtained if you can do regular exercise and run a healthy routine. Even at home we still have to be diligent in exercising, either alone or with your friends at home. Healthy life makes you more excited to live the day
                </p>
            </div>
        </div>
    );
};

export default Info;