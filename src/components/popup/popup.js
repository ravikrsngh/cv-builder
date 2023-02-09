import './popup.css';
import closeicon from './../../assets/img/icons/close.svg';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const PopUpProgressBar = ({width}) => {
  if (width == 0) {
    return
  }
  return (
    <div className="popup_progressbar">
      <div className="popup_progressbar_line" style={{width:`${width}`}}></div>
    </div>
  )
}

const Popup = ({popupDisplay,popupDisplayHandler,width,children}) => {

  const closePopupDisplay = () => {
    popupDisplayHandler(false)
  }

  return (
    <React.Fragment>
    {ReactDOM.createPortal(
      (
        <div className="popup_container" style={{display:`${popupDisplay? "flex":"none"}`}}>
          <div className="popup_main_container" >
            <PopUpProgressBar width={width? width:0} />
            {children}
            <div className="popup_close">
              <img src={closeicon} onClick={closePopupDisplay} />
            </div>
          </div>
        </div>
      ),
      document.getElementById('popup')
    )}
    </React.Fragment>
  )
}


export default Popup;
