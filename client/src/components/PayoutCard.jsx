import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Card, CardBody, Row, Col, CardText, Button, FormGroup, Label, Input, Fade } from 'reactstrap'
import { Link } from 'react-router-dom';
import HeaderPayment from './HeaderPayment';


export default function DetailCard() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <HeaderPayment/>
            <Container className='mt-5'>
                <Row>
                    <Col xl='7'>
                        <Card>
                            <CardBody className='pt-4'>
                                <div className="content d-flex justify-content-between">
                                    <div className='desc'>
                                        <h6>Selesaikan Pembayaran Sebelum</h6>
                                        <p>Rabu, 19 Jun 2022 jam 13.00 WIB</p>
                                    </div>
                                    <div className="time">
                                        23:55:00
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                        <Card className='mt-4'>
                            <CardBody className='pt-4'>
                                <h6>Lakukan Transfer Ke</h6>
                                <div className='d-flex'>
                                    <div><Button className='bank me-4'>BCA</Button></div>
                                    <div>
                                        <h6>BCA Transfer</h6>
                                        <p>a.n Binar Car Rental</p>
                                    </div>
                                </div>
                                <FormGroup>
                                    <Label for="rekening">
                                        No Rekening
                                    </Label>
                                    <Input
                                        id="rekening"
                                        name="rekening"
                                        placeholder="xxxx-xxxx-xxxx"
                                        type="text"
                                    />
                                    <Label for="bayar" className='mt-3'>
                                        Total Bayar
                                    </Label>
                                    <Input
                                        id="bayar"
                                        name="bayar"
                                        placeholder="Rp 230.000"
                                        type="text"
                                    />
                                </FormGroup>
                            </CardBody>
                        </Card>
                        <Card className='mt-4'>
                            <CardBody className='pt-4'>
                                <div className='desc'>
                                    <h6>Instruksi Pembayaran</h6>
                                </div>
                                <div className="">
                                    <Button color="success" style={{ background:'none', color:'black', border:'none', boxShadow:'0px 2px 0px #5CB85F' }} onClick={() => {
                                        setIsOpen(!isOpen)
                                    }}>ATM BCA</Button>
                                    <Fade in={isOpen}>
                                        <ul className='mt-3' style={{ paddingLeft:'1.2rem' }}>
                                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                            <li>Tidak termasuk akomodasi penginapan</li>
                                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                            <li>Tidak termasuk akomodasi penginapan</li>
                                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                            <li>Tidak termasuk akomodasi penginapan</li>
                                        </ul>
                                    </Fade>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl='5'>
                        <Card>
                            <div className="card-item">
                                <CardText className='fs-6'>
                                    Klik konfirmasi pembayaran untuk mempercepat proses pengecekan
                                </CardText>
                                <Link to='/dashboard'>
                                    <Button className='btn btn-success'>
                                        Konfirmasi Pembayaran
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
