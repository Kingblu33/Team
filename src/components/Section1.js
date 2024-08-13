import React from 'react';
import { FaShareAlt } from 'react-icons/fa';
import { AiOutlineCalendar } from 'react-icons/ai';

const slideData = [
  {
    imgSrc: 'https://wallpapers.com/images/hd/4k-tech-iem3cz7lcor3th85.jpg',
    title: 'The Future of AI: What’s Next?',
    date: 'August 7, 2024',
    excerpt: 'Artificial intelligence continues to evolve rapidly. In this post, we explore what the future holds for AI and its implications for various industries.',
  },
  {
    imgSrc: 'https://www.emnify.com/hubfs/iStock-1146449449%20%28small%29.jpg',
    title: 'Tech Trends to Watch in 2024',
    date: 'July 15, 2024',
    excerpt: 'Stay ahead of the curve with our roundup of the most exciting tech trends to watch out for this year.',
  },
  {
    imgSrc: 'https://www.geotab.com/CMS-Media-production/Blog/NA/2023/January/Smart-Trailers/mobile/smart-trailer-blog-image-1017055903-EN-NA-Final-Jan23-hero.jpg',
    title: 'How 5G is Transforming Connectivity',
    date: 'June 22, 2024',
    excerpt: '5G technology is set to revolutionize the way we connect to the world.',
  },
];

const Section1 = () => (
  <div className="w-full overflow-hidden bg-white flex justify-center p-0 mt-6">
    <div className="w-full max-w-4xl flex space-x-3">
      {slideData.map((post, index) => {
        let widthClass = 'flex-1'; // Default width for slides
        if (index === 0) {
          widthClass = 'flex-[2]'; // Wider slide for the first item
        }

        return (
          <div key={index} className={`flex ${widthClass}`}>
            <div className="bg-white text-black border border-gray-200 shadow-md h-full flex flex-col">
              <a href="#" className="block flex-grow">
                <img
                  className="w-full h-60 object-cover"
                  src={post.imgSrc}
                  alt={`Post image for ${post.title}`}
                />
              </a>
              <div className="p-4 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    <a href="#" className="hover:text-gray-600">{post.title}</a>
                  </h3>
                  <div className="flex items-center text-gray-500 mb-2">
                    <AiOutlineCalendar className="mr-1" />
                    <span className="text-sm">{post.date}</span>
                  </div>
                </div>
                <p className="flex-grow mt-2 mb-4 text-gray-600 text-sm">
                  {post.excerpt}
                </p>
                <div className="flex-shrink-0 mt-auto flex space-x-4 text-gray-500">
                  <button className="flex items-center hover:text-gray-900">
                    <FaShareAlt className="h-5 w-5" />
                    <span className="ml-2 text-sm">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Section1;
