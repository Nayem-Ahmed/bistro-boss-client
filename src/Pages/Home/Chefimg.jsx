import React from 'react';
import chef from '../../assets/chef-service.jpg'

const Chefimg = () => {
    return (
        <div className='relative mb-64 md:mb-12'>
            <img className='relative' src={chef} alt="" />
          
       
           <div className='bg-white absolute md:max-w-2xl text-center mx-auto p-4 md:h-48 md:top-32  right-0 left-0  '>
                <h2 className='md:text-2xl font-semibold md:mb-3'>Bistro Boss</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
           </div>

    );
};

export default Chefimg;