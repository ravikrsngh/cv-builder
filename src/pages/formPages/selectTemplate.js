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

import TemplateLoader from './../../components/loaders/loaders';

const SelectTemplate = () => {

  let [dropdownDisplay,setDropdownDisplay] = useState(false);
  let [isLoading, setIsLoading] = useState(false);

  const selectTemplateHandler = (selectedTemplate = "All") => {
    setDropdownDisplay(false);
    setIsLoading(true);
    document.getElementById('selectedTemplate').innerText = selectedTemplate;
    setTimeout(() => {
      setIsLoading(false)
    }, 800);
  }


  return (
    <div className="pd main_form_container">
      <div className="main_form_header">
        <div className="main_form_header_heading">
          <span>1</span>
          <h2>Select a template</h2>
        </div>
        <p>Each template is expertly designed and follows the exact “resume rules” hiring managers look for. Stand out and get hired faster with field-tested resume templates.</p>
        <div className="template_type_dropdown_container">
          <Link to="">View Guide</Link>
          <div className="template_type selected_template_type"onClick={() => dropdownDisplay? setDropdownDisplay(false) : setDropdownDisplay(true)}>
            <span id="selectedTemplate">All</span>
            <span><img src={droppdown_arrow}/></span>
          </div>
          {dropdownDisplay &&
          <div className="template_type_dropdown">
            <div className="template_type" onClick={() => selectTemplateHandler('All')}>
              <span>All</span>
            </div>
            <div className="template_type" onClick={() => selectTemplateHandler('Creative')}>
              <span>Creative</span>
            </div>
            <div className="template_type" onClick={() => selectTemplateHandler('Modern')}>
              <span>Modern</span>
            </div>
          </div>
          }
        </div>
      </div>
      {isLoading? <TemplateLoader /> : (
      <div className="select_template_form_container">
        <div className="template_container">
          <div className="template_img"><img src={rs1} /></div>
        </div>
        <div className="template_container">
          <div className="template_img"><img src={rs2} /></div>
        </div>
        <div className="template_container">
          <div className="template_img"><img src={rs3} /></div>
        </div>
        <div className="template_container">
          <div className="template_img"><img src={rs4} /></div>
        </div>
        <div className="template_container">
          <div className="template_img"><img src={rs5} /></div>
        </div>
        <div className="template_container">
          <div className="template_img"><img src={rs6} /></div>
        </div>
        <div className="template_container">
          <div className="template_img"><img src={rs1} /></div>
        </div>
        <div className="template_container">
          <div className="template_img"><img src={rs2} /></div>
        </div>
        <div className="template_container">
          <div className="template_img"><img src={rs5} /></div>
        </div>
        <div className="template_container">
          <div className="template_img"><img src={rs3} /></div>
        </div>
        <div className="template_container">
          <div className="template_img"><img src={rs1} /></div>
        </div>
      </div>
      )}
    </div>
  );
  
}


export default SelectTemplate;
