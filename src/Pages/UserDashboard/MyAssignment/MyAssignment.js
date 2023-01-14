import React, { useEffect, useState } from 'react';
import './MyQuestions.css';

import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';


const MyAssignment = () => {

    const { user } = useFirebase()

    const [assignments, setAssignments] = useState([])

    useEffect(() => {
        fetch(`https://edubroist.onrender.com/myAssignments/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setAssignments(data)
            });
    }, [user?.email]);


    // delete method  

    const handleAssignmentDeleteRequest = id => {
        // const proceed = Swal.fire({
        //     title: 'Are you sure?',
        //     text: "You won't be able to revert this!",
        //     icon: 'warning',
        //     showCancelButton: true,
        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, delete it!'
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         Swal.fire(
        //             'Deleted!',
        //             'Your assignment has been deleted.',
        //             'success'
        //         )
        //     }
        // })
        const proceed = window.process()
        if (proceed) {
            const url = `https://edubroist.onrender.com/deleteAssignment/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        const remaining = assignments?.filter(assignment => assignment._id !== id);
                        setAssignments(remaining);
                    }
                })
        }
    }


    return (
        <div className='my-questions'>
            <div className='d-flex justify-content-between align-items-center my-question-header'>
                <h2>My Assignment</h2>
                <Link to={'/admin-dashboard/add-assignment'}>
                    <button className='btn-style'>Post Your Assignment</button>
                </Link>
            </div>
            <table className="table table-dark" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-dark text-white mb-3 p-2" style={{ assignment: "1px solid red" }}>

                        <th >Number</th>
                        <th >subject</th>
                        <th >Semester</th>
                        <th >Code</th>
                        <th >Year</th>

                        {/* <th >assignment Preview</th> */}

                        <th >Status</th>
                        <th >Request To Delete</th>
                        <th >View Assignment Details</th>

                    </tr>
                </thead>
                {assignments?.map((assignment, index) => (
                    <tbody key={assignment._id}>
                        <tr role="row" style={{ assignment: "2px solid gray" }} >
                            <th scope="row">{index + 1}</th>
                            <td>{assignment.subject}</td>
                            <td>{assignment.code}</td>
                            <td>{assignment.year}</td>
                            <td>{assignment.semester}</td>

                            {/* <td> <iframe title="assignment" src={assignment.driveLink}
                                className="img-fluid rounded-start w-100 " style={{ height: "50px" }} allow="autoplay"></iframe>
                            </td> */}
                            <td>{assignment.status}</td>
                            <td>
                                <button
                                    className="btn-style download-btn"
                                    onClick={() => handleAssignmentDeleteRequest(assignment._id)}
                                >
                                    Delete Assignment
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn-style download-btn"

                                >

                                    <Link to={`/assignment-details/${assignment._id}`}>View Submission</Link>
                                </button>


                            </td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div>
    );
};

export default MyAssignment;