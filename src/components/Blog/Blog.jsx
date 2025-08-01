import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog, handleAddToBookmark}) => {
    const {cover, author_img, author, title, posted_date, reading_time, hashtags} =blog
    return (
        <div className='space-y-4 mb-5'>
            <img className='w-full rounded-xl' src={cover} alt="" />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-12 mr-2' src={author_img} alt="" />
                    <div>
                        <p className='font-semibold'>{author}</p>
                        <p className='text-gray-500 text-sm'>{posted_date}</p>
                    </div>
                </div>
                <div className='text-gray-500 flex items-center gap-1'>
                    <p>{reading_time} min read </p>
                    <button onClick={() =>handleAddToBookmark(blog)} className='cursor-pointer text-lg hover:text-red-700'><FaRegBookmark /></button>
                </div>
            </div>
            <h1 className='text-3xl font-bold'>{title}</h1>
            <p>
                {
                    hashtags.map(hash => <span> <a className='text-gray-500' href=''>#{hash}</a></span>)
                }
            </p>
            <button className='text-purple-700 underline cursor-pointer font-semibold'>Mark as Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired
}

export default Blog;