import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { googleProvider } from '../firebase/firebase';

function Login() {
    const {email,password,setEmail,setPassword,handleLogin} = useContext(AppContext);
    const navigate = useNavigate();
    return (
        <Form className='loginStyle' onSubmit={(e)=> handleLogin(e,navigate)}>
            <h1>Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" 
                value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" 
                value={password} onChange={(e)=> setPassword(e.target.value)}/>
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            <Button className='ms-2' variant="danger" onClick={()=> {googleProvider(navigate)}} >
                With Google
            </Button>
        </Form>
    );
}

export default Login;