import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import AssignmentSolveCart from './AssignmentSolveCart';
import file from './../../../Assets/Images/file.png'
import { Swal } from 'sweetalert2/dist/sweetalert2';

const AssignmentSolve = () => {
    const { user } = useFirebase()
    const { id } = useParams()
    const [assignment, setAssignment] = useState({})
    const { register, handleSubmit, reset } = useForm();
    const [AssignmentSolves, setAssignmentSolves] = useState([])
    console.log('assignment solve ', AssignmentSolves);

    let googleId = assignment?.driveLink?.slice(32, 65);

    const download = `https://drive.google.com/u/0/uc?id=${googleId}&export=download`
    const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`




    const onSubmit = data => {
        data.assignmentId = id
        data.userName = user.displayName
        data.email = user.email
        data.subject = assignment.subject
        data.year = assignment.year
        data.code = assignment.code
        data.department = assignment.department

        // post solve 

        fetch(`https://edubro.herokuapp.com/addAssignmentSolve`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'Success',
                    title: 'Assignment Submitted Successfully',
                    showConfirmButton: false,
                    timer: 4000
                })


                reset()
            });

    };


    // get assignment 

    useEffect(() => {
        fetch(`https://edubro.herokuapp.com/assignment/${id}`)
            .then(res => res.json())
            .then(data => {
                setAssignment(data)

            })
    }, [id, reset])



    // get solve 
    useEffect(() => {
        fetch(`https://edubro.herokuapp.com/assignmentSolve/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setAssignmentSolves(data)
            });
    }, [id, reset,]);



    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card custom-cart h-100 hover d-flex justify-content-center ">
                            {
                                viewUrl ?

                                    <img src={file} className="img-fluid w-50 " alt="" />
                                    :
                                    <iframe title="assignment" src={viewUrl}
                                        className="img-fluid rounded-start w-100 " style={{ height: "220px" }} allow="autoplay">

                                    </iframe>

                            }
                            <div className="card-body">
                                <h4 className="card-title mb-3">{assignment?.subject}</h4>
                                <div className='d-flex justify-content-between'>
                                    <h5 className="card-title">Subject: </h5>
                                    <h5 className="card-title">Department: {assignment?.department}</h5>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <h5 className="card-title">Subject Code: {assignment?.code}</h5>
                                    <h5 className="card-text ">Year: {assignment?.year}</h5>
                                </div>
                                <button className="btn-style download-btn d-flex mx-auto" ><a href={download} className="">Download</a></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h2 className='text-capitalize mb-4'>Submit your Assignment here</h2>
                        <div className="login-form text-center">
                            <form onSubmit={handleSubmit(onSubmit)}>

                                <input className='w-75 mb-3'  {...register("name", { required: true })} placeholder='Your Name' /> <br />
                                <input className='w-75 mb-3'  {...register("role", { required: true })} placeholder='Your Role' /> <br />
                                <input className='w-75 mb-3' {...register("solveDriveLink", { required: true })} placeholder='assignment Link' /> <br />
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

                    {AssignmentSolves.length ? <div className="row row-cols-1 row-cols-md-3 g-4">
                        {AssignmentSolves?.map((AssignmentSolve) => (
                            <AssignmentSolveCart
                                key={AssignmentSolve.id}
                                data={AssignmentSolve}>

                            </AssignmentSolveCart>
                        ))}
                    </div> : <div><h5>Loading...</h5></div>}

                </div>
            </div>
        </div>
    );
};

export default AssignmentSolve;