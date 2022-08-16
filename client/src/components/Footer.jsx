import React from 'react'
import { Row, Col } from 'react-bootstrap'


export default function Footer() {
  return (
    <footer>
        <div className='main-container'>
            <Row>
                    <Col xl='3' md='6' sm='6' className='address'>
                        <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                        <p>binarcarrental@gmail.com</p>
                        <p>081-233-334-808</p>
                    </Col>
                    <Col xl='3' md='6' sm='6' style={{ paddingLeft:'6%' }} className='menu'>
                        <a href="/" className='text-decoration'>
                            <p className="text-dark">Our services</p>
                        </a>
                        <a href="/" className='text-decoration'>
                            <p className="text-dark">Why Us</p>
                        </a>
                        <a href="/" className='text-decoration'>
                            <p className="text-dark">Testimonial</p>
                        </a>
                        <a href="/" className='text-decoration'>
                            <p className="text-dark">FAQ</p>
                        </a>
                    </Col>
                    <Col xl='3' md='6' sm='6' className='social'>
                        <div className="connect">
                            <p>Connect with us</p>
                        </div>
                        <div className="social-media">
                            <a href="/" ><img src='/images/icon/icon_facebook.png' alt='fb'></img></a>
                            <a href="/" className='ps-2'><img src='/images/icon/icon_instagram.png' alt='ig'></img></a>
                            <a href="/" className='ps-2'><img src='/images/icon/icon_twitter.png' alt='twt'></img></a>
                            <a href="/" className='ps-2'><img src='/images/icon/icon_mail.png' alt='email'></img></a>
                            <a href="/" className='ps-2'><img src='/images/icon/icon_twitch.png' alt='twitch'></img></a>
                        </div>
                    </Col>
                    <Col xl='3' md='6' sm='6' style={{ paddingLeft:'6%' }} className='copyright'>
                        <p>Copyright Binar 2022</p>
                        <img src='/images/logo.png' alt="logo" style={{ width:'50%' }}></img>
                    </Col>
            </Row>
        </div>
    </footer>
  )
}
