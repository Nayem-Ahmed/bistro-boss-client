import React from 'react';

const Shopcard = ({card}) => {
    const { name, image, recipe,price } = card;

    return (
        <div className="card card-compact  bg-base-100 shadow-xl ">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className='bg-black text-white inline-block absolute right-10 p-2'>${price}</p>
        <div className="card-body text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button className="btn btn-primary">Add cart</button>
          </div>
        </div>
      </div>
    );
};

export default Shopcard;