import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';

export class Login extends React.Component {
  constructor(props:any) {
    super(props);
}

render() {
  return (
    <div className='p-5'>
      <div className='text-center'>
        <h4 className='text-dark mb-4'>Welcome to DESDEO</h4>
      </div>
      <Form className='user'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>
        <hr />
      </Form>
      <div className='text-center'>
        <a className='small' href='forgot-password.hmtl'>Forgot Password?</a>
      </div>
      <div className='text-center'>
        <a className='small' href='register.hmtl'>Create an Account</a>
      </div>
    </div>
  );
}
}

export default Login;
