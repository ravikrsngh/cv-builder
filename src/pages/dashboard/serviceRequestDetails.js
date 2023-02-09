import './dashboard.css';
import roundicon from './../../assets/img/icons/roundicon.png';

import React, {useState} from 'react';
import {Link,useNavigate, useOutletContext} from 'react-router-dom';
import ReviewCard from './../../components/dashboard/review/review';
import Popup from './../../components/popup/popup';

const ServiceRequestDetails = () => {

  const [popupDisplay,setPopupDisplay] = useState(false)

  return (
    <React.Fragment>
      <div className="service_request_details_header">
        <div>
          <h3>CV Review</h3>
          <h2>Ravi Kumar Singh <a>View CV</a></h2>
          <span>Pending</span>
        </div>
        <div>
          <button>Start Now</button>
        </div>

      </div>
      <div className="service_request_comments">
        <div className="service_request_comments_header">
          <h3>Comments</h3>
          <button onClick={() => setPopupDisplay(true)}>+ Add New</button>
        </div>
        <div>
          <ReviewCard img={roundicon} review="Results and achievements are important in the American workforce. When a hiring manager in the US is scanning your resume, they’re looking to see if you have what it takes to deliver value to the company." link="Ravi Kumar Singh" />
          <ReviewCard img={roundicon} review="Results and achievements are important in the American workforce. When a hiring manager in the US is scanning your resume, they’re looking to see if you have what it takes to deliver value to the company." link="Ravi Kumar Singh" />
          <ReviewCard img={roundicon} review="Results and achievements are important in the American workforce. When a hiring manager in the US is scanning your resume, they’re looking to see if you have what it takes to deliver value to the company." link="Ravi Kumar Singh" />
        </div>

      </div>
      <br/>

      <Popup popupDisplay={popupDisplay} popupDisplayHandler={setPopupDisplay}>
        <div className="popup_header">
          <h4>Add new comment</h4>
        </div>
        <div className="add_comment_container">
          <form>
            <div className="add_comment_form_element">
              <label>Comment*</label>
              <textarea rows="8"></textarea>
            </div>
            <div className="add_comment_form_element">
              <input type="text" placeholder="Link" />
            </div>
            <div className="add_comment_form_element">
              <button type="submit">Post</button>
            </div>
          </form>
        </div>

      </Popup>

    </React.Fragment>
  )
}

export default ServiceRequestDetails;
