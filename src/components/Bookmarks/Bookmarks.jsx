import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className='bg-gray-100 ml-5 p-5 rounded-xl w-1/3'>
            <h1 className='text-center font-bold text-xl'>Bookmarked Blogs:{bookmarks.length}</h1>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks:PropTypes.object.isRequired
}

export default Bookmarks;