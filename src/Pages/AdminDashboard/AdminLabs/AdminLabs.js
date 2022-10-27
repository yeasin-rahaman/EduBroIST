import React, { useEffect, useState } from 'react';
import useFirebase from '../../../hooks/useFirebase';


const AdminLabs = () => {

    const [labs, setLabs] = useState([])
    const { user } = useFirebase()
    console.log(labs)

    const [status, setStatus] = useState('')


    useEffect(() => {
        fetch(`https://edubro.herokuapp.com/allLabs`)
            .then((res) => res.json())
            .then((data) => setLabs(data));
    }, [user?.email]);



    const handleUpdate = (id) => {
        fetch(`https://edubro.herokuapp.com/labsStatusUpdate/${id}`, {
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
        < div className="container all-note-container" >
            <div className="text-center pb-3">
                <h1 className="mb-5 text-center pt-5">Total Notes <span className="text-danger">{labs.length}</span>  </h1>
            </div>

            <table className="table table-dark" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-dark text-white mb-3 p-2" style={{ lab: "1px solid red" }}>
                        <th >Number</th>
                        <th >Note Name</th>
                        <th >Uploader Email</th>

                        {/* <th >note Preview</th> */}

                        <th >Status</th>
                        <th >Update</th>
                    </tr>
                </thead>
                {labs?.map((lab, index) => (
                    <tbody key={lab._id}>
                        <tr role="row" style={{ note: "2px solid gray" }} >
                            <th scope="row">{index + 1}</th>
                            <td>{lab?.labName}</td>

                            <td>{lab?.email}</td>
                            {/* 
                    <td> <iframe title="question" src={download}
        className="img-fluid rounded-start w-100 " style={{ height: "50px" }} allow="autoplay"></iframe>
        </td> */}

                            <td>
                                <div >
                                    <select onChange={handleSelectValue} className="pending p-2 ">
                                        <option defaultValue={lab.status}>{lab.status}</option>
                                        <option defaultValue="approved">Approved</option>
                                        <option defaultValue="pending">Pending</option>
                                        <option defaultValue="cancelled">Cancelled</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <button className="btn btn-danger" onClick={() => handleUpdate(lab._id)}>update</button>
                            </td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div >
    );
};

export default AdminLabs;