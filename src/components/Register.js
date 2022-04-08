import React from "react";

const Register = () => {
    return (
            <div className="flex items-center justify-center min-h-screen bg-[#ffd904]">
                <div className="px-8 py-6 mx-4 mt-4 text-left rounded-xl text-white bg-gradient-to-br from-black via-black to-slate-700 shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
                    <h3 className="text-2xl font-bold text-center">Join us</h3>
                    <form action="">
                        <div className="mt-4">
                            <div>
                                <label className="block" for="Name">Name</label>
                                    <input type="text" placeholder="Name"
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white duration-300" />
                            </div>
                            <div className="mt-4">
                                <label className="block" for="email">Email</label>
                                        <input type="text" placeholder="Email"
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white duration-300" />
                            </div>
                            <div className="mt-4">
                                <label className="block">Password</label>
                                        <input type="password" placeholder="Password"
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white duration-300" />
                            </div>
                            <div className="mt-4">
                                <label className="block">Confirm Password</label>
                                        <input type="password" placeholder="Password"
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:bg-white duration-300" />
                            </div>
                            <span className="text-xs text-red-400">Password must be same!</span>
                            <div className="flex">
                                <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Create
                                    Account</button>
                            </div>
                            <div className="mt-6 text-grey-dark">
                                Already have an account?
                                <a className="text-blue-600 hover:underline" href="#">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
    );
}

export default Register;