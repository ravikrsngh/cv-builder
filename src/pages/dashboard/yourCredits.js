import './dashboard.css';
import editicon from './../../assets/img/icons/edit.png';
import roundicon from './../../assets/img/icons/roundicon.png';

import React, {useState} from 'react';
import {Link,useNavigate, useOutletContext} from 'react-router-dom';

const YourCredits = () => {
  return (
    <React.Fragment>
    <div className="dashboard_sections_header"><h3 className="dashboard_main_heading">Your Credits</h3></div>
    <div className="credits_section">
      <div className="credits">
        <h3>786</h3><span>remaining</span>
      </div>
      <div className="credits_buy_btn">
        <div><button className="share_cv_btn">Buy More</button></div>
      </div>
    </div>
    <br/><br/><br/>
    <div className="dashboard_sections_header"><h3 className="dashboard_main_heading">Past Credit Spend History</h3></div>
    <div className="dashboard_table_container">
      <table>
        <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Status</th>
          <th>Shared With</th>
          <th>Feedback</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>22/12/2022</td>
        <td>
          <div className="dashboard_table_desc_col">
            <div className="dashboard_table_desc_icon"><img src={roundicon}/></div>
            <div className="dashboard_table_desc_details"><h6>CV Review</h6><span>CV Shared: <a>Link</a></span></div>
          </div>
        </td>
        <td>Completed</td>
        <td>Sabrina</td>
        <td><button>Give Feedback</button></td>
        </tr>
        <tr>
        <td>22/12/2022</td>
        <td>
          <div className="dashboard_table_desc_col">
            <div className="dashboard_table_desc_icon"><img src={roundicon}/></div>
            <div className="dashboard_table_desc_details"><h6>CV Review</h6><span>CV Shared: <a>Link</a></span></div>
          </div>
        </td>
        <td>In Progress</td>
        <td>Sabrina</td>
        <td><button>Give Feedback</button></td>
        </tr>
        <tr>
        <td>22/12/2022</td>
        <td>
          <div className="dashboard_table_desc_col">
            <div className="dashboard_table_desc_icon"><img src={roundicon}/></div>
            <div className="dashboard_table_desc_details"><h6>CV Review</h6><span>CV Shared: <a>Link</a></span></div>
          </div>
        </td>
        <td>Completed</td>
        <td>Sabrina</td>
        <td><button>Give Feedback</button></td>
        </tr>
        <tr>
        <td>22/12/2022</td>
        <td>
          <div className="dashboard_table_desc_col">
            <div className="dashboard_table_desc_icon"><img src={roundicon}/></div>
            <div className="dashboard_table_desc_details"><h6>CV Review</h6><span>CV Shared: <a>Link</a></span></div>
          </div>
        </td>
        <td>Completed</td>
        <td>Sabrina</td>
        <td><button>Give Feedback</button></td>
        </tr>
        </tbody>
      </table>
    </div>
    </React.Fragment>
  )
}

export default YourCredits;
