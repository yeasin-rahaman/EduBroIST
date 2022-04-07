import React, { useEffect, useState } from 'react';

import SyllabusCart from './SyllabusCart';
import spinner from './../../../Assets/Images/Infinity-1s-200px.svg'
const AllSyllabus = () => {

    const [syllabus, setSyllabus] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setSyllabus(data))
    }, [])





    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">Syllabus Collection</h1></div>
            {
                syllabus.length === 0 ?
                    <div className=" justify-content-center w-100 d-flex">
                        <img src={spinner} alt="" />

                    </div> :
                    <div className="row g-4">
                        {syllabus?.map((syllabus) => (

                            <SyllabusCart
                                key={syllabus.id}
                                data={syllabus}>

                            </SyllabusCart>

                        ))}
                    </div>
            }

        </div>
    );
};

export default AllSyllabus;