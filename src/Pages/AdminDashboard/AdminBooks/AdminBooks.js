import React, { useEffect, useState } from 'react';
import { Children } from 'react';
import Swal from 'sweetalert2/dist/sweetalert2';
import useFirebase from '../../../hooks/useFirebase';


const AdminBooks = () => {


    const [books, setBooks] = useState([])
    const { user } = useFirebase()
    console.log(books)

    const [status, setStatus] = useState('')


    useEffect(() => {
        fetch(`https://edubro.herokuapp.com/getAllBooks`)
            .then((res) => res.json())
            .then((data) => setBooks(data));
    }, [user?.email]);



    const handleUpdate = (id) => {
        fetch(`https://edubro.herokuapp.com/BookStatusUpdate/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));

        Swal.fire({
            position: 'top-center',
            icon: 'Success',
            title: 'Books Status Updated',
            showConfirmButton: true,
            timer: 4000
        })
    }

    const handleSelectValue = (e) => {
        const statusData = (e.target.value).toLowerCase()
        setStatus(statusData)
    }
    console.log("books", books);

    return (
        < div className="container all-book-container" >
            <div className="text-center pb-3">
                <h1 className="mb-2 text-center pt-2">Total Books <span style={{ color: "#da942c" }}>{books?.length}</span>  </h1>
            </div>

            <table className="table table-gray" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-dark text-white mb-3 p-2" style={{ book: "1px solid red" }}>
                        <th >Number</th>
                        <th >Book Name</th>
                        <th >Uploader</th>

                        {/* <th >Book Preview</th> */}

                        <th >Status</th>
                        <th >View File</th>
                        <th >Update</th>
                    </tr>
                </thead>
                {books?.map((book, index) => (
                    <tbody key={book._id}>
                        <tr role="row" style={{ book: "2px solid gray" }} >
                            <th scope="row">{index + 1}</th>
                            <td>{book.bookName}</td>
                            <td>{book.email}</td>
                            {/* 
                    <td> <iframe title="question" src={download}
        className="img-fluid rounded-start w-100 " style={{ height: "50px" }} allow="autoplay"></iframe>
        </td> */}

                            <td>
                                <div >
                                    <select onChange={handleSelectValue} className="pending p-2 capitalize">
                                        <option defaultValue={book.status}>{book.status}</option>
                                        <option defaultValue="approved">Approved</option>
                                        <option defaultValue="pending">Pending</option>
                                        <option defaultValue="cancelled">Cancelled</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <button className="btn-style download-btn"  ><a href={book.driveLink} target="_blank" >View</a></button>
                            </td>
                            <td>
                                <button className="btn-style" onClick={() => handleUpdate(book._id)}>Update</button>
                            </td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div >
    );
};

export default AdminBooks;