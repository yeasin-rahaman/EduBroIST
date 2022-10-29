import React from 'react';
import { FaStar } from 'react-icons/fa'

const BlogDetails = ({ data }) => {
    const { topic, blog, userName, email, blogImg, date } = data

    return (
        <div className='py-5'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 ">
                        <div className="blog-image">
                            <img className='w-100' src={blogImg} alt="blog-bg" />
                        </div>
                        <div className="blog-text px-2 py-3">
                            <div className="blog-meta mb-1 d-flex justify-content-between">
                                <h3>{topic}</h3>
                                <span>{date}</span>
                            </div>
                            <div className='py-2 d-flex justify-content-between'>
                                <span>Author: {userName}</span>
                                <span>Author: {email}</span>
                                <span>Rating: <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
                            </div>
                            <h4>{topic}</h4>
                            <p>{blog}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogDetails;

