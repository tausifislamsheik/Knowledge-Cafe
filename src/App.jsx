import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  

  return (
    <div className='mx-36'>
      <Header></Header>
        <div className='flex'>
          <Blogs></Blogs>
          <Bookmarks></Bookmarks>
        </div>
      
    </div>
  )
}

export default App
