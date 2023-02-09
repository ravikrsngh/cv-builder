import './dashboard.css';
import roundicon from './../../assets/img/icons/roundicon.png';
import {SingleInputFilter,DropdownFilter, SearchableDropdownFilter} from './../../components/filters/filters';
import React, {useState} from 'react';
import {Link,useNavigate, useOutletContext} from 'react-router-dom';

const ServiceRequest = () => {
  const serviceDropdownOption = [
    {name:"CV Creation"},
    {name:"CV Review"},
    {name:"Cover Letter Creation"},
    {name:"Interview Practice"},
    {name:"Linkedn Profile"}
  ]
  const statusDropdownOption = [
    {name:"Pending"},
    {name:"In Progress"},
    {name:"Blocked"},
    {name:"Completed"},
  ]
  const userDropdownOption = [
    {icon:{roundicon},name:"Ravi"},
    {icon:{roundicon},name:"Sabrina"},
    {icon:{roundicon},name:"Rahul"},
    {icon:{roundicon},name:"Saurav"},
  ]
  return (
    <React.Fragment>
      <div className="dashboard_sections_header"><h3 className="dashboard_main_heading">Your Service Requests</h3></div>

      <div className="dashboard_filters_section">
        <SingleInputFilter className="dashboard_filter" label="Date From" type="date" />
        <SingleInputFilter className="dashboard_filter" label="Date End" type="date" />
        <SearchableDropdownFilter
          className="dashboard_filter dashboard_dropdown_filter"
          label="User"
          filterOptions={userDropdownOption}
          placeholder="Search User"
        />
        <DropdownFilter
          className="dashboard_filter dashboard_dropdown_filter"
          label="Services"
          filterOptions={serviceDropdownOption}
        />
        <DropdownFilter
          className="dashboard_filter dashboard_dropdown_filter"
          label="Status"
          filterOptions={statusDropdownOption}
        />
      </div>

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
