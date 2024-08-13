import React, { useState } from 'react';
import { FaRegEnvelope } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";

const AboutSection = () => {
    const tabs = ["Owners & managers", "Members", "Followers"];
    const [active, setActive] = useState(tabs[0]);

    const members = {
        "Owners & managers": [
            {
                name: "Steve Allen",
                title: "Software Engineer",
                location: "North Dakota",
                src: "https://randomuser.me/api/portraits/men/75.jpg"
            },
            {
                name: "Alice Johnson",
                title: "Product Manager",
                location: "San Francisco",
                src: "https://randomuser.me/api/portraits/women/80.jpg"
            },
            {
                name: "Bob Smith",
                title: "UX Designer",
                location: "New York",
                src: "https://randomuser.me/api/portraits/men/85.jpg"
            }
        ],
        "Members": [
            {
                name: "Emily Davis",
                title: "Data Scientist",
                location: "Chicago",
                src: "https://randomuser.me/api/portraits/women/70.jpg"
            },
            {
                name: "John Doe",
                title: "Web Developer",
                location: "Austin",
                src: "https://randomuser.me/api/portraits/men/95.jpg"
            },
            {
                name: "Sarah Lee",
                title: "Marketing Specialist",
                location: "Seattle",
                src: "https://randomuser.me/api/portraits/women/85.jpg"
            },
            {
                name: "Michael Brown",
                title: "Graphic Designer",
                location: "Denver",
                src: "https://randomuser.me/api/portraits/men/90.jpg" // Updated image
            }
        ],
        "Followers": [
            {
                name: "Linda Green",
                title: "Financial Analyst",
                location: "San Diego",
                src: "https://randomuser.me/api/portraits/women/95.jpg" // Updated image
            },
            {
                name: "David Wilson",
                title: "Content Writer",
                location: "Portland",
                src: "https://randomuser.me/api/portraits/men/70.jpg" // Updated image
            },
            {
                name: "Sophia Martinez",
                title: "Sales Manager",
                location: "Las Vegas",
                src: "https://randomuser.me/api/portraits/women/30.jpg" // Updated image
            },
            {
                name: "James Taylor",
                title: "Operations Manager",
                location: "Miami",
                src: "https://randomuser.me/api/portraits/men/20.jpg" // Updated image
            },
            {
                name: "Olivia Anderson",
                title: "Customer Support",
                location: "Orlando",
                src: "https://randomuser.me/api/portraits/women/10.jpg" // Updated image
            },
            {
                name: "Blivard Custowardo",
                title: "Customer Support",
                location: "Orlando",
                src: "https://randomuser.me/api/portraits/women/5.jpg" // Updated image
            }
        ]
    };


    return (
        <div className='w-full max-w-6xl mx-auto mt-2 border border-gray-200'>
            <div className='w-full'>
                <h3 className='mb-1 pt-5 pl-5'>About</h3>
                <hr className='border-t mx-5 w-[90%] border-gray-300' />
                <p className='mt-2 mx-5 mb-5 text-gray-600'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className='relative'>
                    <div className='flex mx-5'>
                        {tabs.map((tab, index) => (
                            <p
                                key={index}
                                onClick={() => setActive(tab)}
                                className={`text-gray-700 cursor-pointer px-4 pb-2 ${active === tab ? 'border-b-2 border-blue-500' : ''}`}
                            >
                                {tab} ({members[tab].length})
                            </p>
                        ))}
                    </div>
                    <hr className='absolute bottom-0 left-0 border-t border-gray-300 w-[90%] mx-5' />
                </div>
                <div className='mt-2'>
                    {members[active].map((member, index) => (
                        <div key={index} className='py-4 px-5'>
                            <div className='flex items-center'>
                                <img
                                    src={member.src}
                                    alt={member.name}
                                    className='w-16 h-16 rounded-full object-cover mr-4'
                                />
                                <div className='flex-1'>
                                    <p className='text-md font-semibold'>{member.name}</p>
                                    <p className='text-sm text-gray-600'>{member.title}</p>
                                    <p className='text-sm text-gray-500'>loreipsum - ipsum minute big fathuasnka</p>
                                    <p className='text-sm text-gray-500'>{member.location}</p>
                                </div>
                                <div className='flex items-center ml-4'>
                                    <FaRegEnvelope className='text-gray-600 mr-2 h-5 w-5' />
                                    <IoPhonePortraitOutline className='text-gray-700 mr-2 h-5 w-5' />
                                    <button className='bg-blue-500 text-white px-6 py-1 rounded hover:bg-blue-600'>
                                        Follow
                                    </button>
                                </div>
                            </div>
                            <hr className='mt-4 border-t border-gray-300 w-[90%]' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    

};

export default AboutSection;
