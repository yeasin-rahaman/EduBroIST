import React from 'react';
import { Link } from 'react-router-dom';
import './QuestionCart.css';

const QuestionCart = ({ data }) => {
    console.log(data);
    const { driveLink, semester, code, subject, department, year, _id } = data


    let googleId = driveLink?.slice(32, 65);

    console.log(driveLink)

    const download = `https://drive.google.com/u/0/uc?id=${googleId}&export=download`
    const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`

    return (
        <div className="col-12 col-md-12 mb-4">
            <div className="card custom-cart h-100 hover shadow rounded">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <iframe title="question" src={viewUrl}
                            className="img-fluid rounded-start w-100 " style={{ height: "220px" }} allow="autoplay"></iframe>
                    </div>
                    <div className="col-md-6">

                        <div className="card-body">
                            <h4 className="card-title mb-3">{subject}</h4>
                            <h5 className="card-title">Department: <span className='department'  >{department}</span> </h5>
                            <h5 className="card-title">Semester: {semester}</h5>
                            <div className='d-flex justify-content-between'>
                                <h5 className="card-title">Subject Code: {code}</h5>
                                <h5 className="card-text " >Year: {year}</h5>
                            </div>
                            <div className='buttons' >
                                <button className="btn-style download-btn " ><a href={download} className="">Download</a></button>
                                <Link to={`/question-details/${_id}`}><button className="btn-style" >View Answer</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionCart;