import React from 'react';
import leftImg from "../../assets/Group-2.png";
import rightImg from "../../assets/Group-1.png";

const Banner = ({ticketStatistics}) => {
    return (
        <div className='lg:px-4 py-4 lg:py-10'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mx-2 lg:mx-auto mb-10'>
                <div className='text-white rounded-xl  pointer-events-none bg-linear-to-br from-[#632EE3] to-[#9F62F2]'>
                    <div className='flex h-36 lg:h-48'>
                        <div className='min-w-1/3 bg-cover bg-no-repeat' style={{backgroundImage: `url(${leftImg})`}}></div>
                        <div className='w-1/3 flex flex-col justify-center items-center py-4 gap-2'>
                            <h3 className='text-xl whitespace-nowrap'>In Progress</h3>
                            <h1 className='text-4xl font-bold'>{ticketStatistics}</h1>
                        </div>
                        <div className='min-w-1/3 bg-cover bg-no-repeat' style={{backgroundImage: `url(${rightImg})`}}></div>
                    </div>
                </div>
                <div className='text-white rounded-xl  pointer-events-none bg-linear-to-br from-[#42e4a6] to-[#037e55]'>
                    <div className='flex h-36 lg:h-48'>
                        <div className='min-w-1/3 bg-cover bg-no-repeat' style={{backgroundImage: `url(${leftImg})`}}></div>
                        <div className='w-1/3 flex flex-col justify-center items-center py-4 gap-2'>
                            <h3 className='text-xl whitespace-nowrap'>Resolve</h3>
                            <h1 className='text-4xl font-bold'>0</h1>
                        </div>
                        <div className='min-w-1/3 bg-cover bg-no-repeat' style={{backgroundImage: `url(${rightImg})`}}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;