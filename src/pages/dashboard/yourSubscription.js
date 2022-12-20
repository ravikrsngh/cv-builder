import './dashboard.css';
import roundicon from './../../assets/img/icons/roundicon.png';

import React, {useState} from 'react';
import {Link,useNavigate, useOutletContext} from 'react-router-dom';

import OurServices from './ourServices';

const YourSubscription = () => {
  return (
    <React.Fragment>
      <div className="dashboard_sections_header"><h3 className="dashboard_main_heading">Active Subscription</h3></div>
      <div className="your_subcription_container">
        <div className="dashboard_table_desc_col">
          <div className="dashboard_table_desc_icon"><img src={roundicon}/></div>
          <div className="dashboard_table_desc_details"><h6>Basic</h6><span>Valid Till<a>31/12/2022</a></span></div>
        </div>
        <div className="your_subcription_actions">
          <button>Renew</button>
          <button>Upgrade</button>
        </div>
      </div>
      <OurServices />
    </React.Fragment>
  )
}


export default YourSubscription;
