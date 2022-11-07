import React from 'react';

const SyllabusCart = ({ data }) => {


    const { year, syllabusName, driveLink } = data

    let googleId = driveLink?.slice(32, 65);
    console.log(driveLink)

    const download = `https://drive.google.com/u/0/uc?id=${googleId}&export=download`
    const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`
    return (
        <div className="col-12 col-md-4">
            <div className="card custom-cart h-100 shadow">
                <iframe title="question" src={viewUrl}
                    className="img-fluid rounded-start w-100 " style={{ height: "330px" }} allow="autoplay"></iframe>
                <div className="card-body mt-3">
                    <h5 className="card-title fs-6 ">{syllabusName}</h5>
                    <h5 className="card-title"><b>Year</b> {year}</h5>

                    <div className='mt-3'>
                        <button className="btn-style download-btn " ><a href={download} className="">Download</a></button>
                        <button className="btn-style download-btn " ><a href={viewUrl} className="">See Syllabus</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SyllabusCart;