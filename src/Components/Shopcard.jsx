import React, { useContext } from 'react';
import { AuthContext } from '../Providers/Authproviders';
import Swal from 'sweetalert2';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

import useAxiosSecure from '../Hooks/useAxiosSecure';
import useTanstrackQuery from '../Hooks/useTanstrackQuery';
 
 

const Shopcard = ({card}) => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure()
  const [,refetch] = useTanstrackQuery()
 
    const { name, image, recipe,price } = card;
    
    const handleaddcart = (card)=>{
     if (user && user.email, card) {
      const cartItem = {
        email:user.email,
        name,
        image,
        price
      }
      axiosSecure.post('/carts',cartItem)
      .then(res=>{
        console.log(res.data);
        if (res.data.insertedId) {
          alert("added data")
          
        }
      })
      refetch()
      
     }else{
      Swal.fire({
        title: "You are not login",
        text: "Yplease login add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Go Login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate(location?.state ? location.state : '/');
        }
      });
     }

    }

    return (
        <div className="card card-compact  bg-base-100 shadow-xl ">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className='bg-black text-white inline-block absolute right-10 p-2'>${price}</p>
        <div className="card-body text-center">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-center">
            <button onClick={()=>handleaddcart(card)} className="btn btn-secondary">Add cart</button>
          </div>
        </div>
      </div>
    );
};

export default Shopcard;