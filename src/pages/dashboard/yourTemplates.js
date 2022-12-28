import './dashboard.css';
import rs2 from './../../assets/img/cv/resume10.jpg';
import rs3 from './../../assets/img/cv/resume11.jpg';
import rs4 from './../../assets/img/cv/resume12.jpg';
import rs5 from './../../assets/img/cv/resume13.jpg';
import rs6 from './../../assets/img/cv/resume14.jpg';
import rsAdd from './../../assets/img/cv/add_new_dashboard.png';

import React, {useState} from 'react';
import {Link,useNavigate, useOutletContext} from 'react-router-dom';


const YourTemplates = () => {

  let [currentTab,setCurrentTab] = useState("Purchased")

  const changeTab = () => {
    if (currentTab == "Purchased") {
      setCurrentTab("BuyNew")
    } else {
      setCurrentTab("Purchased")
    }
  }

  return (
    <React.Fragment>
      <div className="dashboard_sections_header"><h3 className="dashboard_main_heading">Your Templates</h3></div>
      <div className="dashboard_sections_header_with_tabs">
        <button className={currentTab == "Purchased"? "active_tab" : ""} onClick={changeTab}>Purchased</button>
        <button className={currentTab == "BuyNew"? "active_tab" : ""} onClick={changeTab}>Buy a New Template</button>
      </div>
      <div className="dashboard_sections_4cols">
        <div className="dashboard_sections_4cols-col">
          <div><img src={rs2} /></div>
        </div>
        <div className="dashboard_sections_4cols-col">
          <div><img src={rs4} /></div>
        </div>
        <div className="dashboard_sections_4cols-col">
          <div><img src={rs5} /></div>
        </div>
        <div className="dashboard_sections_4cols-col">
          <div><img src={rs6} /></div>
        </div>
        <div className="dashboard_sections_4cols-col">
          <div><img src={rs3} /></div>
        </div>
        <div className="dashboard_sections_4cols-col">
          <div><img src={rsAdd} /></div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default YourTemplates;
