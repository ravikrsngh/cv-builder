import './formPages.css';
import droppdown_arrow from './../../assets/img/icons/droppdown_arrow.png';
import rs1 from './../../assets/img/cv/resume9.jpg';
import rs2 from './../../assets/img/cv/resume10.jpg';
import rs3 from './../../assets/img/cv/resume11.jpg';
import rs4 from './../../assets/img/cv/resume12.jpg';
import rs5 from './../../assets/img/cv/resume13.jpg';
import rs6 from './../../assets/img/cv/resume14.jpg';

import {useState} from 'react';
import {Link} from 'react-router-dom';

const PreviewTemplate = () => {


  return (
    <div className="pd main_form_container">
      <div className="main_form_header">
        <div className="main_form_header_heading">
          <span>3</span>
          <h2>Preview Your CV</h2>
        </div>
        <p>Each template is expertly designed and follows the exact “resume rules” hiring managers look for. Stand out and get hired faster with field-tested resume templates.</p>
      </div>
      <div className="preview_template_container">
        <div className="preview_template">
          <img src={rs1} />
        </div>
      </div>
      <div className="preview_template_actions">
        <button className="preview_btn">Preview</button>
        <button className="download_btn">Download</button>
      </div>
    </div>
  );

}


export default PreviewTemplate;
