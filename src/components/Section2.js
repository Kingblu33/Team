import React from 'react';
import { Link } from 'react-router-dom';

const Section2 = () => {
    return (
        <div className="w-full flex justify-center">
            <div className="bg-white flex justify-center pt-2 mt-2 max-w-6xl">
                {/* Container for the first two cards */}
                <div className="flex flex-col space-y-4 max-w-6xl w-1/2">
                    {/* Welcome Card */}
                    <a href="#" className="block bg-white border border-gray-200 shadow hover:bg-gray-100">
                        <div className="border-b border-gray-200 p-4">
                            <h5 className="text-lg font-semibold text-gray-900">Welcome to Onboard Connectivity</h5>
                        </div>
                        <div className="p-4">
                            <p className="font-normal text-gray-700">
                                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                                <Link to={"/About"}className="text-blue-500 hover:text-blue-700 transition"> Read more...</Link>
                            </p>
                        </div>
                    </a>


                    {/* Random Card */}
                    <div className="bg-white border border-gray-200  shadow-lg h-[450px] flex flex-col justify-between">
                        <a href="#">
                            <img
                                className="w-full h-[200px] object-cover"
                                src="https://media.istockphoto.com/id/1346944001/photo/close-up-of-co-workers-stacking-their-hands-together.jpg?s=612x612&w=0&k=20&c=lidJcFUSR3rkMt4B0yoNwH55lz3sth9o2280keqBXGE="
                                alt="Collaboration"
                            />
                        </a>
                        <div className="p-4 flex-grow">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                                    Noteworthy technology acquisitions 2021
                                </h5>
                            </a>
                            <p className="mt-2 mb-4 text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae eros sed elit ullamcorper cursus. Sed vel eros at libero volutpat auctor sit amet eget mauris. Proin faucibus, lorem a laoreet consequat, metus lacus condimentum li ipsum ac leo. Sed vel nisl 

                            </p>
                            <a href="#"  className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Read more
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"  d="M1 5h12m0 0L9 1m4 4L9 9"/> 
                                </svg>
                            </a>
                        </div>
                    </div>

                </div>

                {/* Container for the other cards */}
                <div className="flex flex-col space-y-4 max-w-6xl w-1/2 ml-5">
                    {/* Other Card */}
                    <div className="relative overflow-hidden transition h-[355px]"> 
                        <img
                            alt="Furniture Arrangement"
                            src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black opacity-30"></div>
                        <div className="relative pt-25 sm:pt-48 h-full">
                            <div className="p-3 sm:p-6 h-full flex flex-col justify-between">
                                <time dateTime="2022-10-10" className="block text-xs text-white/90">10th Oct 2022</time>
                                <a href="#">
                                    <h3 className="text-lg text-white">LoreIpsum randomloro fagaloro</h3>
                                </a>
                                <p className="mt-1 line-clamp-3 text-sm/relaxed text-white/95">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                                    pariatur animi temporibus nesciunt
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Welcome Card 2 */}
                    <a href="#" className="block bg-white border border-gray-200 shadow hover:bg-gray-100">
                        <div className="border-b border-gray-200">
                            <h5 className="mb-2 px-2 py-1 text-xl tracking-tight text-gray-900">Contacts OSM</h5>
                        </div>
                        <p className="font-normal p-2 text-gray-700">
                            If you need to get in contact with our team, feel free to reach out to
                            <span className="text-blue-400">floop@outback.com</span>
                        </p>
                    </a>

                    {/* Welcome Card 3 */}
                    <a href="#" className="block bg-white border border-gray-200 shadow hover:bg-gray-100">
                        <div className="border-b border-gray-200">
                            <h5 className="mb-2 px-2 py-1 text-xl tracking-tight text-gray-900">Welcome to Onboard Connectivity</h5>
                        </div>
                        <p className="font-normal p-2 text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula, elit at faucibu
                        </p>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Section2;
