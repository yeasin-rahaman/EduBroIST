import React from 'react';
import { Link } from 'react-router-dom';
import file from './../../../Assets/Images/file.png'

const AssignmentCartCopy = ({ data }) => {
    console.log(data);
    const { driveLink, semester, code, subject, department, _id, date, assignmentDetails } = data


    let googleId = driveLink?.slice(32, 65);

    console.log(driveLink)

    const download = `https://drive.google.com/u/0/uc?id=${googleId}&export=download`
    const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`
    return (
        <div className='py-5'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 ">
                        <div className="blog-image">      {
                            viewUrl ?

                                <img src={file} className="img-fluid w-50" alt="" />
                                :
                                <iframe title="question" src={viewUrl}
                                    className="img-fluid rounded-start w-100 " style={{ height: "220px" }} allow="autoplay">

                                </iframe>

                        }
                        </div>
                        <div className="blog-text px-2 py-3">
                            <div className="blog-meta mb-1 d-flex justify-content-between">
                                <h3>{subject}</h3>
                                <span>12/04/2022</span>
                            </div>
                            <div className='py-2 d-flex justify-content-between'>
                                <span>Semester: {semester}</span>

                                <span>Subject Code: {date}</span>
                                {/* <span>Rating: <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span> */}
                            </div>
                            {/* <h4>{subject}</h4> */}
                            <p>{assignmentDetails}</p>
                            <div className='buttons' >
                                {/* <button className="btn-style download-btn " ><a href={download} className="">Download</a></button> */}
                                <Link to={`/assignment-details/${_id}`}><button className="btn-style" >View Submission</button></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AssignmentCartCopy;