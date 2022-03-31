
import React, { useEffect, useState } from 'react';
import LabsCart from './LabsCart'
import ReactPaginate from 'react-paginate';


const AllLabs = () => {
    const [labs, setLabs] = useState([]);
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const size = 10;

    const handlePageChange = (data) => {
        setPage(data.selected);
    }


    useEffect(() => {

        fetch(`http://localhost:5000/allLabs?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setLabs(data.allLabs)

                const count = data.count;
                const pageNumber = Math.ceil(count / size)
                setPageCount(pageNumber)
            })
    }, [page]);



    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">Important Labs</h1></div>
            {
                labs.length === 0 ? <div className='text-center'>
                    <div class="spinner-border m-5" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div> :
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {labs?.map((lab) => (

                            <LabsCart
                                key={lab.id}
                                data={lab}>

                            </LabsCart>

                        ))}
                    </div >
            }

            <div className="d-flex mt-5">
                <div className='mx-auto'>


                    <ReactPaginate
                        previousLabel={'previous'}
                        nextLabel={'next'}
                        breakLabel={'...'}
                        marginPagesDisplayed={3}
                        pageRangeDisplayed={3}
                        pageCount={pageCount}
                        onPageChange={handlePageChange}
                        containerClassName='pagination'
                        pageClassName='page-item'
                        pageLinkClassName='page-link'
                        previousClassName='page-link'
                        nextClassName='page-link'
                        breakClassName='page-item'
                        breakLinkClassName='page-link'
                        activeClassName='active'
                    />

                </div>
            </div>

        </div >


    );
};

export default AllLabs;