import React from 'react';

function Head({title}) {
    return (
        <div className='w-full bg-deepGray lg:h-64 h-40 relative overflow-hidden rounded-md'>
            <img src="/images/head.jpg" alt="aboutUs" className='w-full h-full object-cover' />            
        <div className='absolute flex-colo top-26 lg:top-24 w-full'>
<h1 className='text-2xl lg:text-h1 text-white text-center font-bold'>
    {title}</h1>
        </div>
        </div>
    );
}

export default Head;