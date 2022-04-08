import React from "react";
import Whisper from "../images/whispering.png";
import Field from "../images/field.jpg";
import PropType from "prop-types";

const List = ({ name, type, date, kcal, desc, dura}) => {
    return (
        <div className="w-full px-8 col-span-3 py-6 mt-4 text-left rounded-xl bg-gradient-to-br from-black via-black to-slate-700" >
                    
                    <div className="max-w-sm w-full lg:max-w-full lg:flex">
                        <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" >
                            <img src={Whisper}/>
                        </div>

                        <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                            
                            <div className="text-gray-900 font-bold text-base mb-1">{name}</div>
                            
                            <div className="mb-1">
                                <div className="grid grid-cols-3 text-sm text-gray-600 items-center ">
                                    <div>
                                        {type}
                                    </div>
                                    <div>
                                        {date}
                                    </div>
                                    <div className="text-gray-600">{kcal} kcal</div>
                                </div>

                                <div className="text-sm">
                                    <div className="text-gray-900 leading-none"> {dura} </div>
                                        
                                    <div className="text-gray-700 text-base">Description: {desc}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    );
}

List.propTypes = {
    name: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    date: PropTypes.date.isRequired,
    kcal: PropType.number.isRequired,
    dura: PropType.number.isRequired,
    desc: PropType.string.isRequired
}

export default List; 