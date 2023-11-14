import React from 'react';

 

const Cover = ({img,heading1,heading2}) => {
    return (
        
        
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">

                <div className=" md:w-[800px] p-2 md:p-10 bg-[#15151599]">
                    <h1 className="mb-5 md:text-5xl font-bold">{heading1}</h1>
                    <p className="mb-5">{heading2}</p>
 
                </div>
            </div>
        </div>
    );
};

export default Cover;