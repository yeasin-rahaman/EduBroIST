import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const MyBooks = () => {
    const { user } = useFirebase()

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch(`https://edubro.herokuapp.com/myBooks/${user?.email}`)
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, [user?.email, books]);



    const handleBookDeleteRequest = id => {

        const proceed = window.confirm('Are you sure you want to Cancel this book')
        if (proceed) {
            const url = `https://edubro.herokuapp.com/deleteBook/${id}`;
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        const remaining = books?.filter(book => book._id !== id);
                        setBooks(remaining);

                    }
                })
        }
    }


    return (
        <div className='my-questions'>
            <div className='d-flex justify-content-between align-items-center my-question-header'>
                <h2>My books</h2>
                <Link to={'/dashboard/add-books'}>
                    <button className='btn-style'>Add Your books</button>
                </Link>
            </div>
            <table className="table table-dark" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-dark text-white mb-3 p-2" style={{ book: "1px solid red" }}>

                        <th >Number</th>
                        <th >Book Name</th>
                        <th >Author Name</th>

                        {/* <th >Book Preview</th> */}

                        <th >Status</th>
                        <th >Request To Delete</th>

                    </tr>
                </thead>
                {books?.map((book, index) => (
                    <tbody key={book._id}>
                        <tr role="row" style={{ book: "2px solid gray" }} >
                            <th scope="row">{index + 1}</th>
                            <td>{book.bookName}</td>
                            <td>{book.author}</td>

                            {/* <td> <iframe title="question" src={book.driveLink}
                                className="img-fluid rounded-start w-100 " style={{ height: "50px" }} allow="autoplay"></iframe></td> */}
                            <td>{book.status}</td>
                            <td> <button
                                className="btn btn-danger"
                                onClick={() => handleBookDeleteRequest(book._id)}
                            >
                                Delete book
                            </button></td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div>
    );
};

export default MyBooks;