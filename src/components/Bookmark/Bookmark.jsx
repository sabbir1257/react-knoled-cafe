import PropTypes from 'prop-types';
import React from 'react';

const Bookmark = ({bookmark}) => {
     const {title } = bookmark;
     return (
          <div className='px-4 py-2'>
               <h3 className='bg-[#FFFFFF] p-4 rounded-md text-lg font-semibold '>{title}</h3>
          </div>
     );
};

Bookmark.propTypes = {
     bookmark: PropTypes.object
}

export default Bookmark;