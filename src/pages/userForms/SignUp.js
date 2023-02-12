import React, { useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
// import { useDispatch } from 'react-redux';
// import { createUser, googleLogin } from '../../features/auth/authSlice';
import signImage from '../../assets/login.svg'
import { useNavigate } from 'react-router';
import { FcGoogle } from 'react-icons/fc';
import { googleLogin, signUp } from '../../features/auth/authSlice';
import { useDispatch } from 'react-redux';
const SignUp = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, control, reset } = useForm()
    let [disabled, setDisabled] = useState(true);
    const dispatch = useDispatch()
    const email = useWatch({ control, name: "email" });
    const password = useWatch({ control, name: "password" });
    const confirmPassword = useWatch({ control, name: "confirmPassword" });
    useEffect(() => {
        if (
            password === undefined || password === "" || confirmPassword === undefined || confirmPassword === "" || password !== confirmPassword || email ===""
        ) {
            setDisabled(true);
        } else {
            setDisabled(false)
        }
    }, [password, confirmPassword,email])
    const onSubmit = (data) => {
        // console.log(data);
        // signUp(data);
        dispatch(signUp(data))
        
    }
    let inputClass = "block px-2.5 pb-2.5 pt-5 w-full text-md text-black     border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer";
    let labelClass = "absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] left-2.5 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 cursor-auto"
    return (
        <div className='container mx-auto '>
            <div className='flex h-screen items-center pt-14 flex-wrap sm:flex-nowrap'>
                <div className='w-1/2 mx-12 '>
                    <img src={signImage} className='h-full w-full' alt='' />
                </div>     
                    <div className='w-full  grid place-items-center'>
                        <div className='bg-[#FFFAF4] rounded-lg grid place-items-center p-10'>
                            <h1 className='mb-10 font-medium text-2xl'>Sign up</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="relative">
                                    <input
                                        type='email'
                                        name='email'
                                        id='email'
                                        className={inputClass}
                                        {...register("email")}
                                        placeholder=" "
                                    />
                                    <label htmlFor="email" className={labelClass}>Email</label>
                                </div>
                                <div className="relative">
                                    <input
                                        type='password'
                                        name='password'
                                        id='password'
                                        {...register("password")}
                                        className={inputClass}
                                        placeholder=" "
                                    />
                                    <label htmlFor="password" className={labelClass} >password</label>
                                </div>
                                <div className="relative">
                                    <input
                                        type='password'
                                        id='confirm-password'
                                        {...register("confirmPassword")}
                                        className={inputClass}
                                        placeholder=" "
                                    />
                                    <label htmlFor="confirm-password" className={labelClass}>Confirm password</label>
                                </div>
                                <button
                                    type='submit'
                                    className='font-bold text-white py-3 rounded-full bg-primary w-full disabled:bg-gray-300 disabled:cursor-not-allowed mt-3'
                                    disabled={disabled}
                                >
                                    Sign up
                                </button>
                                <div>
                                <p>
                                   have an account?{" "}
                                    <span
                                        className='text-primary hover:underline cursor-pointer'
                                        onClick={() => navigate("/user/login")}
                                    >
                                        Sign in
                                    </span>
                                </p>
                            </div>
                            <div className='flex mt-3'><div className=' mx-auto'><button className="px-3 py-3   rounded-full border border-gray-800  hover:bg-slate-200 " onClick={()=>dispatch(googleLogin())}>   <FcGoogle /></button></div></div>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default SignUp;