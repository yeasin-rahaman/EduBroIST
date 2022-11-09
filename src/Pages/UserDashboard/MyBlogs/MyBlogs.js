import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';



const MyBlogs = () => {
    const { user } = useFirebase()

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch(`https://edubro.herokuapp.com/myBlogs/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, [user?.email, blogs]);

    console.log(blogs)



    const handleBlogDeleteRequest = id => {
        const proceed = window.confirm("You won't be able to revert this!")
        if (proceed) {
            const url = `https://edubro.herokuapp.com/deleteBlog/${id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        const remaining = blogs?.filter(blog => blog._id !== id);
                        setBlogs(remaining);

                    }
                })
        }
    }



    return (
        <div className='my-questions'>
            <div className='d-flex justify-content-between align-items-center my-question-header'>
                <h2>My Blogs</h2>
                <Link to={'/dashboard/add-blogs'}>
                    <button className='btn-style'>Post Your Blogs</button>
                </Link>
            </div>
            <table className="table table-dark" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-dark text-white mb-3 p-2" style={{ bblog: "1px solid red" }}>

                        <th >Number</th>
                        <th >Topic</th>

                        {/* <th >Image</th> */}

                        <th >Status</th>
                        <th >Request To Delete</th>

                    </tr>
                </thead>
                {blogs?.map((blog, index) => (
                    <tbody key={blog._id}>
                        <tr role="row" style={{ blog: "2px solid gray" }} >
                            <th scope="row">{index + 1}</th>
                            <td>{blog.topic}</td>
                            {/* <td><img style={{ width: "70px", height: "50px" }} src={blog.BlogImg} alt="" /></td> */}
                            <td>{blog.status}</td>
                            <td> <button
                                className="btn btn-danger btn-style download-btn"
                                onClick={() => handleBlogDeleteRequest(blog._id)}


                            >
                                Delete Blog
                            </button></td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div>
    );
};

export default MyBlogs;