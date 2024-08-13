import React from 'react';

const Section2 = () => {
    return (
        <div className="w-full max-w-6xl flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
        <div className='w-full overflow-hidden bg-white flex justify-center p-4 mt-2'>
            {/* Container for the first two cards */}
            <div className='flex flex-col space-y-4 max-w-sm'>
                {/* Welcome Card */}
                <a href="#" className="block bg-white border border-gray-200 shadow hover:bg-gray-100">
                    <div className='border-b border-gray-200'>
                        <h5 className="mb-2 px-2 py-1 text-xl tracking-tight text-gray-900">Welcome to Onboard Connectivity</h5>
                    </div>
                    <p className="font-normal p-3 text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. <span className='text-blue-200'>Read more...</span></p>
                </a>

                {/* Random Card */}
                <div className="bg-white border border-gray-200 shadow h-[450px]"> {/* Fixed height */}
                    <a href="#">
                        <img className="w-full h-1/2 object-cover" src="https://media.istockphoto.com/id/1346944001/photo/close-up-of-co-workers-stacking-their-hands-together.jpg?s=612x612&w=0&k=20&c=lidJcFUSR3rkMt4B0yoNwH55lz3sth9o2280keqBXGE=" alt="Collaboration" />
                    </a>
                    <div className="p-2 h-[calc(100%-2.5rem)]"> {/* Adjust height to fill remaining space */}
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Container for the other cards */}
            <div className="flex flex-col space-y-4 max-w-[492px] ml-5">
                {/* Other Card with adjusted height */}
                <div className="relative overflow-hidden transition h-[355px]"> {/* Fixed height */}
                    <img
                        alt="Furniture Arrangement"
                        src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                        className="absolute inset-0 w-full h-full object-cover opacity-"
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="relative pt-25 sm:pt-48  h-full">
                        <div className="p-3 sm:p-6 h-full flex flex-col justify-between">
                            <time dateTime="2022-10-10" className="block text-xs text-white/90">10th Oct 2022</time>
                            <a href="#">
                                <h3 className=" text-lg text-white">LoreIpsum randomloro fagaloro</h3>
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
                    <div className='border-b border-gray-200'>
                        <h5 className="mb-2 px-2 py-1 text-xl tracking-tight text-gray-900">Contacts OSM</h5>
                    </div>
                    <p className="font-normal p-2 text-gray-700">If you need to get in contact with our team, feel free to reach out to <email className="text-blue-400">floop@outback.com</email></p>
                </a>

                {/* Welcome Card 3 */}
                <a href="#" className="block bg-white border border-gray-200 shadow hover:bg-gray-100">
                    <div className='border-b border-gray-200'>
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
