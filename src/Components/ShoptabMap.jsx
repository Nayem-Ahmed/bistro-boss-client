import React from 'react';
import Shopcard from './Shopcard';

const ShoptabMap = ({items}) => {
    return (
        <div className='grid md:grid-cols-4 gap-5 p-2'>
        {
            items.map(item => <Shopcard key={item._id} card={item}></Shopcard>)
        }
    </div>
    );
};

export default ShoptabMap;