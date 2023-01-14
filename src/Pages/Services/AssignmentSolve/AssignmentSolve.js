import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import AssignmentSolveCart from './AssignmentSolveCart';
import file from './../../../Assets/Images/file.png'
import spinner from './../../../Assets/Images/Spinner.svg'
import Swal from 'sweetalert2/dist/sweetalert2';

const AssignmentSolve = () => {
    const { user } = useFirebase()
    const { id } = useParams()
    const [assignment, setAssignment] = useState({})
    const { register, handleSubmit, reset } = useForm();
    const [AssignmentSolves, setAssignmentSolves] = useState([])
    const [counter, setCounter] = useState(false)
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

        fetch(`https://edubroist.onrender.com/addAssignmentSolve`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                Swal.fire({
                    position: 'top-center',
                    icon: 'Success',
                    title: 'Assignment Submitted Successfully',
                    timer: 4000
                })

            });
        reset()
        setCounter(!counter)
    };


    // get assignment 
    useEffect(() => {
        fetch(`https://edubroist.onrender.com/assignment/${id}`)
            .then(res => res.json())
            .then(data => {
                setAssignment(data)

            })
    }, [id])



    // get solve 
    useEffect(() => {
        fetch(`https://edubroist.onrender.com/assignmentSolve/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setAssignmentSolves(data)
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
            const url = `https://edubroist.onrender.com/deleteAssignmentSolve/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {

                    if (data.deletedCount) {
                        const remaining = AssignmentSolves?.filter(AssignmentSolve => AssignmentSolve._id !== id);
                        setAssignmentSolves(remaining);
                    }
                })
        }
    }

    return (
        <div className='py-5'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card custom-cart h-100 hover d-flex justify-content-center ">
                            <div className="blog-image d-flex justify-content-center">
                                {
                                    viewUrl ?

                                        <iframe title="question" src={viewUrl}
                                            className="img-fluid rounded-start w-100 " style={{ height: "220px" }} allow="autoplay">

                                        </iframe>
                                        :
                                        <img src={file} className="img-fluid w-50 " alt="" />

                                }
                            </div>
                            <div className="card-body">

                                <div className="blog-text px-2 py-3">
                                    <h3>{assignment?.assignmentHeader}</h3>
                                    <br />
                                    <div className="blog-meta mb-1 d-flex justify-content-between">
                                        <h4>{assignment?.subject}</h4>
                                        <span>{assignment?.date}</span>
                                    </div>
                                    <div className='py-2 d-flex justify-content-between'>
                                        <span>Semester: {assignment?.semester}</span>

                                        <h4><span className='department'>{assignment?.department}</span></h4>
                                        <span>Subject Code: {assignment?.code}</span>
                                        {/* <span>Rating: <FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></span> */}
                                    </div>
                                    {/* <h4>{subject}</h4> */}
                                    <p>{assignment?.assignmentDetails}</p>
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
                                data={AssignmentSolve}
                                delete={handleSolveDeleteRequest}>
                            </AssignmentSolveCart>
                        ))}
                    </div> : <div>                       <div className=" justify-content-center w-100 d-flex">
                        <img src={spinner} alt="" />
                    </div></div>}

                </div>
            </div>
        </div>
    );
};

export default AssignmentSolve;