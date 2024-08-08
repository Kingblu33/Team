import React from 'react';

const Section2 = () => {
    return (
        <div className='w-full overflow-hidden bg-white flex justify-center p-4 mt-2'>
            {/* Container for the first two cards */}
            <div className='flex flex-col space-y-4 max-w-sm'>
                {/* Welcome Card */}
                <a href="#" className="block p-6 bg-white border border-gray-200 shadow hover:bg-gray-100">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Welcome to Onboard Connectivity</h5>
                    <p className="font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a>

                {/* Random Card */}
                <div className="bg-white border border-gray-200  shadow h-[450px]"> {/* Fixed height */}
                    <a href="#">
                        <img className=" w-full h-1/2 object-cover" src="https://media.istockphoto.com/id/1346944001/photo/close-up-of-co-workers-stacking-their-hands-together.jpg?s=612x612&w=0&k=20&c=lidJcFUSR3rkMt4B0yoNwH55lz3sth9o2280keqBXGE=" alt="Collaboration" />
                    </a>
                    <div className="p-5 h-[calc(100%-2.5rem)]"> {/* Adjust height to fill remaining space */}
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
                <div className="relative overflow-hidden  transition h-[400px]"> {/* Fixed height */}
                    <img
                        alt="Furniture Arrangement"
                        src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                        className="absolute inset-0 w-full h-full object-cover opacity-"
                    />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                    <div className="relative pt-32 sm:pt-48 lg:pt-64 h-full">
                        <div className="p-4 sm:p-6 h-full flex flex-col justify-between">
                            <time dateTime="2022-10-10" className="block text-xs text-white/90">10th Oct 2022</time>
                            <a href="#">
                                <h3 className="mt-0.5 text-lg text-white">How to position your furniture for positivity</h3>
                            </a>
                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                                quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                                atque dignissimos. Molestias explicabo corporis voluptatem?
                            </p>
                        </div>
                    </div>
                </div>

                {/* Welcome Card 2 */}
                <a href="#" className="block p-3 bg-white border border-gray-200 shadow hover:bg-gray-100">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Welcome to Onboard Connectivity</h5>
                    <p className="font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a>

                {/* Welcome Card 3 */}
                <a href="#" className="block p-3 bg-white border border-gray-200 shadow hover:bg-gray-100">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Welcome to Onboard Connectivity</h5>
                    <p className="font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                </a>
            </div>
        </div>
    );
};

export default Section2;
