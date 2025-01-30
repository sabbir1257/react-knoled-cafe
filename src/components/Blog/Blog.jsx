import React from 'react';
import PropTypes from 'prop-types';
import { CiBookmark } from 'react-icons/ci';

const Blog = ({ blog, handleAddToBookmark }) => {
     const { title, cover, reading_time, author_img, author, posted_date, hashtags } = blog;

     return (
          <div className='mb-20'>
               <img className='w-full mb-8 rounded-lg' src={cover} alt={`Cover picture of the title ${title}`} />
               <div className='flex justify-between mb-4'>
                    <div className='flex '>
                         <img className='w-14' src={author_img} alt="" />
                         <div className='ml-6'>
                              <h3 className='text-2xl'>{author}</h3>
                              <p>{posted_date}</p>
                         </div>
                    </div>
                    <div className='flex items-center'>
                         <span>{reading_time} min read</span>
                         <button
                              className='w-6 ml-2'
                              onClick={() => handleAddToBookmark(blog)}
                         ><CiBookmark /></button>
                    </div>
               </div>
               <h2 className="mb-3 text-4xl">{title}</h2>
               <p>
                    {
                         hashtags.map((hash, index) => <span key={index}><a href="">#{hash}</a></span>)
                    }
               </p>

          </div>
     );
};

Blog.PropTypes = {
     blog: PropTypes.object.isRequired,
     handleAddToBookmark :PropTypes.func
}

export default Blog;