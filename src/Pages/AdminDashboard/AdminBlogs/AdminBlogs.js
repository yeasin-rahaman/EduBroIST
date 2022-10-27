import React, { useEffect, useState } from 'react';
import useFirebase from '../../../hooks/useFirebase';

const AdminBlogs = () => {

    const [blogs, setBlogs] = useState([])
    const { user } = useFirebase()
    console.log(blogs)

    const [status, setStatus] = useState('')


    useEffect(() => {
        fetch(`https://edubro.herokuapp.com/allBlogs`)
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, [user?.email]);



    const handleUpdate = (id) => {
        fetch(`https://edubro.herokuapp.com/BlogStatusUpdate/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        alert('update')
    }

    const handleSelectValue = (e) => {
        const statusData = (e.target.value).toLowerCase()
        setStatus(statusData)
    }



    return (
        < div className="container all-blog-container" >
            <div className="text-center pb-3">
                <h1 className="mb-2 text-center pt-2">Total Blogs <span style={{ color: "#da942c" }}>{blogs.length}</span>  </h1>
            </div>
            <table className="table table-gray" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-dark text-white mb-3 p-2" style={{ blog: "1px solid red" }}>

                        <th >Number</th>
                        <th >blog Name</th>
                        <th >Author Name</th>

                        {/* <th >Blog Preview</th> */}

                        <th >Status</th>
                        <th >Request To Delete</th>
                    </tr>
                </thead>
                {blogs?.map((blog, index) => (
                    <tbody key={blog._id}>
                        <tr role="row" style={{ blog: "2px solid gray" }} >
                            <th scope="row">{index + 1}</th>
                            <td>{blog.topic}</td>
                            <td>{blog.email}</td>
                            {/* 
                    <td> <iframe title="blog" src={download}
        className="img-fluid rounded-start w-100 " style={{ height: "50px" }} allow="autoplay"></iframe>
        </td> */}

                            <td>
                                <div >
                                    <select onChange={handleSelectValue} className="pending p-2 ">
                                        <option defaultValue={blog.status}>{blog.status}</option>
                                        <option defaultValue="approved">Approved</option>
                                        <option defaultValue="pending">Pending</option>
                                        <option defaultValue="cancelled">Cancelled</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <button className="btn-style" onClick={() => handleUpdate(blog._id)}>update</button>
                            </td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div >
    );
};

export default AdminBlogs;

