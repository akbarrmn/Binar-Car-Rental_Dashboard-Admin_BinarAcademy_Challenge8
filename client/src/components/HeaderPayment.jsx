import React from 'react'
import { Container } from 'reactstrap'
import {MdArrowBack} from "react-icons/md"
import { Link } from 'react-router-dom'

export default function HeaderPayment() {
    return (
        <>
            <header style={{ height:'60px' }}></header>
            <Container>
                <div className="payment-order d-flex justify-content-between">
                    <Link to='/cars' className="d-flex" style={{ color:'black', textDecoration:'none' }}>
                        <MdArrowBack style={{ fontSize:'1.5rem' }}/>
                        <h6 className='ms-4 mb-0 align-self-center'>Pembayaran</h6>
                    </Link>
                    <div className="d-flex">
                        <div className="circle align-self-center">1</div>
                        <div className="ms-2 align-self-center">Pilih Metode</div>
                        <div className='ms-3 align-self-center' style={{ background:'#0D28A6', width:'28px', height:'2px' }}/>
                        <div className="ms-4 circle align-self-center">2</div>
                        <div className="ms-2 align-self-center">Bayar</div>
                        <div className='ms-3 align-self-center' style={{ background:'#0D28A6', width:'28px', height:'2px' }}/>
                        <div className="ms-4 circle align-self-center">3</div>
                        <div className="ms-2 align-self-center">Tiket</div>
                    </div>
                </div>
            </Container>
        </>

    )
}
