import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TiSocialFacebook } from "react-icons/ti";
import { IoLogoGoogle, IoLogoGithub } from "react-icons/io";
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../Providers/Authproviders';
import { Helmet } from 'react-helmet-async';



const SignIn = () => {
    const { loginUser } = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handlesubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        loginUser(email, password)
            .then((result) => {
                console.log(result.user);
                alert('Login success')
            })
            .catch((error) => {
                console.error(error)
            });

    }
    return (
        <>
            <Helmet>
                <title>Bistro Boss || Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img src="https://i.ibb.co/bKX3pc8/authentication2-1.png" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlesubmit} className="card-body">
                            <h2 className='text-center font-semibold text-xl'>Login</h2>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" placeholder="Type captcha" name='captcha' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                            <p className='text-center'>New here? Create a New Account <Link className='underline' to='/signup'>Signup</Link></p>
                            <i className='text-center'>Or sign in with</i>
                            <div className='flex gap-2 text-center mx-auto'>
                                <button className="btn btn-circle btn-outline">
                                    <TiSocialFacebook></TiSocialFacebook>
                                </button>
                                <button className="btn btn-circle btn-outline">
                                    <IoLogoGoogle></IoLogoGoogle>
                                </button>
                                <button className="btn btn-circle btn-outline">
                                    <IoLogoGithub ></IoLogoGithub>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SignIn;
