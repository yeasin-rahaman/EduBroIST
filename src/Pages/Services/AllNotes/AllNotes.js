import React, { useEffect, useState } from 'react';

import AllNotesCart from './AllNotesCart';
import spinner from './../../../Assets/Images/Infinity-1s-200px.svg'

const AllNotes = () => {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allnotes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])






    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">Important Notes</h1></div>
            {
                notes.length === 0 ?
                    <div className=" justify-content-center w-100 d-flex">
                        <img src={spinner} alt="" />


                    </div> :
                    <div className="row g-4">
                        {notes?.map((note) => (
                            <AllNotesCart
                                key={note.id}
                                data={note}>
                            </AllNotesCart>

                        ))}
                    </div>
            }

        </div>
    );
};

export default AllNotes;