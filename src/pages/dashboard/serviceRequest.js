import './dashboard.css';
import roundicon from './../../assets/img/icons/roundicon.png';

import React, {useState} from 'react';
import {Link,useNavigate, useOutletContext} from 'react-router-dom';

const ServiceRequest = () => {
  return (
    <React.Fragment>
      <div className="dashboard_sections_header"><h3 className="dashboard_main_heading">Service Requests</h3></div>

      <div className="dashboard_table_container">
        <table>
          <thead>
          <tr>
            <th>Date</th>
            <th>User</th>
            <th>Service</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>22/12/2022</td>
          <td onClick={() => window.location.href='service-requests/1'}>
            <div className="dashboard_table_desc_col">
              <div className="dashboard_table_desc_icon"><img src={roundicon}/></div>
              <div className="dashboard_table_desc_details"><h6>Ravi Kumar Singh</h6></div>
            </div>
          </td>
          <td>CV Review</td>
          <td>Completed</td>
          <td><button>View</button></td>
          </tr>
          <tr>
          <td>22/12/2022</td>
          <td>
            <div className="dashboard_table_desc_col">
              <div className="dashboard_table_desc_icon"><img src={roundicon}/></div>
              <div className="dashboard_table_desc_details"><h6>Ravi Kumar Singh</h6></div>
            </div>
          </td>
          <td>Create Cover Letter</td>
          <td>In Progress</td>
          <td><button>View</button></td>
          </tr>
          <tr>
          <td>22/12/2022</td>
          <td>
            <div className="dashboard_table_desc_col">
              <div className="dashboard_table_desc_icon"><img src={roundicon}/></div>
              <div className="dashboard_table_desc_details"><h6>Ravi Kumar Singh</h6></div>
            </div>
          </td>
          <td>CV Review</td>
          <td>Completed</td>
          <td><button>View</button></td>
          </tr>
          <tr>
          <td>22/12/2022</td>
          <td>
            <div className="dashboard_table_desc_col">
              <div className="dashboard_table_desc_icon"><img src={roundicon}/></div>
              <div className="dashboard_table_desc_details"><h6>Ravi Kumar Singh</h6></div>
            </div>
          </td>
          <td>Create CV</td>
          <td>Completed</td>
          <td><button>View</button></td>
          </tr>
          </tbody>
        </table>
      </div>

      <br/>


    </React.Fragment>
  )
}

export default ServiceRequest;
