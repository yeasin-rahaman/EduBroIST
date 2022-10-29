import React, { useEffect, useState } from 'react';
import { Swal } from 'sweetalert2/dist/sweetalert2';


const AdminQuestion = () => {


    const [questions, setQuestions] = useState([])
    console.log(questions)

    const [status, setStatus] = useState('')


    useEffect(() => {
        fetch(`https://edubro.herokuapp.com/getAllQuestions`)
            .then((res) => res.json())
            .then((data) => setQuestions(data));
    }, []);
    console.log(questions);


    const handleUpdate = (id) => {
        fetch(`https://edubro.herokuapp.com/QuestionStatusUpdate/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ status }),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        Swal.fire({
            position: 'top-center',
            icon: 'Success',
            title: 'Question Status Update',
            showConfirmButton: false,
            timer: 4000
        })

    }

    const handleSelectValue = (e) => {
        const statusData = (e.target.value).toLowerCase()
        setStatus(statusData)
    }

    return (
        < div className="container all-question-container" >
            <div className="text-center pb-3">
                <h1 className="mb-2 text-center pt-2">Total Questions <span style={{ color: "#da942c" }}>{questions?.length}</span>  </h1>
            </div>

            <table className="table table-gray" style={{ width: "100%" }}>
                <thead  >
                    <tr className="bg-dark text-white mb-3 p-2" style={{ question: "1px solid red" }}>

                        <th >Number</th>
                        <th >Subject</th>
                        <th >Uploader</th>

                        {/* <th >question Preview</th> */}
                        <th >Status</th>
                        <th >Update</th>
                    </tr>
                </thead>
                {questions?.map((question, index) => (
                    <tbody key={question._id}>
                        <tr role="row" style={{ question: "2px solid gray" }} >
                            <th scope="row">{index + 1}</th>
                            <td>{question.subject}</td>
                            <td>{question.email}</td>
                            {/* 
                    <td> <iframe title="question" src={download}
        className="img-fluid rounded-start w-100 " style={{ height: "50px" }} allow="autoplay"></iframe>
        </td> */}

                            <td>
                                <div >
                                    <select onChange={handleSelectValue} className="pending p-2 ">
                                        <option defaultValue={question.status}>{question.status}</option>
                                        <option defaultValue="approved">Approved</option>
                                        <option defaultValue="pending">Pending</option>
                                        <option defaultValue="cancelled">Cancelled</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <button className="btn-style" onClick={() => handleUpdate(question._id)}>update</button>
                            </td>
                        </tr>
                    </tbody>

                ))}
            </table>
        </div >
    );
};

export default AdminQuestion;