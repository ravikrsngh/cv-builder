import './dashboard.css';
import searchicon from './../../assets/img/icons/search.png';
import services_card from './../../assets/img/dummy/servicecard.png';

import React, {useState} from 'react';
import {Link,useNavigate, useOutletContext} from 'react-router-dom';

const OurServices = () => {
  return (
    <React.Fragment>
      <div className="dashboard_sections_header">
        <h3 className="dashboard_main_heading">Our Services</h3>
        <form>
          <input type="text" placeholder="Search" />
          <button><img src={searchicon} /></button>
        </form>
      </div>

      <div className="services_container">

        <div className="services_card">
          <div className="services_img">
            <img src={services_card} />
          </div>
          <div className="overlay_action_container">
            <button>View</button>
            <button>Buy</button>
          </div>
        </div>

        <div className="services_card">
          <div className="services_img">
            <img src={services_card} />
          </div>
          <div className="overlay_action_container">
            <button>View</button>
            <button>Buy</button>
          </div>
        </div>
        <div className="services_card">
          <div className="services_img">
            <img src={services_card} />
          </div>
          <div className="overlay_action_container">
            <button>View</button>
            <button>Buy</button>
          </div>
        </div>
        <div className="services_card">
          <div className="services_img">
            <img src={services_card} />
          </div>
          <div className="overlay_action_container">
            <button>View</button>
            <button>Buy</button>
          </div>
        </div>
        <div className="services_card">
          <div className="services_img">
            <img src={services_card} />
          </div>
          <div className="overlay_action_container">
            <button>View</button>
            <button>Buy</button>
          </div>
        </div>
        <div className="services_card">
          <div className="services_img">
            <img src={services_card} />
          </div>
          <div className="overlay_action_container">
            <button>View</button>
            <button>Buy</button>
          </div>
        </div>
        <div className="services_card">
          <div className="services_img">
            <img src={services_card} />
          </div>
          <div className="overlay_action_container">
            <button>View</button>
            <button>Buy</button>
          </div>
        </div>
        <div className="services_card">
          <div className="services_img">
            <img src={services_card} />
          </div>
          <div className="overlay_action_container">
            <button>View</button>
            <button>Buy</button>
          </div>
        </div>

      </div>

    </React.Fragment>
  )
}


export default OurServices;
