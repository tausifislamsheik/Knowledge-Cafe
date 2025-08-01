import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingTime, setReadingTime] = useState(0);


  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks)
    }

  const handleAddToReadTime = (id, time ) =>{
    setReadingTime(readingTime + time);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks);
  }

  return (
    <div className='mx-36'>
      <Header></Header>
        <div className='flex'>
          <Blogs handleAddToBookmark={handleAddToBookmark} handleAddToReadTime={handleAddToReadTime}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
        </div>
      
    </div>
  )
}

export default App
