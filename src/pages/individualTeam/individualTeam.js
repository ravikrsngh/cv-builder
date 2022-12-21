import './individualTeam.css';
import roundicon from './../../assets/img/icons/roundicon.png';

import React, {useState} from 'react';
import {Link,useNavigate, useOutletContext} from 'react-router-dom';

import ReviewCard from './../../components/dashboard/review/review';


const IndividualTeamPage = () => {
  return (
    <React.Fragment>
      <div className="team_page_header">
        <div className="team_page_header_img">
          <img src={roundicon} />
        </div>
        <span className="team_page_header_title">Professional CV Writer</span>
        <h2 className="team_page_header_name">Ravi Kumar Singh</h2>
      </div>
      <div className="details_page_section team_page_about">
        <h3>About Me </h3>
        <p>Results and achievements are important in the American workforce. When a hiring manager in the US is scanning your resume, they’re looking to see if you have what it takes to deliver value to the company.</p>
      </div>
      <div className="details_page_section team_page_services">
        <h3>Services</h3>
        <div className="team_services">
          <span>CV review</span>
          <span>CV Writing</span>
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


export default IndividualTeamPage;
