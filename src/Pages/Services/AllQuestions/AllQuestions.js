import React, { useEffect, useState } from 'react';
import QuestionCart from './QuestionCart';
import ReactPaginate from 'react-paginate';
import spinner from './../../../Assets/Images/Spinner.svg';
const AllQuestions = () => {

    const [questions, setQuestions] = useState([]);
    const [department, setDepartment] = useState("")
    const [search, setSearch] = useState("")
    const [semester, setSemester] = useState("")
    const [year, setYear] = useState("")
    const [page, setPage] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const size = 10;

    console.log(questions)

    const handlePageChange = (data) => {
        setPage(data.selected);
    }


    const HandleSearch = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
    }
    // checkbox er value true or false return kore

    // useEffect(() => {
    //     fetch('https://edubro.herokuapp.com/allQuestions')
    //         .then(res => res.json())
    //         .then(data => setQuestions(data))
    // }, [])

    useEffect(() => {
        console.log(department, year, semester, search)
        fetch(`https://edubro.herokuapp.com/allQuestions?page=${page}&&size=${size}&&department=${department}&&year=${year}&&semester=${semester}&&search=${search}`)
            .then(res => res.json())
            .then(data => {
                setQuestions(data.allQuestions)

                const count = data.count;
                const pageNumber = Math.ceil(count / size)
                setPageCount(pageNumber)
            })
    }, [department, year, semester, page, search]);


    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="row align-items-center">
                <div className="col-md-6">
                    <div className='mb-5'><h1 className="user-desire-question">Find All Questions</h1>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="search-box mb-5">
                        <form >
                            <input type="text" name='search' onBlur={HandleSearch} placeholder='Search Questions' />
                            <span >Search</span>
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







                            <input type="radio" id="html" name="fav_language" value="" />
                            <label for="all" className='ps-2 form-check-label fw-bold'>All</label>
                            <br />
                            <input type="radio" id="cse" name="fav_language" value="cse" />
                            <label fo r="cse" className='ps-2 form-check-label fw-bold'>CSE</label>
                            <br />
                            <input type="radio" id="ece" name="fav_language" value="ece" />
                            <label for="css" className='ps-2 form-check-label fw-bold'>ECE</label>
                            <br />
                            <input type="radio" id="bba" name="fav_language" value="bba" />
                            <label for="bba" className='ps-2 form-check-label fw-bold'>BBA</label>
                            <br />
                            <input type="radio" id="bba" name="fav_language" value="diploma" />
                            <label for="bba" className='ps-2 form-check-label fw-bold'>DIPLOMA</label>







                            {/* 
                            <div className="form-check align-items-center">
                                <input className="form-check-input" type="radio" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    CSE
                                </label>
                            </div>
                            <div className="form-check align-items-center">
                                <input className="form-check-input" type="radio" value="ece" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    ECE
                                </label>
                            </div>
                            <div className="form-check align-items-center">
                                <input className="form-check-input" type="checkbox" value="bba" id="flexCheckDefault" />
                                <label className="form-check-label fw-bold" for="flexCheckDefault">
                                    BBA
                                </label>
                            </div> */}
                        </form>

                        <div className='mt-3'>
                            <h5>Filter Year</h5>
                            <select onChange={(e) => setYear(e.target.value)} name="year" id="year">
                                <option value="">Select Year</option>
                                <option value="2021">2022</option>
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
                                <option value="">Select Semester</option>
                                <option value="1">1st</option>
                                <option value="2">2nd</option>
                                <option value="3">3rd</option>
                                <option value="4">4th</option>
                                <option value="5">5th</option>
                                <option value="6">6th</option>
                                <option value="7">7th</option>
                                <option value="8">8th</option>
                            </select>
                        </div>

                    </div>
                </div>
                <div className="col-12 col-md-10">
                    {
                        questions.length === 0 ? <div className=" justify-content-center w-100 d-flex">
                            <img src={spinner} alt="" />
                        </div> :
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



        </div >
    );
};

export default AllQuestions;