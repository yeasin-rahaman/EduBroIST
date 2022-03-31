import React, { useEffect, useState } from 'react';
import useFirebase from '../../../hooks/useFirebase';

const AdminSyllabus = () => {


    const [syllabus, setSyllabus] = useState([])
    const { user } = useFirebase()

    const [status, setStatus] = useState('')


    useEffect(() => {
        fetch(`http://localhost:5000/`)
            .then((res) => res.json())
            .then((data) => setSyllabus(data));
    }, [user?.email]);



    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/SyllabusStatusUpdate/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        alert('update')
    }

    const handleSelectValue = (e) => {
        const statusData = (e.target.value).toLowerCase()
        setStatus(statusData)
    }


    return (
        < div className="container all-book-container" >
            <div className="text-center pb-3">
                <h1 className="mb-2 text-center pt-2">Total Syllabus <span style={{ color: "#1289A7" }}>{syllabus.length}</span>  </h1>
            </div>

            <table className="table table-gray" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-dark text-white mb-3 p-2" style={{ book: "1px solid red" }}>
                        <th >Number</th>
                        <th >Department</th>
                        <th >Year</th>

                        {/* <th >Book Preview</th> */}

                        <th >Status</th>
                        <th >Update</th>
                    </tr>
                </thead>
                {syllabus?.map((syllabuss, index) => (
                    <tbody key={syllabuss._id}>
                        <tr role="row" style={{ book: "2px solid gray" }} >
                            <th scope="row">{index + 1}</th>
                            <td>{syllabuss.syllabusName}</td>
                            <td>{syllabuss.year}</td>
                            {/* 
                    <td> <iframe title="question" src={download}
        className="img-fluid rounded-start w-100 " style={{ height: "50px" }} allow="autoplay"></iframe>
        </td> */}

                            <td>
                                <div >
                                    <select onChange={handleSelectValue} className="pending p-2 ">
                                        <option defaultValue={syllabuss.status}>{syllabuss.status}</option>
                                        <option defaultValue="approved">Approved</option>
                                        <option defaultValue="pending">Pending</option>
                                        <option defaultValue="cancelled">Cancelled</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <button className="btn-style" onClick={() => handleUpdate(syllabuss._id)}>update</button>
                            </td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div >
    );
};

export default AdminSyllabus;