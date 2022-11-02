
import React, { useEffect, useState } from 'react';
import LabsCart from './LabsCart'
import spinner from './../../../Assets/Images/Spinner.svg'

const AllLabs = () => {
    const [labs, setLabs] = useState([]);

    useEffect(() => {
        fetch('https://edubro.herokuapp.com/allLabs')
            .then(res => res.json())
            .then(data => setLabs(data))
    }, [labs])



    return (
        <div className="container text-black mt-5 mb-5" >
            <div className="d-flex my-5 justify-content-center"><h1 className="user-desire-question">Important Labs</h1></div>
            {
                labs.length === 0 ? <div className='text-center'>
                    <div className=" justify-content-center w-100 d-flex">
                        <img src={spinner} alt="" />
                    </div>
                </div> :
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {labs?.map((lab) => (

                            <LabsCart
                                key={lab.id}
                                data={lab}>

                            </LabsCart>

                        ))}
                    </div >
            }


        </div >


    );
};

export default AllLabs;