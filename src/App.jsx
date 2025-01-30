import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks , setBookmarks] = useState([]);
  
  const handleAddToBookmark = blog => {
    console.log('bookmark adding soon');
    
  }

  return (
    <div className='container mx-auto '>
      <Header />
      <div className='md:flex '>
        <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}  

export default App


