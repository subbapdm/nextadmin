'use client'

import { useState } from "react";


const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
    });

    const [loading, setLoading] = useState(false);

    return (
        <div className='w-full flex items-center justify-center h-screen'>
            <div className='w-w-5/6 lg:w-2/5 xl:w-1/6 p-3 lg:p-5'>
                <div className="text-center mb-4">
                    <h1 className="font-bold text-xl text-gray-700">Sign Up</h1>
                    <p className="text-gray-400 text-sm my-2">Create an account.</p>
                </div>
                <div className='bg-white rounded-lg p-5'>
                <form>
                    <div className='mb-4'>
                        <label className='block text-gray-500 mb-2'>Full Name</label>
                        <input
                            type='text'
                            value={formData.name}
                            placeholder='Full Name'
                            onChange={(e) => setFormData({ ...formData, name: e.target.value})}
                            className="w-full border border-slate-200 focus:outline-cyan-400 placeholder:text-gray-400 focus:placeholder:text-transparent py-3 px-3 rounded"
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-500 mb-2'>Email Address</label>
                        <input
                            type='email'
                            value={formData.email}
                            placeholder='Email address'
                            onChange={(e) => setFormData({ ...formData, email: e.target.value})}
                            className="w-full border border-slate-200 focus:outline-cyan-400 placeholder:text-gray-400 focus:placeholder:text-transparent py-3 px-3 rounded"
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-500 mb-2'>Password</label>
                        <input
                            type='password'
                            value={formData.password}
                            placeholder='Enter password'
                            onChange={(e) => setFormData({ ...formData, password: e.target.value})}
                            className="w-full border border-slate-200 focus:outline-cyan-400 placeholder:text-gray-400 focus:placeholder:text-transparent py-3 px-3 rounded"
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-500 mb-2'>Confirm Password</label>
                        <input
                            type='password'
                            value={formData.confirm_password}
                            placeholder='Confirm password'
                            onChange={(e) => setFormData({ ...formData, confirm_password: e.target.value})}
                            className="w-full border border-slate-200 focus:outline-cyan-400 placeholder:text-gray-400 focus:placeholder:text-transparent py-3 px-3 rounded"
                        />
                    </div>

                    <div className="mt-4">
                        <button type="submit" className="bg-cyan-500 text-white px-4 py-3 rounded-md hover:bg-cyan-400 mt-3 w-full font-semibold text-sm">
                            {loading ? 'Loading' : 'Sign In'}
                        </button>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}

export default Register;