import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, NavLink, Outlet } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './Dashboard.css';
import { FaThLarge, FaUser, FaBookmark, FaCommentDots, FaSignOutAlt, FaTasks, FaUserShield, FaSchool } from 'react-icons/fa'

const Dashboard = () => {
    const { userLogOut } = useFirebase()
    return (
        <div className='dashboard'>
            <Row>
                <Col md={2}>
                    <div className="dashboard-menu shadow px-3 py-4">
                        <div className="logo mb-4">
                            <h4>Edu Bro.</h4>
                        </div>
                        <ul>
                            <li>
                                <NavLink to={`welcome`} style={({ isActive }) => ({
                                    color: isActive ? "#da942c;" : "black",
                                })}><FaThLarge className='me-1' /> Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to={`user-profile`} style={({ isActive }) => ({
                                    color: isActive ? "#da942c" : "black",
                                })}><FaUser className='me-1' /> Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to={`my-questions`} style={({ isActive }) => ({
                                    color: isActive ? "#da942c" : "black",
                                })}><FaBookmark className='me-1' /> My Questions</NavLink>
                            </li>
                            <li>
                                <NavLink to={`my-assignments`} style={({ isActive }) => ({
                                    color: isActive ? "#da942c" : "black",
                                })}><FaBookmark className='me-1' /> My Assignments</NavLink>
                            </li>
                            <li>
                                <NavLink to={`my-labs`} style={({ isActive }) => ({
                                    color: isActive ? "#da942c" : "black",
                                })}><FaBookmark className='me-1' /> My Labs</NavLink>
                            </li>
                            <li>
                                <NavLink to={`my-notes`} style={({ isActive }) => ({
                                    color: isActive ? "#da942c" : "black",
                                })}><FaBookmark className='me-1' /> My Notes</NavLink>
                            </li>
                            <li>
                                <NavLink to={`my-books`} style={({ isActive }) => ({
                                    color: isActive ? "#da942c" : "black",
                                })}><FaCommentDots className='me-1' /> My Books</NavLink>
                            </li>
                            <li>
                                <NavLink to={`my-syllabus`} style={({ isActive }) => ({
                                    color: isActive ? "#da942c" : "black",
                                })}><FaSchool className='me-1' /> My Syllabus</NavLink>
                            </li>
                            <li>
                                <NavLink to={`my-blogs`} style={({ isActive }) => ({
                                    color: isActive ? "#da942c" : "black",
                                })}><FaTasks className='me-1' /> My Blogs</NavLink>
                            </li>
                            <li>
                                <NavLink to={`user-review`} style={({ isActive }) => ({
                                    color: isActive ? "#da942c" : "black",
                                })}><FaBookmark className='me-1' /> user review</NavLink>
                            </li>
                            <li>
                                <NavLink to={`my-notes`} style={({ isActive }) => ({
                                    color: isActive ? "#da942c" : "black",
                                })}><FaUserShield className='me-1' /> My Notes</NavLink>
                            </li>

                            {/* <li>
                                <NavLink to={`pending-questions`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaCommentDots className='me-1' /> Pending Questions</NavLink>
                            </li>
                            <li>
                                <NavLink to={`add-depertments`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaSchool className='me-1' /> Add Depertment</NavLink>
                            </li> */}

                            {/* {admin && <div> */}
                            {/* <li>
                                <NavLink to={`manage-questions`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaTasks className='me-1' /> Manage Questions</NavLink>
                            </li>
                            <li>
                                <NavLink to={`make-admin`} style={({ isActive }) => ({
                                    color: isActive ? "#B22222" : "black",
                                })}><FaUserShield /> Make Admin</NavLink>
                            </li> */}
                            {/* </div>} */}

                            <Link to={'/'}><li onClick={userLogOut} className='dashboard-logOut'>
                                <FaSignOutAlt className='me-1' /> Log Out
                            </li></Link>
                        </ul>
                    </div>
                </Col>
                <Col md={10} className='px-5 py-5'>
                    <Outlet />
                </Col>
            </Row>
        </div >
    );
};

export default Dashboard;