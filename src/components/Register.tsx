import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';

export class Register extends React.Component {
  constructor(props:any) {
    super(props);
}

render() {
  return (
    <div className='p-5'>
      <div className='text-center'>
        <h4 className='text-dark mb-4'>Create an Account</h4>
      </div>
      <Form className='user'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember me" />
        </Form.Group>
        <Button  className="w-100" variant="primary" type="submit">
          Sign Up
        </Button>
        <hr />
      </Form>
      <div className='text-center'>
        <a className='small' href='register.hmtl'>Forgot Password?</a>
      </div>
      <div className='text-center'>
        <a className='small' href='register.hmtl'>Already have an account? Login</a>
      </div>
    </div>
  );
}
}

export default Register;
