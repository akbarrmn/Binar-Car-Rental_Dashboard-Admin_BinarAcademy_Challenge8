import React from 'react'
import "./home.scss";
import Sidebar from '../../adminComponents/sidebar/Sidebar'
import Navbar from '../../adminComponents/navbar/Navbar';
import Widget from '../../adminComponents/widget/Widget';
import Chart from '../../adminComponents/chart/Chart';
import Datatable from '../../adminComponents/datatable/Datatable';


const Home = () => {
      return (
        <div className="home">
          <Sidebar/>
          <div className="homeContainer">
              <Navbar/>
              <div className="widgets">
                <Widget type="user"/> 
                <Widget type="order"/>  
                <Widget type="earning"/> 
                <Widget type="balance"/> 
              </div>
              <div className="charts">
                  <Chart title="Max Passangers" aspect={4/1}/>
              </div>
              <div className="datatable">
                <Datatable/>
              </div>
          </div>
        </div>
      )
}

export default Home