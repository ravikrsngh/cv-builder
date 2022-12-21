import './dashboard.css';
import roundicon from './../../assets/img/icons/roundicon.png';
import searchicon from './../../assets/img/icons/search.png';

import React, {useState} from 'react';
import {Link,useNavigate, useOutletContext} from 'react-router-dom';



const TeammateCard = (props) => {

  const navigate = useNavigate()

  const onClickTeammateCard = () => {
    navigate(props.to)
  }

  return (
    <div className="team_card" onClick={onClickTeammateCard}>
      <div className="team_img">
        <img src={props.img} />
      </div>
      <div className="team_info">
        <h4 className="team_name">{props.name}</h4>
        <span className="team_title">{props.title}</span>
        <div className="team_services">
          {props.services.map((ins) => {
            return (
              <span>{ins}</span>
            )
          })}
        </div>
      </div>
      <div className="team_action">
        <button className="action_btn">View Profile</button>
      </div>
    </div>
  )
}

const OurTeams = () => {
  return (
    <React.Fragment>
      <div className="dashboard_sections_header">
        <h3 className="dashboard_main_heading">Our Professional Team</h3>
        <form>
          <input type="text" placeholder="Search" />
          <button><img src={searchicon} /></button>
        </form>
      </div>

      <div className="our_teams_container">
        <TeammateCard to="/dashboard/our-team/1" img={roundicon} name="Ravi Kumar Singh" title="Professional CV Writer" services={["CV Writer","CV Review","CV Writer","CV Review"]} />
        <TeammateCard to="/dashboard/our-team/2" img={roundicon} name="Sabrina" title="Professional CV Writer" services={["CV Writer","CV Review"]} />
        <TeammateCard to="/dashboard/our-team/3" img={roundicon} name="Rahul" title="Professional CV Writer" services={["CV Writer"]} />
      </div>

    </React.Fragment>
  )
}


export default OurTeams;
