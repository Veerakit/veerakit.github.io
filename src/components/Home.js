import React from "react";
import Solid from "../images/itracksolid.png";

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#ffd904]">
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <div className="grid grid-cols-2 gap-1">
                    <div className="flex flex-col justify-center items-end">

                    <h1 className="text-4xl sm:text-7xl font-bold text-[#000000] col-span-2">
                        NEVER LOSE
                        <h2 className="text-4xl sm:text-7xl font-bold text-[#ffffff]">
                            YOUR TRACK
                        </h2>
                        <p className="text-[#000000] text-xs py-4">
                            iTrack allows you to track your daily activities especially "Exercise one".
                        </p>
                    </h1>
                    </div>
                    <div className="flex flex-col justify-center items-center my-8">
                        <img src={Solid} alt="itrack logo" />
                    </div>
                </div>
                
                <div className="flex cols-2 justify-center">
                    <button className="text-[#d1d5e0] bg-[#000000] rounded-xl w-[100px] mx-2 py-4" >Register</button>
                    <button className="text-[#d1d5e0] bg-[#000000] rounded-xl w-[100px] mx-2 py-4" >Login</button>
                </div>
            </div>
        </div>
    );
}

export default Home;