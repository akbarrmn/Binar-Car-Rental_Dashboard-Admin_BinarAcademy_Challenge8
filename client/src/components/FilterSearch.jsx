import React, {useState } from 'react'
import { Form, FormGroup, Label, Input, Button, Row, Col, Card, CardBody, Container } from 'reactstrap'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../redux/actions/carsAction';

export default function Filter() {
    const location = useLocation().pathname
    const dispatch = useDispatch()

    // Cars Data
    const cars = useSelector((state) => state.carsData.cars)
    const tahun = [...new Set(cars.map(cars => cars.startRent.split('-')[0]))].sort()
    const kategori = [...new Set(cars.map(cars => cars.category))].sort()
    const kapasitas = [...new Set(cars.map(cars => cars.passengers) )].sort()
    // Taking value from search Form
    const [mobil, setMobil] = useState('')
    const [carsCategory, setCarsCategory] = useState('')
    const [year, setYear] = useState('')
    const [passengers, setPassengers] = useState('')
    
    // Button Handle
    const handleSearch = () => {
        const newData = cars
        .filter(cars => cars.name === (mobil === '' ? cars.name : mobil))
        .filter(cars => cars.category === (carsCategory === '' ? cars.category : carsCategory))
        .filter(cars => cars.startRent.split('-')[0] === (year === '' ? cars.startRent.split('-')[0] : year))
        .filter(cars => cars.passengers === (passengers === '' ? cars.passengers : passengers))
        dispatch(setSearch(newData))
    }

    return (
        <>
            {!(location === '/dashboard') ? <header></header> : ''}
            {location === '/dashboard' || location === '/dashboard/cars' ?
                <Form>
                    <Container>
                        <Card className='search-card'>
                            <CardBody>
                                <Row>
                                    <Col xl='11'>
                                        <Row>
                                            <Col xl='3'>
                                                <FormGroup>
                                                    <Label for="exampleSelect">
                                                        Cars
                                                    </Label>
                                                    <Input
                                                        id="exampleSelect"
                                                        name="select"
                                                        type="select"
                                                        onChange={(e) => setMobil(e.target.value)}
                                                    >
                                                        <option disabled selected hidden value={''}>
                                                            Pilih Mobil
                                                        </option>
                                                        <option value={''}>
                                                            Semua
                                                        </option>
                                                        {
                                                        cars.map((item)=>{
                                                            return(
                                                                <option value={item.name}>
                                                                    {item.name}
                                                                </option>
                                                              )
                                                         })
                                                         } 
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                            <Col xl='3'>
                                            <FormGroup>
                                                    <Label for="exampleSelect2">
                                                        Category
                                                    </Label>
                                                    <Input
                                                        id="exampleSelect2"
                                                        name="select"
                                                        type="select"
                                                        onChange={(e) => setCarsCategory(e.target.value)}
                                                    >
                                                        <option disabled selected hidden value={''}>
                                                            Pilih Kategori
                                                        </option>
                                                        <option value={''}>
                                                            Semua
                                                        </option>
                                                        {
                                                        kategori.map((item)=>{
                                                            return(
                                                                <option value={item}>
                                                                    {item}
                                                                </option>
                                                              )
                                                         })
                                                         }
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                            <Col xl='3'>
                                                <FormGroup>
                                                    <Label for="exampleDate">
                                                        Date
                                                    </Label>
                                                    <Input
                                                        id="exampleSelect2"
                                                        name="select"
                                                        type="select"
                                                        onChange={(e) => setYear(e.target.value)}
                                                    >
                                                        <option disabled selected hidden value={''}>
                                                            Pilih Tahun
                                                        </option>
                                                        <option value={''}>
                                                            Semua
                                                        </option>
                                                        {
                                                        tahun.map((item)=>{
                                                            return(
                                                                <option value={item}>
                                                                    {item}
                                                                </option>
                                                              )
                                                         })
                                                         }
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                            <Col xl='3'>
                                                <FormGroup>
                                                    <Label for="exampleTime">
                                                        Capacity
                                                    </Label>
                                                    <Input
                                                        id="exampleSelect2"
                                                        name="select"
                                                        type="select"
                                                        onChange={(e) => setPassengers(e.target.value)}
                                                    >
                                                        <option disabled selected hidden value={''}>
                                                            Pilih Kapasitas
                                                        </option>
                                                        <option value={''}>
                                                            Semua
                                                        </option>
                                                        {
                                                        kapasitas.map((item)=>{
                                                            return(
                                                                <option value={Number(item)}>
                                                                    {item} orang
                                                                </option>
                                                              )
                                                         })
                                                         }
                                                    </Input>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col xl='1'>
                                        <Link to={`/dashboard/cars`}>
                                            <Button
                                                className='btn btn-success filterButton'
                                                onClick={() => handleSearch()}
                                            > Cari Mobil</Button>
                                        </Link>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Container>
                </Form>
                :
                <Form>
                    <Container>
                        <Card className='search-card'>
                            <CardBody>
                                <Row>
                                    <Col xl='3'>
                                        <FormGroup>
                                            <Label for="exampleSelect">
                                                Mobil
                                            </Label>
                                            <Input
                                                id="exampleSelect"
                                                name="select"
                                                type="select"
                                                disabled
                                            >
                                                <option disabled selected hidden>
                                                    Pilih Mobil
                                                </option>
                                                {
                                                    cars.map((item)=>{
                                                        return(
                                                            <option value={item.name}>
                                                                {item.name}
                                                            </option>
                                                            )
                                                        })
                                                } 
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col xl='3'>
                                        <FormGroup>
                                            <Label for="exampleDate">
                                                Date
                                            </Label>
                                            <Input
                                                id="exampleDate"
                                                name="date"
                                                placeholder="date placeholder"
                                                type="date"
                                                disabled
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col xl='3'>
                                        <FormGroup>
                                            <Label for="exampleTime">
                                                Waktu Jemput
                                            </Label>
                                            <Input
                                                id="exampleTime"
                                                name="time"
                                                placeholder="time placeholder"
                                                type="time"
                                                disabled
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Col xl='3'>
                                        <FormGroup>
                                            <Label for="penumpang">
                                                Jumlah Penumpang (optional)
                                            </Label>
                                            <Input
                                                id="penumpang"
                                                name="penumpang"
                                                placeholder="Jumlah Penumpang"
                                                type="number"
                                                disabled
                                            />
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Container>
                </Form>

            }

        </>

    )
}
