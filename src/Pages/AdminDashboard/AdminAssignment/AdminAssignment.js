import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2';


const AdminAssignment = () => {

    const [assignments, setAssignments] = useState([])
    console.log(assignments)

    const [status, setStatus] = useState('')


    useEffect(() => {
        fetch(`https://edubro.herokuapp.com/getAllAssignments`)
            .then((res) => res.json())
            .then((data) => setAssignments(data));
    }, []);
    console.log(assignments);


    const handleUpdate = (id) => {
        fetch(`https://edubro.herokuapp.com/AssignmentStatusUpdate/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));


        Swal.fire({
            position: 'top-center',
            icon: 'Success',
            title: 'Assignment Status Update',
            showConfirmButton: true,
            timer: 4000
        })

    }

    const handleSelectValue = (e) => {
        const statusData = (e.target.value).toLowerCase()
        setStatus(statusData)
    }

    return (
        < div className="container all-assignment-container" >
            <div className="text-center pb-3">
                <h1 className="mb-2 text-center pt-2">Total Admin Assignment <span style={{ color: "#da942c" }}>{assignments?.length}</span>  </h1>
            </div>

            <table className="table table-gray" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-dark text-white mb-3 p-2" style={{ assignment: "1px solid red" }}>

                        <th >Number</th>
                        <th >Subject</th>
                        <th >Uploader</th>

                        {/* <th >assignment Preview</th> */}
                        <th >Status</th>
                        <th >Update</th>
                    </tr>
                </thead>
                {assignments?.map((assignment, index) => (
                    <tbody key={assignment._id}>
                        <tr role="row" style={{ assignment: "2px solid gray" }} >
                            <th scope="row">{index + 1}</th>
                            <td>{assignment.subject}</td>
                            <td>{assignment.email}</td>
                            {/* 
                    <td> <iframe title="assignment" src={download}
        className="img-fluid rounded-start w-100 " style={{ height: "50px" }} allow="autoplay"></iframe>
        </td> */}

                            <td>
                                <div >
                                    <select onChange={handleSelectValue} className="pending p-2 capitalize">
                                        <option defaultValue={assignment.status}>{assignment.status}</option>
                                        <option defaultValue="approved">Approved</option>
                                        <option defaultValue="pending">Pending</option>
                                        <option defaultValue="cancelled">Cancelled</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <button className="btn-style" onClick={() => handleUpdate(assignment._id)}>Update</button>
                            </td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div >
    );
};

export default AdminAssignment;