import React from 'react';
import { FaStar } from 'react-icons/fa'

const BlogDetails = ({data}) => {
    const {topic, blog, userName, email, blogImg} = data

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
                                <span>12/04/2022</span>
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




// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { FaStar } from 'react-icons/fa'
// import { useForm } from 'react-hook-form';
// import useFirebase from '../../hooks/useFirebase';
// import BlogComment from './BlogComment';


// const BlogDetails = ({data}) => {
//     const { user } = useFirebase()
//     const {topic, blog, BlogImg, userName, email ,_id} = data
//     const { register, handleSubmit, reset } = useForm();
//     const [blogComments, setBlogComments] = useState([])
//     const { id } = useParams()

//     const onSubmit = data => {

//         data.userName = user.displayName
//         data.userEmail = user.email

//         fetch(`http://localhost:5000/PostBlogComment`, {
//             method: "POST",
//             headers: { "content-type": "application/json" },
//             body: JSON.stringify(data),
//         })
//             .then((res) => res.json())
//             .then((result) => {
//                 console.log(result)

//                 alert('order confirmed')
//                 reset()
//             });

//     };



//     useEffect(() => {
//         fetch(`http://localhost:5000/getBlogComment/${id}`)
//             .then((res) => res.json())
//             .then((data) => {
//                 setBlogComments(data)
      

//             });
//     }, [id, reset]);






//     return (
//         <div className='py-5'>
//             <div className="container">
//                 <div className="row justify-content-center">
//                     <div className="col-md-8 ">
//                         <div className="blog-image">
//                             <img className='w-100' src={BlogImg} alt="blog-bg" />
//                         </div>
//                         <div className="blog-text px-2 py-3">
//                             <div className="blog-meta mb-1 d-flex justify-content-between">
//                                 <span>Sea beach</span>
//                                 <span>12/04/2022</span>
//                             </div>
//                             <div className='py-2 d-flex justify-content-between'>
//                                 <span>Author: {userName}</span>
//                                 <span>Author: {email}</span>
//                                 <span>Rating: <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span>
//                             </div>
//                             <h4>{topic}</h4>
//                             <p>{blog}</p>
//                             </div>
//                     </div>
                 
//                     <div>
//                         <ul>
//                           {
//                               blogComments.map(blogComment =>(
// <>
// <li> {blogComments}</li>
// <li>{userName }</li> 
// {/* <li>{userEmail}</li>  */}

// </>
//                               ))
//                           }
//                         </ul>
//                     </div>

//   <form onSubmit={handleSubmit(onSubmit, _id)}>
//                         <input className='w-75 mb-3' {...register("comment", { required: true })} placeholder='Comment' /> <br />
//                         <button type='submit'>Submit</button>
//                     </form>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BlogDetails;