import React, { useEffect, useState } from 'react';
import QuestionCart from './QuestionCart';
import ReactPaginate from 'react-paginate';

const AllQuestions = () => {

    const [questions, setQuestions] = useState([]);
    const [department, setDepartment] = useState("")
    const [semester, setSemester] = useState("")
    const [year, setYear] = useState("")
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const size = 10;

    console.log(questions)

    const handlePageChange = (data) => {
        setPage(data.selected);
    }

    const handleSearch = (e) => {
        e.preventDefault()
    }
    // checkbox er value true or false return kore

    // useEffect(() => {
    //     fetch('http://localhost:5000/allQuestions')
    //         .then(res => res.json())
    //         .then(data => setQuestions(data))
    // }, [])

    useEffect(() => {
        console.log(department, year, semester)
        fetch(`http://localhost:5000/allQuestions?page=${page}&&size=${size}&&department=${department}&&year=${year}&&semester=${semester}`)
            .then(res => res.json())
            .then(data => {
                setQuestions(data.allQuestions)

                const count = data.count;
                const pageNumber = Math.ceil(count / size)
                setPageCount(pageNumber)
            })
    }, [department, year, semester, page]);


    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className='mb-5'><h1 className="user-desire-question">Find All Questions</h1>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="search-box mb-5">
                        <form onSubmit={handleSearch}>
                            <input type="text" name='search' placeholder='Search Questions' />
                            <button type='submit'>Search</button>
                        </form>
                    </div>
                </div>
            </div>
            {/* {questions.length ? */}
            <div className="row g-4" >
                <div className="col-12 col-md-2">
                    <div className="question-sidebar">
                        <h5 className='mb-3'>Filter Questions</h5>
                        <form
                            onChange={(e) => setDepartment(e.target.value)}
                        >

                            <div className="form-check align-items-center">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    All
                                </label>
                            </div>
                            <div className="form-check align-items-center">
                                <input className="form-check-input" type="checkbox" value="CSE" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    CSE
                                </label>
                            </div>
                            <div className="form-check align-items-center">
                                <input className="form-check-input" type="checkbox" value="ece" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    EEE
                                </label>
                            </div>
                            <div className="form-check align-items-center">
                                <input className="form-check-input" type="checkbox" value="bba" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    BBA
                                </label>
                            </div>
                        </form>

                        <div className='mt-3'>
                            <h5>Filter Year</h5>
                            <select onChange={(e) => setYear(e.target.value)} name="year" id="year">
                                <option value="">Select Year</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                            </select>
                        </div>
                        <div className='mt-3'>
                            <h5>Semester</h5>
                            <select onChange={(e) => setSemester(e.target.value)} name="semester" id="semester">
                                <option value="">Select Year</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                                <option value="2015">2015</option>
                                <option value="2014">2014</option>
                                <option value="2013">2013</option>
                                <option value="2012">2012</option>
                                <option value="2011">2011</option>
                                <option value="2010">2010</option>
                            </select>
                        </div>

                    </div>
                </div>
                <div className="col-12 col-md-10">
                    {
                        questions.length === 0 ? <div className='text-center'><div class="spinner-border m-5" role="status">
                            <span class="sr-only">Loading...</span>
                        </div></div> :
                            <div className="row">
                                {questions?.map((question) => (
                                    <QuestionCart
                                        key={question.id}
                                        data={question}>
                                    </QuestionCart>
                                ))}
                            </div>
                    }
                </div>

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

            {/* : <div><h5>Loading...</h5></div>} */}



        </div >
    );
};

export default AllQuestions;