import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2';


const AdminLab = () => {


    const [labs, setLabs] = useState([])
    console.log(labs)

    const [status, setStatus] = useState('')


    useEffect(() => {
        fetch(`https://edubro.herokuapp.com/getAllLabs`)
            .then((res) => res.json())
            .then((data) => setLabs(data));
    }, []);
    console.log(labs);


    const handleUpdate = (id) => {
        fetch(`https://edubro.herokuapp.com/labsStatusUpdate/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        Swal.fire({
            position: 'top-center',
            icon: 'Success',
            title: 'Lab Status Update',
            showConfirmButton: true,
            timer: 4000
        })

    }

    const handleSelectValue = (e) => {
        const statusData = (e.target.value).toLowerCase()
        setStatus(statusData)
    }

    return (
        < div className="container all-lab-container" >
            <div className="text-center pb-3">
                <h1 className="mb-2 text-center pt-2">Total labs <span style={{ color: "#da942c" }}>{labs?.length}</span>  </h1>
            </div>

            <table className="table table-gray" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-dark text-white mb-3 p-2" style={{ lab: "1px solid red" }}>

                        <th >Number</th>
                        <th >Subject</th>
                        <th >Uploader</th>

                        {/* <th >lab Preview</th> */}
                        <th >Status</th>
                        <th >Update</th>
                    </tr>
                </thead>
                {labs?.map((lab, index) => (
                    <tbody key={lab._id}>
                        <tr role="row" style={{ lab: "2px solid gray" }} >
                            <th scope="row">{index + 1}</th>
                            <td>{lab.subject}</td>
                            <td>{lab.email}</td>
                            {/* 
                    <td> <iframe title="lab" src={download}
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
                                <button className="btn-style" onClick={() => handleUpdate(lab._id)}>update</button>
                            </td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div >
    );
};

export default AdminLab;