import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
//import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/desdeo_logo.png';
import { Link } from 'react-router-dom';

interface StateLP {
  isLogginActive: boolean;
  isRegisterActive: boolean;
  isPwdActive: boolean;
}

export class LandingPage extends React.Component <{}, StateLP> {
  constructor(props:any) {
    super(props);
    this.state = {
      isLogginActive: true,
      isRegisterActive: false,
      isPwdActive: false,
    };
    // Binding this keyword
    this.handleLogin = this.handleLogin.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.handlePwd = this.handlePwd.bind(this)
  }
  handleLogin(){
    // Changing state
    this.setState({isLogginActive : true})
    this.setState({isRegisterActive : false})
    this.setState({isPwdActive : false})
  }
  handleRegister(){
    // Changing state
    this.setState({isRegisterActive : true})
    this.setState({isLogginActive : false})
    this.setState({isPwdActive : false})
  }
  handlePwd(){
    // Changing state
    this.setState({isPwdActive : true})
    this.setState({isLogginActive : false})
    this.setState({isRegisterActive : false})
  }
  componentDidMount() {
    document.body.style.backgroundColor = "linear-gradient(90deg, #FFC0CB 50%, #00FFFF 50%)"
  }

render() {
  return (
    <Container fluid={true} className='h-100 p-0 m-0' style={{overflow:'hidden', display:'inline-block'}}>
      <Row className="align-content-stretch flex-wrap">
                <Col lg={8} className='d-none d-lg-flex flex-column h-100 my-5'>
                  <div className='flex-grow-1 p-3 bg-login-image'>
                    <div className='p-5'>
                      <div className='logo'>
                      <img
                          height="30"     
                          src={logo}
                          width="30"
                          className="d-inline-block align-top"
                          alt="DESDEO logo"
                        />
                        <strong>DESDEO</strong>
                      </div>
                      <h1 style={{color: "rgb(0,0,0)", fontSize:50, maxWidth:'65%', marginTop:'1rem', marginBottom:'2rem'}}>Enabling Better Decision Making</h1>
                      <p style={{textAlign: "left", transformOrigin: "bottom", marginBottom:'2rem', maxWidth:'55%'}}>
                      DESDEO brings interactive methods closer to researchers and practitioners worldwide by providing them with implementations of interactive methods.
                      It is a free and open-source Python-based framework for developing and experimenting with interactive multiobjective optimization. 
                      We welcome you to utilize DESDEO and develop it further with us.
                      </p>
                      <Link to="/dashboard">
                        <Button variant='primary' >Take a tour</Button>
                      </Link>
                      
                    </div>
                  </div>
                </Col>
                <Col lg={4} className='m-0 my-0' style={{backgroundColor:'rgba(203, 210, 229, 0.5)', display:'inline-block'}}>
                  {this.state.isLogginActive && (
                    <div className='p-5'>
                      <div className='text-center'>
                        <h4 className='text-dark mb-4'>Welcome to DESDEO</h4>
                      </div>
                      <Form className='user my-5'>
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
                        <Button className="w-100" variant="primary" style={{color:'white'}} type="submit">
                          Login
                        </Button>
                        <hr />
                      </Form>
                      <div className='text-link'>
                        <a onClick={() => this.handlePwd()}  style={{cursor:'pointer'}}>Forgot Password?</a>
                      </div>
                      <div className='text-link'>
                        <a onClick={() => this.handleRegister()}  style={{cursor:'pointer'}}>Create an Account</a>
                      </div>
                    </div>
                  )}
                  {this.state.isRegisterActive && (
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
                          <Button  className="w-100" variant="primary" style={{color:'white'}} type="submit">
                            Sign Up
                          </Button>
                          <hr />
                        </Form>
                        <div className='text-link'>
                          <a onClick={() => this.handlePwd()}  style={{cursor:'pointer'}}>Forgot Password?</a>
                        </div>
                        <div className='text-link'>
                          <a onClick={() => this.handleLogin()}  style={{cursor:'pointer'}}>Already have an account? Login</a>
                        </div>
                      </div>
                  )}
                  {this.state.isPwdActive && (
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
                          <Button  className="w-100" variant="primary" style={{color:"white"}} type="submit">
                            Reset Password
                          </Button>
                          <hr />
                        </Form>
                        <div className='text-link'>
                          <a  onClick={() => this.handleRegister()}  style={{cursor:'pointer'}}>Create an Account</a>
                        </div>
                        <div className='text-link'>
                          <a onClick={() => this.handleLogin()}  style={{cursor:'pointer'}}>Already have an account? Login!</a>
                        </div>
                      </div>
                  )}
                </Col>
              </Row>
    </Container>
  );
}
}

export default LandingPage;
