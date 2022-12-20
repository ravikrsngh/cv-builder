import './dashboard.css';
import roundicon from './../../assets/img/icons/roundicon.png';

import React, {useState} from 'react';
import {Link,useNavigate, useOutletContext} from 'react-router-dom';

const PurchaseHistory = () => {
  return (
    <React.Fragment>
      <div className="dashboard_sections_header"><h3 className="dashboard_main_heading">Purchase History</h3></div>

      <div className="dashboard_table_container">
        <table>
          <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Status</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>22/12/2022</td>
          <td>
            <div className="dashboard_table_desc_col">
              <div className="dashboard_table_desc_icon"><img src={roundicon}/></div>
              <div className="dashboard_table_desc_details"><h6>Subscription Title</h6><span>Valid Till: <a>31/12/2022</a></span></div>
            </div>
          </td>
          <td>Completed</td>
          <td>$ 9.00</td>
          <td><button>View Invoice</button></td>
          </tr>
          <tr>
          <td>22/12/2022</td>
          <td>
            <div className="dashboard_table_desc_col">
              <div className="dashboard_table_desc_icon"><img src={roundicon}/></div>
              <div className="dashboard_table_desc_details"><h6>Subscription Title</h6><span>Valid Till: <a>31/12/2022</a></span></div>
            </div>
          </td>
          <td>In Progress</td>
          <td>$ 13.00</td>
          <td><button>View Invoice</button></td>
          </tr>
          <tr>
          <td>22/$ 10.00</td>
          <td>
            <div className="dashboard_table_desc_col">
              <div className="dashboard_table_desc_icon"><img src={roundicon}/></div>
              <div className="dashboard_table_desc_details"><h6>CV Review</h6><span>CV Shared: <a>Link</a></span></div>
            </div>
          </td>
          <td>Completed</td>
          <td>$ 17.00</td>
          <td><button>View Invoice</button></td>
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
          <td>$ 10.00</td>
          <td><button>View Invoice</button></td>
          </tr>
          </tbody>
        </table>
      </div>

    </React.Fragment>
  )
}

export default PurchaseHistory;
