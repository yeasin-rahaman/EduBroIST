import React, { useEffect, useState } from 'react';
import useFirebase from '../../../hooks/useFirebase';

const AdminNotes = () => {



    const [notes, setNotes] = useState([])
    const { user } = useFirebase()
    console.log(notes)

    const [status, setStatus] = useState('')


    useEffect(() => {
        fetch(`http://localhost:5000/allNotes`)
            .then((res) => res.json())
            .then((data) => setNotes(data));
    }, [user?.email]);



    const handleUpdate = (id) => {
        fetch(`http://localhost:5000/notesStatusUpdate/${id}`, {
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
                <h1 className="mb-2 text-center pt-2">Total Notes <span style={{ color: "#1289A7" }}>{notes.length}</span>  </h1>
            </div>

            <table className="table table-gray" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-dark text-white mb-3 p-2" style={{ note: "1px solid red" }}>
                        <th >Number</th>
                        <th >Note Name</th>
                        <th >Uploader Email</th>

                        {/* <th >note Preview</th> */}

                        <th >Status</th>
                        <th >Update</th>
                    </tr>
                </thead>
                {notes?.map((note, index) => (
                    <tbody key={note._id}>
                        <tr role="row" style={{ note: "2px solid gray" }} >
                            <th scope="row">{index + 1}</th>
                            <td>{note.topic}</td>
                            <td>{note.email}</td>
                            {/* 
                    <td> <iframe title="question" src={download}
        className="img-fluid rounded-start w-100 " style={{ height: "50px" }} allow="autoplay"></iframe>
        </td> */}

                            <td>
                                <div >
                                    <select onChange={handleSelectValue} className="pending p-2 ">
                                        <option defaultValue={note.status}>{note.status}</option>
                                        <option defaultValue="approved">Approved</option>
                                        <option defaultValue="pending">Pending</option>
                                        <option defaultValue="cancelled">Cancelled</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <button className="btn-style" onClick={() => handleUpdate(note._id)}>update</button>
                            </td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div >
    );
};

export default AdminNotes;