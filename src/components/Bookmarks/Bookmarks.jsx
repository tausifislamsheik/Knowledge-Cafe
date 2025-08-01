import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className='ml-5 w-1/3'>
            <p className='text-center text-xl font-bold p-5 rounded-lg mb-4 text-[#6047EC] bg-gray-100 border-2 border-[#6047EC]'>Spent time on read : {readingTime}</p>
            <div className='bg-gray-100 p-5 rounded-lg '>
                <h1 className='text-center font-bold text-xl'>Bookmarked Blogs: {bookmarks.length}</h1>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks:PropTypes.object.isRequired
}

export default Bookmarks;