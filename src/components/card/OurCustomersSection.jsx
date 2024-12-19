import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import cloudServicesImage from "../../assets/resize.jpg";
import './OurCustomersSection.css';
import QuotationForm from '../Form/QuotationForm';

const OurCustomersSection = () => {
  const [consultactive, setConsultActive] = useState(false);

  const handleConsult = () =>{
    setConsultActive(true);
  }
  return (
    <>
     <section className="mnc-customers-section">
      <div className="mnc-customers-content">
    
        <div className="mnc-text-content">
          <h1 className="mnc-title">
            Bringing the Best Solutions to Our Valued Customers
          </h1>
          <p className="mnc-description">
            At the heart of everything we do is a commitment to your success. 
            Our iPhone app development services are tailored to exceed expectations 
            and empower you to achieve remarkable results in the competitive iOS ecosystem.
          </p>
          <button className="mnc-button" onClick={handleConsult}>
            Consult Now <FaArrowRight />
          </button>
        </div>

      
        <div className="mnc-image-wrapper">
          <img
            src={cloudServicesImage}
            alt="Cloud Services"
            className="mnc-image"
          />
        </div>
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

export default OurCustomersSection;
