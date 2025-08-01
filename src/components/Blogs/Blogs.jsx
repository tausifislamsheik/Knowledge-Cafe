import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() =>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    })
    return (
        <div className='md:w-2/3'>
            {
                blogs.map((blog, idx) => <Blog key={idx} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    blogs:PropTypes.object.isRequired
}

export default Blogs;