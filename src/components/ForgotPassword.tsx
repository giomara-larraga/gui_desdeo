import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';

export class ForgotPassword extends React.Component {
  constructor(props:any) {
    super(props);
}

render() {
  return (
    <div className='p-5'>
      <div className='text-center'>
        <h4 className='text-dark mb-4'>Forgot Your Password?</h4>
        <p className='mb-4'>
          We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!
        </p>
      </div>
      <Form className='user'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Button  className="w-100" variant="primary" type="submit">
          Reset Password
        </Button>
        <hr />
      </Form>
      <div className='text-center'>
        <a className='small' href='register.hmtl'>Create an Account</a>
      </div>
      <div className='text-center'>
        <a className='small' href='register.hmtl'>Already have an account? Login!</a>
      </div>
    </div>
  );
}
}

export default ForgotPassword;
