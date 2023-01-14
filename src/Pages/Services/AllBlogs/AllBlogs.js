import React, { useEffect, useState } from 'react';
import BlogDetails from './BlogDetails';
import spinner from './../../../Assets/Images/Spinner.svg'

const AllBlogs = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://edubroist.onrender.com/allBlogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])





    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">All Blogs</h1></div>
            {
                blogs.length === 0 ? <div className='text-center'>
                    <div className=" justify-content-center w-100 d-flex">
                        <img src={spinner} alt="" />
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