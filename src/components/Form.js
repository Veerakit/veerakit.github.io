import React, {useState} from "react";
import {} from "react-icons/";
import PropTypes from "prop-types";

const Form = ({ addList }) => {
    const [records, setRecords] = useState=('');

    function onChange(event) {
        setRecords(event.target.value);
    };

    return (
        
        <div name="form" className="w-full h-auto bg-[#ffd904]">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-5" >

                <form className="w-full px-8 col-span-2 py-6 mt-4 text-left rounded-xl bg-gradient-to-br from-black via-black to-slate-700" >
                    <div className="flex flex-wrap -mx-3 mb-4">

                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
                            Activity name
                        </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" placeholder="Walking to the moon etc." value={records} onChange={onChange} />
                        <p className="text-gray-600 text-xs italic">Name it so you can remember it</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                                Date
                            </label>
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="date" />
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-state">
                                TYPE
                            </label>
                        <div className="relative">
                            <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" >
                                <option>Walking</option>
                                <option>Running</option>
                                <option>Swimming</option>
                                <option>Hiking</option>
                                <option>Training</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-city">
                                Duration
                            </label>
                            <div className="">
                            <input className="rounded mb-2 md:w-1/3 md:mb-0 appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-l py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="duration" type="number" />
                            <input className="rounded mb-2 md:w-1/3 md:mb-0 appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200  py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="duration" type="number" />
                            <input className="rounded mb-2 md:w-1/3 md:mb-0 appearance-none w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-r py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="duration" type="number" />
                        </div>
                        </div>

                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-state">
                                Kcal
                            </label>
                        <div >
                            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="number" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="mb-3 w-full">
                        <label className="form-label inline-block mb-2 text-white"
                        >Description
                        </label>
                        <textarea className="bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 form-control block w-full text-base font-normal bg-clip-padding transition ease-in-out m-0 focus:text-gray-700 " rows="5"
                            placeholder="Descripe in details more"
                            >
                        </textarea>
                    </div>
                </div>
                <button type="button" 
                    class="sm:w-3/5 md:w-3/5 md:mb-0 w-full text-gray-900 
                    hover:text-white border 
                    border-gray-800 
                    hover:bg-gray-900 
                    focus:ring-4 
                    focus:outline-none 
                    focus:ring-gray-300 
                    font-medium rounded-lg 
                    text-sm px-5 py-2.5 
                    text-center mr-2 mb-2 
                    dark:border-gray-600 
                    dark:text-gray-400 
                    dark:hover:text-white 
                    dark:hover:bg-gray-600 
                    dark:focus:ring-gray-800"
                    >
                    Submit
                </button>
                    <button type="button" 
                    class="text-gray-900
                    md:w-1/6 md:mb-0 
                    hover:text-white border 
                    border-gray-800 
                    hover:bg-red-500 
                    focus:ring-4 
                    focus:outline-none 
                    focus:ring-gray-300 
                    font-medium rounded-lg 
                    text-sm px-5 py-2.5 
                    text-center mr-2 mb-2 
                    dark:border-gray-600 
                    dark:text-gray-400 
                    dark:hover:text-white 
                    dark:hover:bg-red-500 
                    dark:focus:ring-gray-800"
                    >  
                        trash
                    </button>
                </form>
            </div>
        </div>
    </div>
    );
}

Form.propTypes = {
    addList: PropTypes.func.isRequired
};


export default Form;