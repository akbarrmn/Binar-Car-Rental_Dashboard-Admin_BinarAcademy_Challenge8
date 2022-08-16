import React, { useState } from 'react'
import { Container, Accordion} from 'react-bootstrap'
import { Card, CardBody, Row, Col, CardTitle, CardSubtitle, Button } from 'reactstrap'
import { MdOutlinePeopleAlt, MdSettings, MdDateRange, MdOutlineCheck } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function DetailCard() {
    const [bca, setBCA] = useState(false)
    const [bni, setBNI] = useState(false)
    const [mandiri, setMANDIRI] = useState(false)

    const handleClickBCA = ()=> {
        if (bca) {
            setBCA(false)
        }else{
            setBCA(true)
            setBNI(false)
            setMANDIRI(false)
        }  
    }
    const handleClickBNI = ()=> {
        if (bni) {
            setBNI(false)
        }else{
            setBCA(false)
            setBNI(true)
            setMANDIRI(false)
        }  
    }
    const handleClickMANDIRI = ()=> {
        if (mandiri) {
            setMANDIRI(false)
        }else{
            setBCA(false)
            setBNI(false)
            setMANDIRI(true)
        }  
    }

    return (
        <>
            
            <Container className='mt-5'>
                <Row>
                    <Col xl='7'>
                        <Card>
                            <CardBody className='pt-4'>
                                <h6>Pilih Bank Transfer</h6>
                                <p>Kamu bisa membayar dengan transfer melalui ATM, Internet Banking atau Mobile Banking</p>
                                <div className='d-flex flex-column'>
                                    <div className='payment mt-2 d-flex justify-content-between' onClick={() => handleClickBCA()}>
                                        <div className='content-text' >
                                            <Button className='bank me-4'>BCA</Button> 
                                            BCA Transfer
                                        </div>
                                        {bca && <MdOutlineCheck style={{ color:'green', fontSize:'2rem'}}/>}
                                    </div>
                                    <hr/>
                                    <div className='payment mt-2 d-flex justify-content-between' onClick={() => handleClickBNI()}>
                                        <div className='content-text'>
                                            <Button className='bank me-4'>BNI</Button> 
                                            BNI Transfer
                                        </div>
                                        {bni && <MdOutlineCheck style={{ color:'green', fontSize:'2rem'}}/>}
                                    </div>
                                    <hr />
                                    <div className='payment mt-2 d-flex justify-content-between' onClick={() => handleClickMANDIRI()}>
                                        <div className='content-text' >
                                            <Button className='bank me-4'>Mandiri</Button>
                                            Mandiri Transfer
                                        </div>
                                        {mandiri && <MdOutlineCheck style={{ color:'green', fontSize:'2rem'}}/>}
                                    </div>
                                    <hr />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl='5'>
                        <Card>
                            <div className="card-item">
                                <CardTitle tag="h5">
                                    Nama / Tipe Mobil
                                </CardTitle>
                                <CardSubtitle className="mb-2 text-muted d-flex" tag="h6">
                                    <div>
                                        <MdOutlinePeopleAlt />
                                        <span>4 orang</span>
                                    </div>
                                    <div className='ms-3'>
                                        <MdSettings />
                                        <span>Manual</span>
                                    </div>
                                    <div className='ms-3'>
                                        <MdDateRange />
                                        <span>Tahun 2020</span>
                                    </div>
                                </CardSubtitle>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Row>
                                            <Col xl='4'>
                                                <Accordion.Header className='payment-button'> <h6>Total</h6></Accordion.Header>
                                            </Col>
                                            <Col xl='8' >
                                                <div style={{ paddingTop:'16px' }}> <h6 style={{ float:'right' }}>Rp. 450.000</h6> </div>
                                            </Col>
                                        </Row>
                                            <Accordion.Body>
                                                    <h6>Harga</h6>
                                                    <ul><li>1 Mobil dengan sopir</li></ul>
                                                    <h6>Biaya Lainnya</h6>
                                                    <ul><li>Pajak</li><li>Biaya makan supir</li></ul>
                                                    <h6>Biaya Termasuk</h6>
                                                    <ul><li>Bensin</li><li>Tol dan parkir</li></ul>
                                            </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                                <hr/>
                                <div className='mt-5 d-flex justify-content-between'>
                                        <p>Total</p>
                                        <h6>Rp. 450.000</h6>
                                </div>
                                <Link to='/dashboard/cars/payout'>
                                    <Button className='btn btn-success'>
                                        Bayar
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    </Col>
                </Row>

            </Container>

        </>
    )
}
