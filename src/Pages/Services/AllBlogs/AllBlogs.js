import React, { useEffect, useState } from 'react';
import BlogDetails from './BlogDetails';


const AllBlogs = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allBlogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    console.log(blogs)




    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">All Blogs</h1></div>
            {
                blogs.length === 0 ? <div className='text-center'>
                    <div class="spinner-border m-5" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div> :
                    <div className="row g-4 d-flex my-5 ">
                        {blogs?.map((blog) => (

                            <BlogDetails
                                key={blog.id}
                                data={blog}>

                            </BlogDetails>



                        ))}
                    </div>
            }

        </div>
    );
};

export default AllBlogs;