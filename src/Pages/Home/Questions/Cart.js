import React from 'react';
import './Cart.css'
const Cart = ({ data }) => {
    const { url, subject, year, semester, code } = data


    console.log(url)

    let googleId = url.slice(32, 65);
    console.log(googleId)
    const download = `https://drive.google.com/u/0/uc?id=${googleId}&export=download`
    const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`


    return (
        <div className="col">
            <div className="card custom-cart h-100 hover">
                <iframe title="question" src={viewUrl}
                    className="img-fluid rounded-start w-100 " style={{ height: "500px" }} allow="autoplay"></iframe>
                <div className="card-body">
                    <h5 className="card-title"><b>Subject Name:</b> {subject}</h5>
                    <h5 className="card-title"><b>Subject Code:</b> {code}</h5>
                    <h5 className="card-title"><b>Semester:</b> {semester}</h5>
                    <h5 className="card-text "><b>Year:</b> {year}</h5>
                    <div className="btn btn-success me-5 " ><a href={download} className="ahref">Download</a></div>
                    <div className="btn btn-danger ms-5" ><a href={viewUrl} className="ahref">Show</a></div>
                </div>
            </div>
        </div>
    );
};

export default Cart;