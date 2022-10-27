import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

import { Carousel } from 'react-bootstrap';
import Rating from 'react-rating';

const BooksDetails = () => {

    /*    console.log(downloaded)
       console.log(viewUrle) */



    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams({});

    const { user } = useAuth()
    const [selected, setSelected] = useState({});

    const [reviews, setReviews] = useState([])



    useEffect(() => {
        fetch(`https://edubro.herokuapp.com/allBooks/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setSelected(data)
                reset(data)

            });
    }, [id, reset]);




    useEffect(() => {
        fetch(`https://edubro.herokuapp.com/review/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setReviews(data)
                reset(data)

            });
    }, [id, reset]);



    const onSubmit = data => {
        data.bookId = id
        data.googleId = user.googleId
        data.userName = user.displayName
        data.email = user.email


        fetch(`https://edubro.herokuapp.com/addReview`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)

                alert('order confirmed')
            });

    };

    const download = `https://drive.google.com/u/0/uc?id=${selected.googleId}&export=download`
    const viewUrl = `https://drive.google.com/file/d/${selected.googleId}/preview`



    return (

        <div className="col">
            <div className="card custom-cart h-100 hover">
                <iframe title="question" src={selected?.viewUrl}
                    className="img-fluid rounded-start w-100 " style={{ height: "500px" }} allow="autoplay"></iframe>
                <div className="card-body">
                    <h5 className="card-title"><b>Book Name:</b> {selected?.bookName}</h5>
                    <h5 className="card-title"><b>Author:</b> {selected?.author}</h5>
                    <h5 className="card-title"><b>Subject:</b> {selected?.subject}</h5>
                    <h5 className="card-title"><b>Edition:</b> {selected?.edition}</h5>
                    <h5 className="card-text "><b>Year:</b> {selected?.year}</h5>
                    <h5 className="card-text "><b>Year:</b> {selected?.rating}</h5>

                </div>

                <div className="d-flex justify-content-around pt-5" >
                    <div className="btn btn-success me-5 " ><a href={download} className="">Download</a></div>
                    <div className="btn btn-danger ms-5" ><a href={viewUrl} className="">Show</a></div>
                </div>

                <section>
                    <div className="">
                        <div className="row">
                            <div className='col-md-6 add-service d-flex '>

                                <div className="  text-dark pb-5 pt-1 justify-content-center">
                                    <div className="text-center text-danger pt-5 pb-3">
                                        <h4 >Customer Reviews</h4>
                                    </div>
                                    <hr />






                                    {reviews?.map(
                                        review =>
                                            <li>
                                                <h6 className="color-white text-white"><i class="fas fa-arrow-right"></i> Name : {review?.name}</h6>
                                                <p>{review?.time}</p>
                                                <br />
                                                <p>  {review?.review}</p>
                                            </li>
                                    )
                                    }


                                </div>
                            </div>


                            <div className='col-md-6 add-service d-flex justify-content-center'>

                                <br />

                                <form onSubmit={handleSubmit(onSubmit)}
                                    className="contact1-form validate-form">
                                    <h3 className="text-white mb-4">Submit Your Review here</h3>

                                    <div className="wrap-input1 validate-input " data-validate="Name is required">
                                        <input className="input1 " value={user.displayName} {...register("name")} />
                                    </div>

                                    <div className="wrap-input1 validate-input" data-validate="Message is required">
                                        <textarea className="input1 " placeholder="Description"{...register("review",)} />
                                        <span className="shadow-input1"></span>
                                    </div><div className="wrap-input1 validate-input " data-validate="Name is required">
                                        <input className="input1 " min="1" max="5" placeholder="rating" type="number" {...register("rating")} />
                                    </div>

                                    <div className="container-contact1-form-btn">
                                        <button type='submit' className="contact1-form-btn">
                                            <span>
                                                Post Review
                                                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                            </span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>







            </div>
        </div>


    );
};

export default BooksDetails;