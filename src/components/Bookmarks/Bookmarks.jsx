import React from 'react'
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks}) => {
     return (
          <div className='md:w-1/3 bg-[#1111110D] rounded-xl max-w-96 m-8 p-4'>
               <h2 className='p-4 text-2xl font-bold'>Bookmarked Blogs: {bookmarks.length} </h2>
               {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
               }
          </div>
     )
}

Bookmarks.propTypes = {
     bookmarks: PropTypes.array
}

export default Bookmarks