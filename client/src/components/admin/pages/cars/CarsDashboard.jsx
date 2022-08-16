import React from 'react'
import "./CarsDashboard.scss";
import Sidebar from '../../adminComponents/sidebar/Sidebar'
import Navbar from '../../adminComponents/navbar/Navbar';


const CarsDashboard = ({component}) => {
      return (
        <div className="carshome">
          <Sidebar/>
          <div className="homeContainer">
              <Navbar/>
              {component}
          </div>
        </div>
      )
}

export default CarsDashboard