import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

function Register() {
    const {name,email,password,lname,setEmail,setPassword,setName,setLname,handleRegister} = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <Form className='registerStyle' onSubmit={(e)=>handleRegister(e,navigate)}>
            <h1>Register</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='fw-bold'>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Name" value={name} onChange={(e)=> setName(e.target.value)}/>
                <Form.Label className='fw-bold'>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Last Name" value={lname} onChange={(e)=> setLname(e.target.value)}/>
                <Form.Label className='fw-bold'>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" 
                value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='fw-bold'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" 
                value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Register;