import React from 'react';

const Sectiontittle = ({tittle,subtittle}) => {
    return (
        <div className='text-center my-6'>
            <p className='text-[#D99904]'>{tittle}</p>
            <h2 className='border-y-2 inline-block p-2 my-3 font-semibold md:text-2xl'>{subtittle}</h2>
        </div>
    );
};

export default Sectiontittle;