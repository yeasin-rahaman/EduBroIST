import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2';
import useFirebase from '../../../hooks/useFirebase';
import spinner from './../../../Assets/Images/Spinner.svg'
import QuestionSolveCart from './QuestionSolveCart';

const QuestionDetailsSolve = () => {
    const { user } = useFirebase()
    const { id } = useParams()
    const [question, setQuestion] = useState({})
    const { register, handleSubmit, reset } = useForm();
    const [QuestionSolves, setQuestionSolves] = useState([])
    const [counter, setCounter] = useState(false)

    let googleId = question?.driveLink?.slice(32, 65);

    const download = `https://drive.google.com/u/0/uc?id=${googleId}&export=download`
    const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`


    const onSubmit = data => {
        data.questionId = id
        data.userName = user.displayName
        data.email = user.email
        data.subject = question.subject
        data.year = question.year
        data.code = question.code
        data.department = question.department

        fetch(`https://edubro.herokuapp.com/addQuestionSolve`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                Swal.fire(
                    'Answer Posted Successfully.',
                )
                reset()

                setCounter(!counter)
            });
    };

    // get question 

    useEffect(() => {
        fetch(`https://edubro.herokuapp.com/question/${id}`)
            .then(res => res.json())
            .then(data => {
                setQuestion(data)

            })
    }, [id, reset])



    // get solve 
    useEffect(() => {
        fetch(`https://edubro.herokuapp.com/questionSolve/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setQuestionSolves(data)
            });
    }, [id, counter]);

    const handleSolveDeleteRequest = id => {
        const proceed = window.confirm("You won't be able to revert this!")
            .then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your solve has been deleted.',
                        'success'
                    )
                }
            })
        if (proceed) {
            const url = `https://edubro.herokuapp.com/deleteQuestionSolve/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        const remaining = QuestionSolves?.filter(questionSolve => questionSolve._id !== id);
                        setQuestionSolves(remaining);
                    }
                })
        }
    }





    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card custom-cart h-100 hover">
                            <iframe title="question" src={viewUrl}
                                className="img-fluid rounded-start w-100 " style={{ height: "300px" }} allow="autoplay"></iframe>
                            <div className="card-body">
                                <h4 className="card-title mb-3">{question?.subject}</h4>
                                <div className='d-flex justify-content-between'>
                                    <h5 className="card-title">Author : {question?.userName}</h5>
                                    <h5 className="card-title">Department: <span className='department'> {question?.department}</span></h5>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h5 className="card-title">Subject Code: {question?.code}</h5>
                                    <h5 className="card-text ">Year: {question?.year}</h5>
                                </div>
                                <button className="btn-style download-btn " ><a href={download} className="">Download</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className='text-capitalize mb-4'>Give your answer here</h2>
                        <div className="login-form text-center">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input className='w-75 mb-3'  {...register("solveNumber", { required: true })} placeholder='Solve Number' /> <br />
                                <input className='w-75 mb-3' {...register("solveDriveLink", { required: true })} placeholder='Question Link' /> <br />
                                <button type='submit'>Post Answer</button>
                            </form>

                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h3 className='text-center mt-5 fs-1 mb-4'>All the Answers are Below here</h3>
                    </div>

                </div>
                <div className="container text-black mt-5 mb-5" >

                    {QuestionSolves?.length ? <div className="row row-cols-1 row-cols-md-3 g-4">
                        {QuestionSolves?.map((QuestionSolve) => (
                            <QuestionSolveCart
                                key={QuestionSolve.id}
                                data={QuestionSolve}
                                delete={handleSolveDeleteRequest}>

                            </QuestionSolveCart>
                        ))}
                    </div> :
                        <div className=" justify-content-center w-100 d-flex">
                            <img src={spinner} alt="" />

                        </div>}

                </div>
            </div>
        </div >
    );
};

export default QuestionDetailsSolve;