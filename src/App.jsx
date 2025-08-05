import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const [isDark, setDark] = useState(false);


  const handleAddToBookmark = blog =>{
    const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks)
    }

  const handleAddToReadTime = (id, time ) =>{
    setReadingTime(readingTime + time);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id)
    setBookmarks(remainingBookmarks);
  }

  const toggleTheme = () =>{
     setDark(!isDark);
  }

  return (
    <div className={isDark ? 'dark' : ''}>
         <div className='bg-primary-color dark:bg-primary-dark-color dark:text-white'>
        <div className='mx-8 lg:mx-36 pb-28'>
          <Header toggleTheme={toggleTheme}></Header>
          <div className='lg:flex pt-10'>
            <Blogs handleAddToBookmark={handleAddToBookmark} handleAddToReadTime={handleAddToReadTime}></Blogs>
            <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
          </div>
        </div>
    </div>
    </div>
  )
}

export default App
