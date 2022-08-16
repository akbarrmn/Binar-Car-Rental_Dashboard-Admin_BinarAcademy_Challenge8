import React from 'react'

const Services = () => {
  return (
    <>
        <div className="col-lg-6 col-md-12 col-sm-12 ">
            <img className="image-fluid person" src="/images/img_service.png" alt="Person" />
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
            <h3>Best Car Rental for any kind of trip in (Lokasimu)!</h3>
            <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
            <div className="content d-flex">
                <img className="icon me-3" src="/images/icon/checklist.png" alt="Checklist" style={{ alignSelf:'baseline' }}/>
                <p className="text">Sewa Mobil Dengan Supir di Bali 12 Jam</p>
            </div>
            <div className="content d-flex flex-row">
                <img className="icon me-3" src="/images/icon/checklist.png" alt="Checklist" style={{ alignSelf:'baseline' }}/>
                <p className="text">Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
            </div>
            <div className="content d-flex flex-row">
                <img className="icon me-3" src="/images/icon/checklist.png" alt="Checklist" style={{ alignSelf:'baseline' }}/>
                <p className="text">Sewa Mobil Jangka Panjang Bulanan</p>
            </div>
            <div className="content d-flex flex-row">
                <img className="icon me-3" src="/images/icon/checklist.png" alt="Checklist" style={{ alignSelf:'baseline' }}/>
                <p className="text">Gratis Antar - Jemput Mobil di Bandara</p>
            </div>
            <div className="content d-flex flex-row">
                <img className="icon me-3" src="/images/icon/checklist.png" alt="Checklist" style={{ alignSelf:'baseline' }}/>
                <p className="text">Layanan Airport Transfer / Drop In Out</p>
            </div>
        </div>
    </>
  )
}

export default Services