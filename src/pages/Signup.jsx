import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signup = () => {
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')
    // eslint-disable-next-line no-unused-vars
    const {user, signUp} = UserAuth ()
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault ()
        try {
            await signUp (email, password)
            navigate ('/')
        } 
        catch (error) {
            console.log (error)
        }

    };

  return (
    <>
    <div className='w-full h-screen'>
        <img className='absolute object-cover w-full h-full hideen sm:block' src="https://assets.nflxext.com/ffe/siteui/vlv3/d54727b4-2ad9-4e71-bb48-0899f55f103a/231fe309-d117-409a-afc9-c2249d51a97a/US-en-20230220-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
        <div className='fixed top-0 left-0 w-full h-screen bg-black/60'></div>
        <div className='fixed z-50 w-full px-4 py-24'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-4xl font-bold'>Sign Up</h1>
                    <form onSubmit={handleSubmit} className='flex flex-col w-full py-4'>
                        <input onChange ={(e) => setEmail(e.target.value)} className='p-3 my-3 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email'/>
                        <input onChange ={(e) => setPassword(e.target.value)} className='p-3 my-3 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password'/>
                        <button className='py-3 my-6 font-bold bg-red-600 rounded'>Sign Up</button>
                        <div className='flex items-center justify-between text-sm'>
                            <p><input className='mr-2' type="checkbox" />Remember Me</p>
                            <p>Need Help?</p>
                        </div>
                        <p className='py-8'> 
                        <span className='text-gray-600'>
                             Already subscribed to Netflix?
                        </span>{' '}
                        <Link to='/login'>Sign In</Link></p>
                    </form>

                </div>
            </div>

        </div>
    </div>
    </>
    )
}


export default Signup