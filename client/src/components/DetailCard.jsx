import React, { useEffect} from 'react'
import { Container, Accordion, Spinner} from 'react-bootstrap'
import { Card, CardBody, Row, Col, CardTitle, CardSubtitle, Button, CardText, CardImg } from 'reactstrap'
import { MdOutlinePeopleAlt, MdSettings, MdDateRange } from "react-icons/md";
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import {fetchDataDetail, setButton, removeSelectedCars} from "../redux/actions/carsAction"
import { useDispatch, useSelector } from 'react-redux';

export default function DetailCard() {
    let { id } = useParams();
    const details = useSelector((state) => state.detail)
    const dispatch = useDispatch()
    const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })
    const btn = useSelector((state) => state.btn.button)

    useEffect(() => {
        if (id && id !== "") dispatch(fetchDataDetail(id))
        dispatch(setButton('Lanjutkan Pembayaran'))
        return () =>{
            dispatch(removeSelectedCars())
        }
    },[])

    return (
        <>
            <Container className='mt-5'>
                <Row>
                    <Col xl='8'>
                        <Card>
                            <CardBody>
                                <h6>Tentang Paket</h6>
                                <p>Include</p>
                                <ul className='detailed-item'>
                                    <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                                    <li>Sudah termasuk bensin selama 12 jam</li>
                                    <li>Sudah termasuk Tiket Wisata</li>
                                    <li>Sudah termasuk pajak</li>
                                </ul>
                                <p>Exclude</p>
                                <ul className='detailed-item'>
                                    <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                    <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                    <li>Tidak termasuk akomodasi penginapan</li>
                                </ul>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header> <h6>Refund, Reschedule, Overtime</h6> </Accordion.Header>
                                        <Accordion.Body>
                                            <ul className='detailed-item'>
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
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl='4'>
                        {Object.keys(details).length === 0 ? 
                        <div class="d-flex justify-content-center">
                            <Spinner animation="border" variant="primary" style={{ width:'150px', height:'150px' }} />
                        </div> :
                        <Card>
                            <CardImg
                                alt="Card image cap"
                                src={details?.image}
                                top
                                width="100%"
                                style={{ maxHeight:'314px', minHeight:'314px', objectFit:"contain" }}
                            />
                            <div className="card-item">
                                <CardTitle tag="h5">
                                    {details?.name} / {details?.category}
                                </CardTitle>
                                <CardSubtitle className="mb-2 text-muted d-flex" tag="h6">
                                    <div className='d-flex'>
                                        <MdOutlinePeopleAlt />
                                        {details?.passengers} orang
                                    </div>
                                    <div className='d-flex ms-3'>
                                        <MdSettings />
                                        {details?.fuel}
                                    </div>
                                    <div className='d-flex ms-3'>
                                        <MdDateRange />
                                        Tahun {details?.startRent}
                                    </div>
                                </CardSubtitle>
                                <CardText>
                                    <div className='mt-5 d-flex justify-content-between'>
                                        <p>Total</p>
                                        <h6>{formatter.format(details?.price)}</h6>
                                    </div>
                                </CardText>
                                <Link to={`/dashboard/cars/payment/${id}`}>
                                    <Button className='btn btn-success'>
                                        {btn}
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                        }
                    </Col>
                </Row>
                <div className="text-center">
                    <Link to={`/dashboard/cars/payment/${id}`}>
                        <Button className='btn btn-secondary mt-3' style={{ backgroundColor:'#5CB85F', borderRadius:'2px', marginLeft:'17%' }}>
                            Lanjutkan Pembayaran
                        </Button>
                    </Link>
                </div>
            </Container>
        </>
    )
}
