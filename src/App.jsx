import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])


  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks)
    }

  return (
    <div className='mx-36'>
      <Header></Header>
        <div className='flex'>
          <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
          <Bookmarks bookmarks={bookmarks}></Bookmarks>
        </div>
      
    </div>
  )
}

export default App
