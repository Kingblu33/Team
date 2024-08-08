import React from 'react';
import { SlSocialYoutube } from 'react-icons/sl';
import { TiSocialLinkedin } from 'react-icons/ti';

const slideData = [
  {
    imgSrc: 'https://plus.unsplash.com/premium_photo-1676479610722-1f855a4f0cac?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvZyUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
    title: 'Bonnie Green',
    subtitle: 'CEO & Web Developer',
    description: 'Bonnie drives the technical strategy of the flowbite platform and brand.',
  },
  {
    imgSrc: 'https://st3.depositphotos.com/11516992/37676/i/450/depositphotos_376761166-stock-photo-cute-young-american-bully-puppy.jpg',
    title: 'Jese Leos',
    subtitle: 'CTO',
    description: 'Jese drives the technical strategy of the flowbite platform and brand.',
  },
  {
    imgSrc: 'https://media.istockphoto.com/id/1311467082/photo/head-shot-profile-of-a-young-puppy-beagles-dog-isolated.jpg?s=612x612&w=0&k=20&c=YBKJiNVXLBHYRQ6K33Og3hYKJi2GZYImmp6L1Q3yflc=',
    title: 'Top SKii',
    subtitle: 'CEO & Web Developer',
    description: 'Top SKii drives the technical strategy of the flowbite platform and brand.',
  },
];

const Section1 = () => (
  <div className="w-full overflow-hidden bg-white flex justify-center p-0 mt-6">
    <div className="flex w-full max-w-4xl">
      {slideData.map((slide, index) => {
        let widthClass = 'flex-1 ml-3'; //
        if (index === 0) {
          widthClass = 'flex-[2]'; 
        }

        return (
          <div key={index} className={`flex-1 ${widthClass} `}>
            <div className="bg-white text-black border  border-gray-200 shadow-md h-full flex flex-col m-0">
              <a href="#" className="block flex-grow">
                <img
                  className="w-full h-60 object-cover"
                  src={slide.imgSrc}
                  alt={`${slide.title} Avatar`}
                />
              </a>
              <div className="p-4 flex flex-col flex-grow">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    <a href="#" className="hover:text-gray-600">{slide.title}</a>
                  </h3>
                  <span className="text-gray-600 text-sm">{slide.subtitle}</span>
                </div>
                <p className="mt-2 mb-4 text-gray-600 text-sm">
                  {slide.description}
                </p>
                <ul className="flex space-x-4 text-gray-500">
                  <li><SlSocialYoutube /></li>
                  <li><TiSocialLinkedin /></li>
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Section1;
