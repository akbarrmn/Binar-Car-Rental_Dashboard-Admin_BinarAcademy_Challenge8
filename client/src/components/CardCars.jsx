import React, { useEffect } from 'react'
import { CardGroup, Card, CardText, Button, CardImg, Row, Col, Container, Spinner } from 'reactstrap'
import { MdOutlinePeopleAlt, MdSettings, MdDateRange } from "react-icons/md";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setButton } from '../redux/actions/carsAction';

export default function CarCard() {
    const dispatch = useDispatch()
    const formatter = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" })
    const carsSearch = useSelector((state) => state.carsFilter.carsSearch)
    const btn = useSelector((state) => state.btn.button)

    useEffect(() => {
        dispatch(setButton('Pilih Mobil'))
    },[]);
    
    return (
        <>
            <Container>
                <CardGroup className='mt-5'>
                    <Row className='w-100'>
                    {
                        Object.keys(carsSearch).length === 0 ? 
                        <div class="d-flex justify-content-center">
                            <Spinner color="primary" style={{ width:'150px', height:'150px' }} />
                        </div> :
                        carsSearch.map((item) => {
                            return (
                                <>
                                    <Col xl="4" md='6' sm='12' className='mt-3' >
                                        <Card className='cars-cards' id={item.id} style={{ height:'660px', width:'416px', objectFit:'contain' }}>
                                            <div className='card-wrap w-100'>
                                                <div >
                                                    <CardImg
                                                        alt="Card image"
                                                        src={item.image}
                                                        style={{ maxHeight:'314px', minHeight:'314px', objectFit:"contain" }}
                                                    />
                                                </div>
                                                <div className="card-item">
                                                    <CardText>
                                                        <p className='mb-2'>{item.name} / {item.category}</p>
                                                        <h5>{formatter.format(item.price)} / hari </h5>
                                                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, porro voluptas aut dolorum eveniet repellat?</p>
                                                        <div>
                                                            <MdOutlinePeopleAlt />
                                                            <span className='ms-2'>{item.passengers} orang</span>
                                                        </div>
                                                        <div >
                                                            <MdSettings />
                                                            <span className='ms-2'>{item.fuel}</span>
                                                        </div>
                                                        <div >
                                                            <MdDateRange />
                                                            <span className='ms-2'>Tahun {item.startRent}</span>
                                                        </div>
                                                    </CardText>
                                                    <Link to={`/dashboard/cars/detail/${item.id}`}>
                                                        <Button className='btn btn-success' style={{ height: '48px', width:'100%', background:'#5CB85F' }}>
                                                            {btn}
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                </>
                            )
                        }) 
                    }
                </Row>
            </CardGroup>
        </Container>
        </>

    )
}
