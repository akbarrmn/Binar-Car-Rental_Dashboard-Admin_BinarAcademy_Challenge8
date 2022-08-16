import React from 'react'
import {Container, Navbar, Nav, Image, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Data } from '../App';

export default function Navbars() {
  const { user } = React.useContext(Data)

  const logout = () => {
    window.open("http://chapter7backend.herokuapp.com/auth/logout", "_self")
    window.localStorage.removeItem('token');
  }
  return (
      <>
        <Navbar expand="lg" className='navbar py-4' >
            <Container fluid className='main-container text-black'>
                <Link to='/'>
                <img src={'/images/logo.png'} alt="logo"></img>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home">Our Services</Nav.Link>
                    <Nav.Link href="#features">Why Us</Nav.Link>
                    <Nav.Link href="#pricing">Testimonial</Nav.Link>
                    <Nav.Link href="#pricing">FAQ</Nav.Link>
                    {user ?
                    <>
                      <Image src={user.hasOwnProperty("photos")? user.photos[0].value : "/images/icon/user.png" }
                      roundedCircle
                      style={{ width: '40px', height:'40px', marginLeft:'2rem', boxShadow: "0px 3px 7px 0px rgba(0, 0, 0, 0.5)" }}/>
                      <span style={{ padding:'8px' }}>{user ?user.displayName || user.username :null}</span>
                      <Button className='ms-3 btn btn-success register' onClick={logout}>Logout</Button>
                    </>
                    : 
                    <Link to='/login'>
                      <Button className='ms-3 btn btn-success register'>Register</Button>
                    </Link>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
      </>
    
  )
}
