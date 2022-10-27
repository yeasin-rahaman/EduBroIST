import React, { useEffect, useState } from 'react';

import AllNotesCart from './AllNotesCart';

const AllNotes = () => {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        fetch('https://edubro.herokuapp.com/allnotes')
            .then(res => res.json())
            .then(data => setNotes(data))
    }, [])






    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">Important Notes</h1></div>
            {
                notes.length === 0 ? <div className='text-center'>
                    <div class="spinner-border m-5" role="status">
                        <span class="sr-only">Loading...</span>
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