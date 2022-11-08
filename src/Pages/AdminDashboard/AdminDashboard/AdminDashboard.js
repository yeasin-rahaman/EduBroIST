import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaThLarge, FaUser, FaBookmark, FaCommentDots, FaSignOutAlt, FaTasks, FaUserShield } from 'react-icons/fa'
import useFirebase from '../../../hooks/useFirebase';


const AdminDashboard = () => {
    const { admin, userLogOut } = useFirebase()

    console.log(admin)
    return (
        <div className='dashboard'>
            <Row>
                <Col md={2}>
                    <div className="dashboard-menu shadow px-3 py-4">
                        <div className="logo mb-4">
                            <h4>Admin Panel</h4>
                        </div>
                        <ul>
                            <li>
                                <NavLink to={`welcome`} style={({ isActive }) => ({
                                    color: isActive ? "#da942c" : "black",
                                })}><FaThLarge className='me-1' /> Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to={`my-assignments`} style={({ isActive }) => ({
                                    color: isActive ? "#da942c" : "black",
                                })}><FaBookmark className='me-1' /> My Assignments</NavLink>
                            </li>
                            <li>
                                <NavLink to={`admin-questions`} style={({ isActive }) => ({
                                    color: isActive ? "#da942c" : "black",
                                })}><FaBookmark className='me-1' /> Manage Questions</NavLink>
                            </li>
                            <li>
                                <NavLink to={`admin-assignments`} style={({ isActive }) => ({
                                    color: isActive ? "#da942c" : "black",
                                })}><FaBookmark className='me-1' /> Manage Assignments</NavLink>
                            </li>
                            <li>
                                <NavLink to={`admin-blogs`} style={({ isActive }) => ({
                                    color: isActive ? "#da942c" : "black",
                                })}><FaCommentDots className='me-1' /> Manage Blogs</NavLink>
                            </li>
                            <li>
                                <NavLink to={`admin-books`} style={({ isActive }) => ({
                                    color: isActive ? "#da942c" : "black",
                                })}><FaTasks className='me-1' /> Manage Books</NavLink>
                            </li>
                            <li>
                                <NavLink to={`admin-syllabus`} style={({ isActive }) => ({
                                    color: isActive ? "#da942c" : "black",
                                })}><FaTasks className='me-1' /> Manage Syllabus</NavLink>
                            </li>
                            <li>
                                <NavLink to={`admin-lab`} style={({ isActive }) => ({
                                    color: isActive ? "#da942c" : "black",
                                })}><FaTasks className='me-1' /> Manage Lab Report</NavLink>
                            </li>
                            <li>
                                <NavLink to={`admin-notes`} style={({ isActive }) => ({
                                    color: isActive ? "#da942c" : "black",
                                })}><FaUserShield className='me-1' /> Manage Notes</NavLink>
                            </li>
                            <li>
                                <NavLink to={`make-admin`} style={({ isActive }) => ({
                                    color: isActive ? "#da942c" : "black",
                                })}><FaUser className='me-1' /> Make Admin</NavLink>
                            </li>

                            <Link to={'/'}><li onClick={userLogOut} className='dashboard-logOut btn '>
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

export default AdminDashboard;