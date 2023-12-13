import React from 'react';

const Catagory = ({catagory}) => {
    const {logo,category_name,availability} =catagory;

    return (
        <div className='flex justify-center my-10 '>
            <div className='w-60 h-48  border shadow-xl rounded-lg flex flex-col bg-slate-200 justify-evenly'>
                <div className='w-16 h-16 ml-4  bg-slate-300 rounded'><img className='mt-1 ml-1  w-14 h-14 my-auto' src={logo} alt="" /></div>
                <div className='ml-4'>
                    <h1 className='text-xl font-bold'>{category_name}</h1>
                    <p className='text-sm font-normal text-slate-500'>{availability}</p>
                </div>
            </div>
        </div>
    );
};

export default Catagory;