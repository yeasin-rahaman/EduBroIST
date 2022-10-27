import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';


import './Header.css'


const Header = () => {
    const { userLogOut, user, toggle, setToggle, handleClick, admin } = useFirebase()

    console.log(user.photoURL)

    return (

        <div className='header-area'>
            <Navbar expand="lg">
                <Container>
                    <NavLink onClick={handleClick} to="/" className='logo'><span>Edu Bro.</span></NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav onClick={handleClick} className="ms-auto menu d-flex align-items-center">

                            <Nav.Link as={NavLink} to="/questions" className='menu-item'>Questions</Nav.Link>
                            <Nav.Link as={NavLink} to="/assignments" className='menu-item'>Assignments</Nav.Link>
                            <NavDropdown className='me-3 menu-item' title="More" id="navbarScrollingDropdown" >
                                <NavDropdown.Item as={NavLink} to="/syllabus" >Syllabus</NavDropdown.Item>

                                <NavDropdown.Item as={NavLink} to="/blogs" >Blogs</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/notes" >Notes</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/labs" >Labs</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/books" >All BOOKS</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>


                            <Nav.Link as={NavLink} to="/contact" className='menu-item'>Contact</Nav.Link>
                            {admin ? <Nav.Link as={NavLink} to="/admin-dashboard/welcome" className='menu-item'>Admin Dashboard</Nav.Link> : ""}
                        </Nav>
                        {!user.email ? <Nav.Link as={NavLink} to="/login" className='menu-item'>
                            Login
                        </Nav.Link>
                            :

                            <>
                                <Nav.Link as={NavLink} to="/dashboard/welcome" className='menu-item'>Dashboard</Nav.Link>
                                <img onClick={() => setToggle(!toggle)} src={user.photoURL ? user.photoURL : 'https://i.ibb.co/Xsnkx3L/user.png'} alt="user" className="user-image" />
                            </>
                        }


                        {user.displayName && <div className={toggle ? "toggle-menu shadow-lg active" : "toggle-menu"}>

                            <Link to={'/'}><li onClick={userLogOut}>Log Out</li></Link>
                        </div>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header; 