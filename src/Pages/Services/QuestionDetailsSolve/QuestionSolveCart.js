import React from 'react';
import useFirebase from '../../../hooks/useFirebase';

const QuestionSolveCart = (data) => {
    const { subject, year, code, solveDriveLink, email, userName, solveNumber, department, _id } = data.data
    const handleSolveDeleteRequest = data.delete

    const { user, admin } = useFirebase()
    let googleId = solveDriveLink?.slice(32, 65);

    const download = `https://drive.google.com/u/0/uc?id=${googleId}&export=download`
    const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`

    return (
        <div className="col">
            <div className="card custom-cart h-100 hover">
                <iframe title="question" src={viewUrl}
                    className="img-fluid rounded-start w-100 " style={{ height: "330px" }} allow="autoplay"></iframe>
                <div className="card-body">
                    <h4 className="card-title mb-3">Subject {subject}</h4>
                    <h5 className="card-title department">Department: <span className='department'> {department}</span></h5>
                    <div className='d-flex justify-content-between'>

                        <h5 className="card-title">Subject Code: {code}</h5>
                        <h5 className="card-title">Solve Number: {solveNumber}</h5>
                        <h5 className="card-text ">Year: {year}</h5>
                    </div>
                    <div className=''>
                        <h5 className="card-title">Provider Name: {userName}</h5>
                        <h5 className="card-text ">Email: {email}</h5>
                    </div>
                    <div className="d-flex justify-content-between mt-3" >
                        <button className="btn-style download-btn " ><a href={download} className="">Download</a></button>

                        {
                            user.email === email || admin ?
                                < button
                                    className="btn-style download-btn"
                                    onClick={() => handleSolveDeleteRequest(_id)}
                                >
                                    Delete
                                </button>
                                :
                                <></>
                        }

                    </div>
                </div>
            </div>
        </div >
    );
};

export default QuestionSolveCart;