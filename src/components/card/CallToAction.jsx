import React, { useState } from 'react';
import "./CallToAction.css";
import QuotationForm from '../Form/QuotationForm';

const CallToAction = () => {
  const [consultactive, setConsultActive] = useState(false);
  const handleConsult = () =>{
    setConsultActive(true);
  }
  return (
    <>
    <section className="consultation_b-section">
    <div className="consultation-box">
      <h3>Get Free Consultation Now!.</h3>
      <p>Let's create a powerful website that grows with your business</p>
      <button className="consult-btn" onClick={handleConsult}>Consult Now →</button>
    </div>
  </section>
    <section>
      {
          consultactive &&  (
            <div><QuotationForm /></div> 
          )
        }
      </section>
    </>
        
  );
};

export default CallToAction;
