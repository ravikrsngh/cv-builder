import './serviceDetails.css';
import servicecard from './../../assets/img/dummy/servicecard.png';
import roundicon from './../../assets/img/icons/roundicon.png';

import React, {useState} from 'react';
import {Link,useNavigate, useOutletContext} from 'react-router-dom';

import ReviewCard from './../../components/dashboard/review/review';



const ProfessionalTeam = (props) => {

  const navigate = useNavigate()

  const onClickProfessionalTeam = () => {
    navigate(props.to)
  }

  return (
    <div className="professional_team_container" onClick={onClickProfessionalTeam}>
      <div className="professional_team_img"><img src={props.img}/></div>
      <h4>{props.name}</h4>
    </div>
  )
}

const ServiceDetails = () => {
  return (
    <React.Fragment>
      <div className="service_details_header">
        <div className="service_details_header_img">
          <img src={servicecard} />
        </div>
        <div className="service_details_info">
          <h2 className="team_page_header_name">CV Review</h2>
          <button className="action_btn">Buy Now</button>
        </div>
      </div>
      <div className="details_page_section team_page_about">
        <h3>About</h3>
        <p>Results and achievements are important in the American workforce. When a hiring manager in the US is scanning your resume, they’re looking to see if you have what it takes to deliver value to the company.</p>
      </div>
      <div className="details_page_section team_page_services">
        <h3>Our Professionals</h3>
        <div className="services_team">
          <ProfessionalTeam to="/dashboard/our-team/1" img={roundicon} name="Ravi Kumar Singh" />
          <ProfessionalTeam to="/dashboard/our-team/1" img={roundicon} name="Ravi Kumar Singh" />
          <ProfessionalTeam to="/dashboard/our-team/1" img={roundicon} name="Ravi Kumar Singh" />
          <ProfessionalTeam to="/dashboard/our-team/1" img={roundicon} name="Ravi Kumar Singh" />
          <ProfessionalTeam to="/dashboard/our-team/1" img={roundicon} name="Ravi Kumar Singh" />
          <ProfessionalTeam to="/dashboard/our-team/1" img={roundicon} name="Ravi Kumar Singh" />
        </div>
      </div>
      <div className="details_page_section team_page_reviews">
        <h3>Reviews</h3>
        <ReviewCard img={roundicon} review="Results and achievements are important in the American workforce. When a hiring manager in the US is scanning your resume, they’re looking to see if you have what it takes to deliver value to the company." by="Ravi Kumar Singh" />
        <ReviewCard img={roundicon} review="Results and achievements are important in the American workforce. When a hiring manager in the US is scanning your resume, they’re looking to see if you have what it takes to deliver value to the company." by="Ravi Kumar Singh" />
        <ReviewCard img={roundicon} review="Results and achievements are important in the American workforce. When a hiring manager in the US is scanning your resume, they’re looking to see if you have what it takes to deliver value to the company." by="Ravi Kumar Singh" />
      </div>

    </React.Fragment>
  )
}


export default ServiceDetails;
