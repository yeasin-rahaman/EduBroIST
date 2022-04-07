import React, { useEffect, useState } from 'react';
import BooksCart from './BooksCart';
import spinner from './../../../Assets/Images/Infinity-1s-200px.svg'
const AllBooks = () => {

    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allBooks')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, [])
    console.log(books)







    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">Books Collection</h1></div>
            {
                books.length === 0 ?
                    <div className=" justify-content-center w-100 d-flex">
                        <img src={spinner} alt="" />
                    </div>
                    :
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {books?.map((book) => (

                            <BooksCart
                                key={book.id}
                                data={book}>

                            </BooksCart>

                        ))}
                    </div>
            }

        </div>
    );
};

export default AllBooks;