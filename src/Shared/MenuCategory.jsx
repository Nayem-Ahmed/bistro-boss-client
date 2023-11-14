import React from 'react';
import Popularitems from './Popularitems';

const MenuCategory = ({popularmenu}) => {
    return (
        <div className='grid grid-cols-2 gap-5 items-center p-4'>
                
        {
            popularmenu.map(popularmenu => <Popularitems key={popularmenu._id} popularmenu={popularmenu}></Popularitems>)
        }
        </div>
    );
};

export default MenuCategory;