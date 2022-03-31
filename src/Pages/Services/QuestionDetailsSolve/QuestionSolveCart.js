import React from 'react';

const QuestionSolveCart = ({ data }) => {
    const { subject, year, code, driveLink, email, topic, userName, solveNumber, department } = data


    let googleId = driveLink?.slice(32, 65);

    console.log(driveLink)

    const download = `https://drive.google.com/u/0/uc?id=${googleId}&export=download`
    const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`

    return (
        <div className="col">
            <div className="card custom-cart h-100 hover">
                <iframe title="question" src={viewUrl}
                    className="img-fluid rounded-start w-100 " style={{ height: "330px" }} allow="autoplay"></iframe>
                <div className="card-body">
                    <h4 className="card-title mb-3">Subject {subject}</h4>
                    <h5 className="card-title">Department: {department}</h5>
                    <div className='d-flex justify-content-between'>
                        <h5 className="card-title">Subject Code: {code}</h5>
                        <h5 className="card-text ">Year: {year}</h5>
                    </div>
                    <div className=''>
                        <h5 className="card-title">Provider Name: {userName}</h5>
                        <h5 className="card-text ">Email: {email}</h5>
                    </div>
                    <div className="d-flex justify-content-between mt-3" >
                        <button className="btn-style download-btn " ><a href={download} className="">Download</a></button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionSolveCart;