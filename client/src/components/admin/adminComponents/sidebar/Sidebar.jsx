import React from 'react'
import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <div className='top'>
                <span className="logo">BCR</span>
            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className="title">MAIN</p>
                    <Link to='/admin' style={{ textDecoration:'none' }}>
                        <li>
                            <DashboardIcon className='icon'/>
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    <Link to='/admin/cars' style={{ textDecoration:'none' }}>
                        <li>
                            <LocalShippingIcon className='icon'/>
                            <span>Cars</span>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar