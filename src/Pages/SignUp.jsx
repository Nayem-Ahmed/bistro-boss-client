// import { Link, useNavigate } from 'react-router-dom';
// import { TiSocialFacebook } from 'react-icons/ti';
// import { IoLogoGoogle, IoLogoGithub } from 'react-icons/io';
// import { useForm } from 'react-hook-form';
// import { Helmet } from 'react-helmet-async';
// import { useContext } from 'react';
// import { AuthContext } from '../Providers/Authproviders';
// import { updateProfile } from 'firebase/auth';
// import useAxiosPublic from '../Hooks/useAxiosPublic';

// const SignUp = () => {
//   const axiosPublic = useAxiosPublic()
//   const { createUser,logingoogle } = useContext(AuthContext)
//   const navigate = useNavigate()

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     // Add your signup logic here
//     createUser(data.email, data.password)
//     .then((result) => {
//       const userInfo = {
//         photo: data.photo,
//         email : data.email
//       }
//       axiosPublic.post('/users',userInfo)
//       .then(res=>{
//         if(res.data.insertedId) {
//           alert('store database')
          
//         }
//       })
//         console.log(result.user);
//         alert('create user')
//         updateProfile(result.user,{
//           photoURL: data.photo,
//         })
//         navigate('/')
//     })
//     .catch((error) => {
//         console.error(error)
//     });
//   };



//   const handlelogingoogle = ()=>{

//     logingoogle()
//     .then(res=>{
//       console.log(res.user);
//       const userInfo = {
//         email: res.user?.email,
//         photo: res.user?.photoUR,
//       }
//       axiosPublic.post('/users',userInfo)
//       .then(res=>{
//         console.log(res.data);
//         navigate('/')

//       })
//       .catch((error) => {
//         console.error(error)
//     });
  
      
//     })
//     .catch((error) => {
//       console.error(error)
//   });

//   }

//   return (
//     <>
//     <Helmet>
//       <title>Bistro Boss || Sign Up</title>
//     </Helmet>
//       <div className="hero min-h-screen bg-base-200">
//         <div className="hero-content flex-col lg:lg:flex-row-reverse">
//           <div className="text-center lg:text-left">
//             <img src="https://i.ibb.co/bKX3pc8/authentication2-1.png" alt="Authentication" />
//           </div>
//           <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//             <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//               <h2 className="text-center font-semibold text-xl">Signup</h2>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Photo Url</span>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="url"
//                   {...register('photo')}
//                   className={`input input-bordered `}
//                 />
               
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   {...register('email', { required: 'Email is required' })}
//                   className={`input input-bordered ${errors.email ? 'input-error' : ''}`}
//                 />
//                 {errors.email && <span className="text-error">{errors.email.message}</span>}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   placeholder="Password"
//                   {...register('password', {
//                     required: 'Password is required',
//                     pattern: {
//                       value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,}$/,
//                       message: 'Password must be at least 8 characters and include letters and numbers',
//                     },
//                   })}
//                   className={`input input-bordered ${errors.password ? 'input-error' : ''}`}
//                 />
//                 {errors.password && <span className="text-error">{errors.password.message}</span>}
//               </div>
//               <div className="form-control mt-6">
//                 <button type="submit" className="btn btn-primary">
//                   Sign Up
//                 </button>
//               </div>
//               <p className="text-center">
//                 Already registered? Go to log in <Link className="underline" to="/login">Login</Link>
//               </p>
//               <p className="text-center">Or sign up with</p>
//               <div className="flex gap-2 text-center mx-auto">
//                 <button className="btn btn-circle btn-outline">
//                   <TiSocialFacebook />
//                 </button>
//                 <button onClick={handlelogingoogle} className="btn btn-circle btn-outline">
//                   <IoLogoGoogle />
//                 </button>
//                 <button className="btn btn-circle btn-outline">
//                   <IoLogoGithub />
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;

import { Link, useNavigate } from 'react-router-dom';
import { TiSocialFacebook } from 'react-icons/ti';
import { IoLogoGoogle, IoLogoGithub } from 'react-icons/io';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { useContext } from 'react';
import { AuthContext } from '../Providers/Authproviders';
import { updateProfile } from 'firebase/auth';
import useAxiosPublic from '../Hooks/useAxiosPublic';

const SignUp = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, logingoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const userInfo = {
          email: data.email,
          photo: data.photo,
        };

        axiosPublic.post('/users', userInfo)
          .then((res) => {
            if (res.data.insertedId) {
              alert('User created successfully');
              navigate('/');
            } else {
              alert('Failed to create user: ' + res.data.message);
            }
          })
          .catch((error) => {
            console.error(error);
          });

        updateProfile(result.user, {
          photoURL: data.photo,
        });
      })
      .catch((error) => {
        console.error(error);
        alert('Failed to create user');
      });
  };

  const handlelogingoogle = () => {
    logingoogle()
      .then((res) => {
        const userInfo = {
          email: res.user?.email,
          photo: res.user?.photoURL,
        };

        axiosPublic.post('/users', userInfo)
          .then((res) => {
            if (res.data.insertedId) {
              alert('User created successfully');
              navigate('/');
            } else {
              alert('Failed to create user: ' + res.data.message);
            }
          })
          .catch((error) => {
            console.error(error);
          });

      })
      .catch((error) => {
        console.error(error);
        alert('Google authentication failed');
      });
  };

  return (
        <>
     <Helmet>
       <title>Bistro Boss || Sign Up</title>
     </Helmet>
       <div className="hero min-h-screen bg-base-200">
         <div className="hero-content flex-col lg:lg:flex-row-reverse">
           <div className="text-center lg:text-left">
             <img src="https://i.ibb.co/bKX3pc8/authentication2-1.png" alt="Authentication" />
           </div>
           <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
             <form onSubmit={handleSubmit(onSubmit)} className="card-body">
               <h2 className="text-center font-semibold text-xl">Signup</h2>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Photo Url</span>
                 </label>
                 <input
                   type="text"
                   placeholder="url"
                   {...register('photo')}
                   className={`input input-bordered `}
                 />
             
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Email</span>
                 </label>
                 <input
                   type="email"
                   placeholder="Email"
                   {...register('email', { required: 'Email is required' })}
                   className={`input input-bordered ${errors.email ? 'input-error' : ''}`}
                 />
                 {errors.email && <span className="text-error">{errors.email.message}</span>}
               </div>
               <div className="form-control">
                 <label className="label">
                   <span className="label-text">Password</span>
                 </label>
                 <input
                   type="password"
                   placeholder="Password"
                   {...register('password', {
                     required: 'Password is required',
                     pattern: {
                       value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,}$/,
                       message: 'Password must be at least 8 characters and include letters and numbers',
                     },
                   })}
                   className={`input input-bordered ${errors.password ? 'input-error' : ''}`}
                 />
                 {errors.password && <span className="text-error">{errors.password.message}</span>}
               </div>
               <div className="form-control mt-6">
                 <button type="submit" className="btn btn-primary">
                   Sign Up
                 </button>
               </div>
               <p className="text-center">
                 Already registered? Go to log in <Link className="underline" to="/login">Login</Link>
               </p>
               <p className="text-center">Or sign up with</p>
               <div className="flex gap-2 text-center mx-auto">
                 <button className="btn btn-circle btn-outline">
                   <TiSocialFacebook />
                 </button>
                 <button onClick={handlelogingoogle} className="btn btn-circle btn-outline">
                   <IoLogoGoogle />
                 </button>
                 <button className="btn btn-circle btn-outline">
                   <IoLogoGithub />
                 </button>
               </div>
             </form>
           </div>
         </div>
       </div>
     </>
  );
};

export default SignUp;


