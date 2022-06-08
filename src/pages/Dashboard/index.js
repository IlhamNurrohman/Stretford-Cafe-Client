import React, {Component} from 'react';
import { Doughnut } from 'react-chartjs-2';

import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/Footer";
import './Dashboard.css';

export default class Profile extends Component {
    render() {
        return (
          <>
            <Header />
            <div className="dashboard-container">
              <h1>See how your store progress so far</h1>
              <div className="report-wrapper">
                <h2>Weekly</h2>
                <Doughnut
                //   data={this.state.data}
                //   options={this.state.chartOptions}
                //   height={'100px'}
                />
              </div>
            </div>
            <Footer />
          </>
        );
      }

}