import React from 'react';

const AllNotesCart = ({ data }) => {
    const { topic, department, email, userName, subject, driveLink } = data

    let googleId = driveLink?.slice(32, 65);
    console.log(driveLink)


    const download = `https://drive.google.com/u/0/uc?id=${googleId}&export=download`
    const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`

    return (
        <div className="col-12">
            <div className="card custom-cart h-100 shadow">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <iframe title="question" src={viewUrl}
                            className="img-fluid rounded-start w-100 " style={{ height: "250px" }} allow="autoplay"></iframe>
                    </div>
                    <div className="col-md-4">
                        <div className="card-body">
                            <h5 className="card-title fs-3">{topic}</h5>
                            <h5 className="card-title "><b>Department:</b> <span className='department'> {department}</span></h5>
                            <h5 className="card-title"><b>Subject:</b> {subject}</h5>
                            <h5 className="card-title"><b>Edition:</b> {userName}</h5>
                            {/* <h5 className="card-text "><b>email:</b> {email}</h5> */}
                            <div className="d-flex justify-content-between pt-3" >
                                <button className="btn-style download-btn " ><a href={download} className="">Download</a></button>
                                <button className="btn-style download-btn " ><a href={viewUrl} className="">See Note</a></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default AllNotesCart;