import './dashboard.css';
import searchicon from './../../assets/img/icons/search.png';
import services_card from './../../assets/img/dummy/servicecard.png';

import React, {useState} from 'react';
import {Link,useNavigate, useOutletContext} from 'react-router-dom';


const ServiceCard = (props) => {

  const navigate = useNavigate()
  const onClickServiceCard = () => {
    navigate(props.to)
  }

  return (
    <div className="services_card" onClick={onClickServiceCard}>
      <div className="services_img">
        <img src={services_card} />
      </div>
      <div className="overlay_action_container">
        <button>View</button>
        <button>Buy</button>
      </div>
    </div>
  )
}

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

        <ServiceCard to="/dashboard/our-services/1" name="CV Review" />
        <ServiceCard to="/dashboard/our-services/2" name="CV Review" />
        <ServiceCard to="/dashboard/our-services/3" name="CV Review" />
        <ServiceCard to="/dashboard/our-services/4" name="CV Review" />
        <ServiceCard to="/dashboard/our-services/5" name="CV Review" />
        <ServiceCard to="/dashboard/our-services/6" name="CV Review" />
        <ServiceCard to="/dashboard/our-services/7" name="CV Review" />

      </div>

    </React.Fragment>
  )
}


export default OurServices;
