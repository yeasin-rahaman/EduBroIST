import React, { useEffect, useState } from 'react';
import spinner from './../../../Assets/Images/Spinner.svg'
import AllNotesCart from './AllNotesCart';

const AllNotes = () => {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        fetch('https://edubro.herokuapp.com/allNotes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [notes])






    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">Important Notes</h1></div>
            {
                notes.length === 0 ? <div className='text-center'>
                    <div className=" justify-content-center w-100 d-flex">
                        <img src={spinner} alt="" />
                    </div>
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