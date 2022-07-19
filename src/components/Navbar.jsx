import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink} from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { logout } from '../firebase/firebase';


function OffcanvasExample() {
    const {searching, setSearching,searchingMovies,user} = useContext(AppContext);
    return (
        <>
            {['lg'].map((expand) => (
                <Navbar key={expand} bg="light" expand={expand} className="mb-3">
                    <Container fluid>
                        <Navbar.Brand href="/">Movie App</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Movie App
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <NavLink to="/login" className="nav-link">Login</NavLink>
                                    <NavLink to="/register" className="nav-link">Register</NavLink>
                                </Nav>
                                <Form className="d-flex" onSubmit={searchingMovies}>
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                        onChange={(e)=> setSearching(e.target.value)}
                                        value={searching}
                                    />
                                    <Button variant="outline-success">Search</Button>
                                </Form>
                                {/* <p>{user.email}</p> */}
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <NavLink to="/" className="nav-link" onClick={logout}>Logout</NavLink>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    );
}

export default OffcanvasExample;