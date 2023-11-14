import React from 'react';

const Popularitems = ({ popularmenu }) => {
    const { name, image, recipe,price } = popularmenu;

    return (
        <div className='flex flex-col md:flex-row mb-10'>
            <div>
                <img style={{ borderRadius: '0px 200px 200px 200px' }} className='w-24 mr-24' src={image} alt="" />

            </div>
            <div>

                <h2>{name} ---------------------</h2>
                <p>{recipe}</p>
            </div>
            <span className='text-[#BB8506]'>${price}</span>
        </div>

    );
};

export default Popularitems;