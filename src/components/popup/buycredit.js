import './buycredit.css'

import greentick from './../../assets/img/icons/greentick.png';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Popup from './popup';


const CreditCard = ({value,selectedCreditHanlder,selected}) => {
  return (
    <div className="credit_card" onClick={() => selectedCreditHanlder(value)}>
      {value}
      {selected? <img src={greentick} /> : null}
    </div>
  )
}

const BuyCreditPopUp = ({popupDisplay,popupDisplayHandler}) => {

  const [selectedCredit,setSelectedCredit] = useState(null)

  return (
    <React.Fragment>
    {ReactDOM.createPortal(
      (
        <Popup popupDisplay={popupDisplay} popupDisplayHandler={popupDisplayHandler} width="100%">
          <div className="popup_header">
            <h4>Select Credit Plan</h4>
          </div>
          <div className="buycredit_container">
            <div className="buycredit_container_1">
              <CreditCard value="500" selectedCreditHanlder={setSelectedCredit} selected={selectedCredit == "500"? true : false} />
              <CreditCard value="1000" selectedCreditHanlder={setSelectedCredit} selected={selectedCredit == "1000"? true : false} />
              <CreditCard value="1500" selectedCreditHanlder={setSelectedCredit} selected={selectedCredit == "1500"? true : false} />
              <CreditCard value="2000" selectedCreditHanlder={setSelectedCredit} selected={selectedCredit == "2000"? true : false} />
              <CreditCard value="2500" selectedCreditHanlder={setSelectedCredit} selected={selectedCredit == "2500"? true : false} />
              <CreditCard value="3000" selectedCreditHanlder={setSelectedCredit} selected={selectedCredit == "3000"? true : false} />
            </div>
            <div className="buycredit_container_2">
              <div>
                <span className="label">Credits</span>
                <p className="value">{selectedCredit}</p>
              </div>
              <div className="apply_gift_card_container">
                <span className="label">Apply Gift Card</span>
                <form>
                  <input placeholder="Enter Code" />
                  <button type="button">Apply</button>
                </form>
              </div>
              <div>
                <span className="label">You Pay</span>
                <p className="value">$ 10</p>
              </div>
              <div>
                <button className="pay_btn_credits">Pay Now</button>
              </div>
            </div>
          </div>
        </Popup>
      ),
      document.getElementById('popup')
    )}
    </React.Fragment>
  )
}

export default BuyCreditPopUp;
