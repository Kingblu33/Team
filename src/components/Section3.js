import React from 'react';
import { FaFile } from 'react-icons/fa';

const Section3 = () => {
    const employees = [
        {
            name: "Bonnie Green",
            role: "CEO/Co-founder",
            src: "https://sb.kaleidousercontent.com/67418/1920x1282/7978bca0ba/christina-wocintechchat-com-50tkcap8m3a-unsplash.jpg"
        },
        {
            name: "Helene Engels",
            role: "CTO/Co-founder",
            src: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
        },
        {
            name: "Michael Gough",
            role: "React Developer",
            src: "https://preview.redd.it/new-profile-pictures-for-yall-v0-brdjms2xte3c1.jpg?width=640&crop=smart&auto=webp&s=a785e9ec16789276c74b19398f4f41b471f672f8"
        },
        {
            name: "Neil Sims",
            role: "Vue.js Developer",
            src: "https://shotkit.com/wp-content/uploads/2021/06/cool-profile-pic-matheus-ferrero.jpeg"
        },
        {
            name: "Michael Gough",
            role: "React Developer",
            src: "https://sb.kaleidousercontent.com/67418/1920x1281/0e9f02a048/christian-buehner-ditylc26zvi-unsplash.jpg"
        },
        {
            name: "Michael Gough",
            role: "React Developer",
            src: "https://miro.medium.com/v2/resize:fit:1400/0*0fClPmIScV5pTLoE.jpg"
        },
        {
            name: "Neil Sims",
            role: "Vue.js Developer",
            src: "https://assets.vogue.com/photos/5fb52f5b71ab829af01992b9/1:1/w_2400,h_2400,c_limit/The-Queens-Gambit-vogue-171120-courtesy-Netflix-4.jpg"
        }
    ];

    const documents = [
        {
            title: "Doc 1",
            author: "John Doe",
            date: "August 9, 2024",
            link: "#"
        },
        {
            title: "Doc 2",
            author: "Jane Smith",
            date: "August 8, 2024",
            link: "#"
        },
        {
            title: "Doc 3",
            author: "Ali Johnson",
            date: "August 7, 2024",
            link: "#"
        },
        {
            title: "Doc 4",
            author: "Bob Brown",
            date: "August 6, 2024",
            link: "#"
        },
        {
            title: "Doc 5",
            author: "Emily Clark",
            date: "August 5, 2024",
            link: "#"
        },
        {
            title: "Doc 6",
            author: "Mike Harris",
            date: "August 4, 2024",
            link: "#"
        },
        {
            title: "Doc 7",
            author: "Sophia Lewis",
            date: "August 3, 2024",
            link: "#"
        },
        {
            title: "Doc 8",
            author: "Dan Wilson",
            date: "August 2, 2024",
            link: "#"
        }
    ];
    

    return (
        <div className="w-full overflow-hidden bg-white flex justify-center mt-6">
            <div className="w-full max-w-6xl flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
                <div className="w-[1100px]">
                    <section className="bg-white border h-[130px] border-gray-200 shadow">
                        <div className="border-b border-gray-300">
                            <h3 className="text-black pb-2 pl-2 pt-2">Onboard Connectivity Contacts</h3>
                        </div>
                        <div className="grid gap-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 p-2">
                            {employees.map((employee, index) => (
                                <div key={index} className="flex justify-center items-center">
                                    <img 
                                        className="w-16 h-16 mb-2 object-cover rounded-full" 
                                        src={employee.src} 
                                        alt={`${employee.name} Avatar`} 
                                    />
                                </div>
                            ))}
                        </div>
                    </section>
                </div>

                <div className="w-full">
                    <section className="bg-white border border-gray-200 shadow">
                        <div className='border-b border-gray-300'>
                            <h3 className="text-gray-900 font-bold mb-1 pl-4">Recent Confluence Documentation</h3>
                        </div>
                        <ul className="list-none list-inside text-left text-gray-700 pl-4">
                            {documents.map((doc, index) => (
                                <li key={index} className="flex items-center mt-2 mb-3">
                                <FaFile className="w-5 h-5 text-gray-500 mr-2" />
                                <a href={doc.link} className="text-gray-900 mr-2">{doc.title}</a>
                                <br />
                                <span className="text-blue-900 text-sm">Written by: <span className="text-blue-400">{doc.author}</span> on <span className="text-gray-600">{doc.date}</span></span>
                            </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Section3;
