import React from 'react';

const LabsCart = ({ data }) => {

    const { labName, department, driveLink, subject, year, } = data
    let googleId = driveLink?.slice(32, 65);
    console.log(driveLink)

    const download = `https://drive.google.com/u/0/uc?id=${googleId}&export=download`
    const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`
    return (
        <div className="col">
            <div className="card custom-cart h-100 shadow">
                <iframe title="question" src={viewUrl}
                    className="img-fluid rounded-start w-100 " style={{ height: "250px" }} allow="autoplay"></iframe>
                <div className="card-body">
                    <h5 className="card-title fs-5"><b>Lab Report Name:</b> {labName}</h5>
                    <h5 className="card-title"><b>Department Name:</b> {department}</h5>

                    <h5 className="card-title"><b>Subject:</b> {subject}</h5>

                    <h5 className="card-text "><b>Year:</b> {year}</h5>
                    <div className="d-flex justify-content-around pt-5" >
                        <div className="btn-style download-btn me-5 " ><a href={download} className="">Download</a></div>
                        <div className="btn-style download-btn ms-5" ><a href={viewUrl} className="">Show</a></div>

                    </div>

                </div>

            </div>





        </div>
    );
};

export default LabsCart;  
