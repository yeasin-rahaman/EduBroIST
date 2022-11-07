import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const QuestionDetails = () => {
    const { id } = useParams()
    const [question, setQuestion] = useState({})
    const { register, handleSubmit, reset } = useForm();

    let googleId = question?.driveLink?.slice(32, 65);

    const download = `https://drive.google.com/u/0/uc?id=${googleId}&export=download`
    const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`
    console.log('test', viewUrl)

    useEffect(() => {
        fetch(`https://edubro.herokuapp.com/question/${id}`)
            .then(res => res.json())
            .then(data => {
                setQuestion(data)
                console.log(data)
            })
    }, [id])

    const onSubmit = data => {
        console.log(data);
    };
    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card custom-cart h-100 hover">
                            <iframe title="question" src={viewUrl}
                                className="img-fluid rounded-start w-100 " style={{ height: "300px" }} allow="autoplay"></iframe>
                            <div className="card-body">
                                <h4 className="card-title mb-3">Question Title will be here</h4>
                                <div className='d-flex justify-content-between'>
                                    <h5 className="card-title">Subject: {question?.subject}</h5>
                                    <h5 className="card-title">Department: <span className='department'> {question?.department}</span></h5>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h5 className="card-title">Subject Code: {question?.code}</h5>
                                    <h5 className="card-text ">Year: {question?.year}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className='text-capitalize mb-4'>Give your answer here</h2>
                        <div className="login-form text-center">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input className='w-75 mb-3' {...register("answer", { required: true })} placeholder='Your Answer' /> <br />
                                <input className='w-75 mb-3' {...register("link", { required: true })} placeholder='Answer Link' /> <br />

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
                <div className="row">
                    <div className="col-md-6">
                        <div className='question-answer shadow p-3'>
                            <iframe title="question" src={viewUrl}
                                className="img-fluid rounded-start w-100 " style={{ height: "400px" }} allow="autoplay"></iframe>
                            <button className="btn-style download-btn mt-3" ><a href={download} className="">Download Answer</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionDetails;