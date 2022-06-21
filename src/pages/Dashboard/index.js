import React, { Component } from 'react';

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import BarChart from "../../component/Dashboard/Dashboard";
import './Dashboard.css';

import userImg from "../../assets/img/image 39.png";
import persentase from "../../assets/img/persentase.png";
import persentase2 from "../../assets/img/Screen Shot 2022-06-12 at 00.59.59.png";
export default class Profile extends Component {
  componentDidMount(){
    document.title = "Dashboard"
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <h1 className="title-dashboard">See how your store progress so far</h1>
            <div className="col-sm-8">
              <div className="report-wrapper">
                <h2>Weekly</h2>
                <p>Last 7 days</p>
                <BarChart
                />
              </div>
              <div className="download-report-btn">
                Download Report
              </div>
            </div>
            <div className="col-sm-4">
              <div className="card user-wrapper">
                <div className="card-header" style={{background: "white"}}>
                  <div className="row g-0">
                    <div className="col-sm-4">
                      <img src={userImg} alt="user" style={{width: "70px", marginLeft: "-30px", borderRadius: "50%"}}></img>
                    </div>
                    <div className="col-sm-8">
                      <h6>Cheryn Laurent</h6>
                      <p>Keep up the good work and spread love!</p>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Best Staff of the Month</h5>
                  <img src={persentase} alt="persentase" style={{marginLeft: "5%", width: "90%", marginBottom: "10px", borderRadius: "50%"}}></img>
                  <p className="card-text" style={{textAlign: "center", color: "rgba(124, 130, 138, 1)"}}>Achieved 3.5M of total 5M 478 Customer</p>
                </div>
              </div>
              <div className="card gols-wrapper">
                <div className="card-body">
                  <h2 className="" style={{textAlign: "center", marginBottom: "1rem"}}>Goals</h2>
                  <p className="card-text" style={{textAlign: "center", color: "rgba(124, 130, 138, 1)", marginBottom: "1rem"}}>Your goals is still on 76%. Keep up the good work!</p>
                  <img src={persentase2} alt="persentase2" style={{marginLeft: "5%", width: "90%", marginBottom: "10px", borderRadius: "50%"}}></img>
                </div>
              </div>
              <div className="share-report-btn">
                Share Report
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

}