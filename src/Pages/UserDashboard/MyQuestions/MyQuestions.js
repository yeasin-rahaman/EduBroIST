import React, { useEffect, useState } from 'react';
import './MyQuestions.css';

import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';


const MyQuestions = () => {

    const { user } = useFirebase()

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myQuestions/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setQuestions(data)
            });
    }, [user?.email]);

    return (
        <div className='my-questions'>
            <div className='d-flex justify-content-between align-items-center my-question-header'>
                <h2>My questions</h2>
                <Link to={'/dashboard/add-question'}>
                    <button className='btn-style'>Post Your Questions</button>
                </Link>
            </div>
            <table className="table table-dark" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-dark text-white mb-3 p-2" style={{ question: "1px solid red" }}>

                        <th >Number</th>
                        <th >subject</th>
                        <th >Semester</th>
                        <th >Code</th>
                        <th >Year</th>

                        {/* <th >question Preview</th> */}

                        <th >Status</th>
                        <th >Request To Delete</th>

                    </tr>
                </thead>
                {questions?.map((question, index) => (
                    <tbody key={question._id}>
                        <tr role="row" style={{ question: "2px solid gray" }} >
                            <th scope="row">{index + 1}</th>
                            <td>{question.subject}</td>
                            <td>{question.code}</td>
                            <td>{question.year}</td>
                            <td>{question.semester}</td>

                            {/* <td> <iframe title="question" src={question.driveLink}
                                className="img-fluid rounded-start w-100 " style={{ height: "50px" }} allow="autoplay"></iframe>
                            </td> */}
                            <td>{question.status}</td>
                            <td> <button
                                className="btn-style download-btn"
                            // onClick={() => handlequestionDeleteRequest(question._id)}
                            >
                                Delete question
                            </button></td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div>
    );
};

export default MyQuestions;