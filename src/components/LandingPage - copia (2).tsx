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
import { Carousel } from 'react-bootstrap';
import contributefigure from '../images/contribute.png';
import documentationfigure from '../images/learn.png';
import background from '../images/background-login-2.svg';
import loginfig from '../images/login.png';

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
    
    document.body.style.backgroundColor = "#d3d5f7"
    //document.body.style.backgroundImage = 'url("https://preview.hqtemplate.com/preview16/images/background-login-2.svg")'
    document.body.style.backgroundSize = "cover"
  }
render() {
  return (
    <Container>
      <div className='login-box' >
        <Row >
          <Col sm={4}>
            <div className='logo p-1'>
            <img
                          height="30"     
                          src={logo}
                          width="30"
                          className="d-inline-block align-top"
                          alt="DESDEO logo"
                        />
              <span className='logo-font'> DESDEO</span>
            </div>
          {this.state.isLogginActive && (
                    <div className='p-5'>
                      <div className='text-center'>
                        <h4 className='text-dark mb-4'>Welcome to DESDEO</h4>
                      </div>
                      <Form className='login-form'>
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
          <Col sm={8} className="hide-on-mobile">
            <Carousel className='carousel-login'>
              <Carousel.Item interval={5000} className='carousel-item-login'>
                <img
                  src="https://static.pexels.com/photos/33972/pexels-photo.jpg"
                  alt="Image One"
                  className='d-block img-fluid'
                />
                <Carousel.Caption>
                  <h3>Learn more about DESDEO</h3>
                  <p>Sample Text for Image One</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={5000} className='carousel-item-login'>
                <img
                  src={contributefigure}
                  alt="Contribute to DESDEO"
                  className='d-block img-fluid'
                />
                <Carousel.Caption>
                  <h3>Contribute to DESDEO</h3>
                  <p>Sample Text for Image Two</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </div>
        
    </Container>
  );
}
}

export default LandingPage;
