import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { MdOutlineDelete , MdGroups3 } from 'react-icons/md';
import Swal from 'sweetalert2';

const Allusers = () => {
    const axiosSecure = useAxiosSecure();
    const {data: users=[],refetch} = useQuery({
        queryKey:['users'],
        queryFn:async ()=>{
            const res = await axiosSecure.get('/users');
            return res.data
        }
    })
    const handledeleteuser = (user)=>{
        console.log(user);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });

                        }

                    })

            }
        });
    }
    const handleaddAdmin = (user)=>{
        axiosSecure.patch(`/users/${user}`)
        .then(res=>{
            console.log(res.data);
            refetch()
        })

    }
    return (
        <div>
        <div>
            <h2 className='text-2xl'>Total Users : {users.length} </h2>
        </div>

        <div className="overflow-x-auto mt-7">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((users, index) => <tr key={users._id}>
                            <th>{index + 1}</th>
                            {/* <td><img className='w-28' src={users.photo} alt="" /></td> */}
                            <td></td>
                            <td>{users.email} </td>
                            <td>
                               { users.role === "admin" ?  "Admin" : <MdGroups3 className='text-2xl' onClick={() => handleaddAdmin(users._id)}></MdGroups3>}
                            </td>
                            <td><MdOutlineDelete className='text-2xl text-red-600' onClick={() => handledeleteuser(users)} ></MdOutlineDelete></td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Allusers;

 
