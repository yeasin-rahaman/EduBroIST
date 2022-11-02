import React from 'react';
import { Table } from 'react-bootstrap';
import { FaTrashAlt } from 'react-icons/fa';

const ManageQuestion = () => {
    return (
        <div className='manage-questions'>
            <h2>Manage Questions Admin Panel</h2>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Questions</th>
                        <th>Question Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>CSE 3rd semister Object Oriented Programming problem</td>
                        <td>Approved</td>
                        <td><button className='details-btn'>Approve</button> <FaTrashAlt className='btn-delete' /></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Accounting bba 1st year question 2018</td>
                        <td>pending</td>
                        <td><button className='details-btn'>approve</button><FaTrashAlt className='btn-delete' /></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td >c++ problem solving question 2021 DU</td>
                        <td>Approved</td>
                        <td><button className='details-btn'>approve</button><FaTrashAlt className='btn-delete' /></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td >statistics bba question 2020 national university</td>
                        <td>pending</td>
                        <td><button className='details-btn'>Approve</button><FaTrashAlt className='btn-delete' /></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default ManageQuestion;