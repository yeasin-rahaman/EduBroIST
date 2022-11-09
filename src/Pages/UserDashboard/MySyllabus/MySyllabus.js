import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const MySyllabus = () => {
    const { user } = useFirebase()

    const [syllabus, setSyllabus] = useState([])

    useEffect(() => {
        fetch(`https://edubro.herokuapp.com/mySyllabus/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setSyllabus(data));
    }, [user?.email, syllabus]);



    const handleSyllabusDeleteRequest = id => {

        const proceed = window.confirm("You won't be able to revert this!")
        if (proceed) {
            const url = `https://edubro.herokuapp.com/deleteSyllabus/${id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        const remaining = syllabus?.filter(syllabus => syllabus._id !== id);
                        setSyllabus(remaining);

                    }
                })
        }
    }


    return (
        <div className='my-syllabuss'>
            <div className='d-flex justify-content-between align-items-center my-syllabus-header'>
                <h2>My Syllabus</h2>
                <Link to={'/dashboard/add-syllabus'}>
                    <button className='btn-style'>Add Syllabus</button>
                </Link>
            </div>
            <table className="table table-dark" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-dark text-white mb-3 p-2" style={{ syllabus: "1px solid red" }}>

                        <th >Number</th>
                        <th >Department</th>
                        <th >Year</th>

                        {/* <th >Syllabus Preview</th> */}

                        <th >Status</th>
                        <th >Request To Delete</th>

                    </tr>
                </thead>
                {syllabus?.map((syllabus, index) => (
                    <tbody key={syllabus._id}>
                        <tr role="row" style={{ syllabus: "2px solid gray" }} >
                            <th scope="row">{index + 1}</th>
                            <td>{syllabus.syllabusName}</td>
                            <td>{syllabus.year}</td>

                            {/* <td> <iframe title="syllabus" src={syllabus.driveLink}
                                className="img-fluid rounded-start w-100 " style={{ height: "50px" }} allow="autoplay"></iframe>
                            </td> */}
                            <td>{syllabus.status}</td>
                            <td> <button
                                className="btn-style download-btn "
                                onClick={() => handleSyllabusDeleteRequest(syllabus._id)}
                            >
                                Delete Syllabus
                            </button></td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div>
    );
};

export default MySyllabus;