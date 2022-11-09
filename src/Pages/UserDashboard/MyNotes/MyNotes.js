import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const MyNotes = () => {
    const { user } = useFirebase()
    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch(`https://edubro.herokuapp.com/mynotes/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setNotes(data));
    }, [user?.email, notes]);

    const handleNoteDeleteRequest = id => {
        const proceed = window.confirm("You won't be able to revert this!")
        if (proceed) {
            const url = `https://edubro.herokuapp.com/deleteNote/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        const remaining = notes?.filter(note => note._id !== id);
                        setNotes(remaining);

                    }
                })
        }
    }

    return (
        <div className='my-questions'>
            <div className='d-flex justify-content-between align-items-center my-question-header'>
                <h2>My notes</h2>
                <Link to={'/dashboard/add-notes'}>
                    <button className='btn-style'>Add notes</button>
                </Link>
            </div>
            <table className="table table-dark" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-dark text-white mb-3 p-2" style={{ note: "1px solid red" }}>

                        <th >Number</th>
                        <th >Subject Name</th>
                        <th >Topic</th>

                        {/* <th >Note Preview</th> */}

                        <th >Status</th>
                        <th >Request To Delete</th>

                    </tr>
                </thead>
                {notes?.map((note, index) => (
                    <tbody key={note._id}>
                        <tr role="row" style={{ note: "2px solid gray" }} >
                            <th scope="row">{index + 1}</th>
                            <td>{note.topic}</td>
                            <td>{note.subject}</td>

                            {/* <td> <iframe title="question" src={note.driveLink}
                                className="img-fluid rounded-start w-100 " style={{ height: "50px" }} allow="autoplay"></iframe>
                            </td> */}
                            <td>{note.status}</td>
                            <td> <button
                                className="btn btn-danger"
                                onClick={() => handleNoteDeleteRequest(note._id)}
                            >
                                Delete note
                            </button></td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div>
    );
};

export default MyNotes;