
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const MyLabs = () => {
    const { user } = useFirebase()

    const [labs, setLabs] = useState([])

    useEffect(() => {
        fetch(`https://edubro.herokuapp.com/myLabs/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setLabs(data));
    }, [user?.email, labs]);


    const handleLabDeleteRequest = id => {
        const proceed = window.confirm("You won't be able to revert this!")
        if (proceed) {
            const url = `https://edubro.herokuapp.com/deleteLab/${id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        const remaining = labs?.filter(lab => lab._id !== id);
                        setLabs(remaining);

                    }
                })
        }
    }
    return (
        <div className='my-questions'>
            <div className='d-flex justify-content-between align-items-center my-question-header'>
                <h2>My Labs</h2>
                <Link to={'/dashboard/add-labs'}>
                    <button className='btn-style'>Add Lab Question</button>
                </Link>
            </div>
            <table className="table table-dark" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-dark text-white mb-3 p-2" style={{ lab: "1px solid red" }}>

                        <th >Number</th>
                        <th >Lab Name</th>
                        <th >DepartMent Name</th>

                        {/* <th >Lab Preview</th> */}

                        <th >Status</th>
                        <th >Request To Delete</th>

                    </tr>
                </thead>
                {labs?.map((lab, index) => (
                    <tbody key={lab._id}>
                        <tr role="row" style={{ lab: "2px solid gray" }} >
                            <th scope="row">{index + 1}</th>
                            <td>{lab.labName}</td>
                            <td>{lab.department}</td>

                            {/* <td> <iframe title="question" src={lab.driveLink}
                                className="img-fluid rounded-start w-100 " style={{ height: "50px" }} allow="autoplay"></iframe>
                            </td> */}
                            <td>{lab.status}</td>
                            <td> <button
                                className="btn-style download-btn"
                                onClick={() => handleLabDeleteRequest(lab._id)}
                            >
                                Delete Lab
                            </button></td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div>
    );
};

export default MyLabs;
