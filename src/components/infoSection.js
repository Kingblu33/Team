import React from 'react';
import { CiStar } from "react-icons/ci";
import { MdStarOutline } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const InfoSection = () => {
    return (
        <div className="w-full overflow-hidden bg-white flex justify-center min-h-max pt-10"> 
        <div className="flex flex-col items-center w-full max-w-4xl border border-gray-9">
            <img 
                src="https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148874050.jpg" 
                alt="User Cover"
                className="w-full h-40 object-cover" 
            />
            
            <div className="flex items-start -mt-16 w-[94%] mx-auto">
                <img 
                    src="https://static.vecteezy.com/system/resources/thumbnails/020/911/740/small/user-profile-icon-profile-avatar-user-icon-male-icon-face-icon-profile-icon-free-png.png" 
                    alt="User Profile" 
                    className="lg:w-28 lg:h-26 outline outline-1 outline-gray-20 bg-white mb-2" 
                />
                <div className="flex flex-col ml-4 w-full">
                    <div className="flex justify-between items-center w-full">
                        <div className="flex flex-col">
                            <h2 className="text-white text-xl font-normal font-Roboto">Onboard Connectivity</h2>
                            <h3 className="text-white font-Roboto font-normal">OSM</h3>
                        </div>
                        <div className="flex items-center space-x-3">
                            {/* <CiStar className='h-5 w-6 text-white' /> */}
                            <MdStarOutline className='h-7 w-7 font-normal text-white'  />
                            <button className="bg-blue-600 text-white px-3 py-2 flex justify-between items-center hover:bg-blue-700">Follow 
                                <RiArrowDropDownLine className='w-6 h-6 ml-5'/>
                            </button>
                        </div>
                    </div>
                    <div className="mt-6 items-center flex text-sm space-x-4">
                        <a href="/" className="text-gray-600 hover:text-black font-Roboto">Dashboard</a>
                        <a href="/" className="text-gray-600 hover:text-black font-Roboto">Feed</a>
                        <a href="/" className="text-gray-600 hover:text-black font-Roboto">Content</a>
                        <a href="/" className="text-gray-600 hover:text-black font-Roboto">Files</a>
                        <a href="/" className="text-gray-600 hover:text-black font-Roboto">About</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default InfoSection;
