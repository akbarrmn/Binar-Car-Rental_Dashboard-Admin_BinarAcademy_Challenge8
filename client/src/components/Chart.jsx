import React from 'react'
import { Col, Row } from 'react-bootstrap';
import {  XAxis, CartesianGrid, Tooltip, BarChart, YAxis, Legend, Bar } from 'recharts';
import Services from './Services';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useSelector } from 'react-redux';

const Chart = () => {
    const cars = useSelector((state) => state.carsData.cars)
    const data = []
    cars.map((item)=>{data.push({
        name: item.name,
        Total: Number(item.passengers),
    })})
    return (
        <div className='main-container mt-5'>
            <Row>
                    <Services/>
                    <Col xl='12' md='6' sm='6' className='address' style={{ marginTop:'5rem' }}>
                        <div className='d-flex justify-content-around'>
                            <div className="data mt-5">
                                <h4>Cars :</h4>
                                {
                                cars.map((item) => {
                                    return (
                                    <h5><ArrowRightIcon/>{item.name}</h5>
                                )})
                                }
                            </div>
                            <BarChart width={730} height={400} data={data} style={{ marginTop:'3rem' }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis dataKey="Total"/>
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="Total" fill="#82ca9d" />
                            </BarChart>
                        </div>
                    </Col>
            </Row>
        </div>
    )
}

export default Chart