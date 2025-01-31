import React from 'react'
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({ bookmarks, readingTime }) => {
     return (
          <div className='md:w-1/3 '>
               <div className='p-4 m-8 max-w-96 bg-[#6047EC1A] border border-indigo-500 text-center rounded-md'>
                    <h3 className='text-2xl font-bold text-[#6047EC]'>Reading Time: {readingTime} min </h3>
               </div>
               <div className='bg-[#1111110D] rounded-xl max-w-96 m-8 p-4'>
                    <h2 className='p-4 text-2xl font-bold'>Bookmarked Blogs: {bookmarks.length} </h2>
                    {
                         bookmarks.map((bookmark, index) => <Bookmark key={index} bookmark={bookmark}></Bookmark>)
                    }
               </div>
          </div>
     )
}

Bookmarks.propTypes = {
     bookmarks: PropTypes.array,
     readingTime: PropTypes.number
}

export default Bookmarks