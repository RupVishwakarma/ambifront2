import React, { useState } from "react";
import "./WebDevelopment.css";
// import image1 from "../../assets/Pngtree.jpg";
import image1 from "../../assets/Pngtree.jpg";
import DevelopersTools from "../card/DevelopersTools";
import { FaRegEdit } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import QuotationForm from '../Form/QuotationForm';

const WebDevelopment = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null); // Track which FAQ is open
  const [consultactive, setConsultActive] = useState(false);
  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index); // Toggle between open and closed
  };
  const handleConsult = () =>{
    setConsultActive(true);
  }
  const faqs = [
    {
      question: "CMS or SaaS Development?",
      answer:
        "Cloud computing in business involves delivering computing services like servers, storage, and applications over the internet.",
    },
    {
      question: "Web App Development?",
      answer:
        "Yes, cloud providers invest heavily in security, but businesses must also implement their own security measures.",
    },
    {
      question: "EPR Developemnt?",
      answer:
        "Cloud reliability depends on the provider. Most reputable providers offer high availability and disaster recovery options.",
    },
    {
      question: "Do You Need Internet to Access the Cloud?",
      answer:
        "Yes, an internet connection is typically required to access cloud services.",
    },
  ];
  return (
    <>
      <div className="container-web">
        <div className="content">
          <h1>Website Development</h1>
          <p>
            Smart Choice is a company that is providing web development services
            to clients. We believe in developing solutions that are
            user-friendly and customized to suit your business needs.
          </p>
        </div>
        <div className="iamge">
          <img src={image1} alt="Web Development" />
        </div>
      </div>
      <section className="web-development-process">
        <h2 style={{ paddingTop: "30px" }}>Web Development Process</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-editt">
              <FaRegEdit size={15} className="editt" />
            </div>
            <h3>Requirement Gathering</h3>
            <p>
              We start by understanding your business goals and requirements.
            </p>
          </div>
          <div className="step">
            <div className="step-editt">
              <FaComputer size={15} className="editt" />
            </div>
            <h3>Design & Prototyping</h3>
            <p>We create a visual prototype and get your feedback.</p>
          </div>
          <div className="step">
            <div className="step-editt">
              <FaRegEdit size={15} className="editt" />
            </div>
            <h3>Development</h3>
            <p>Our team of experts starts the development process.</p>
          </div>
          <div className="step">
            <div className="step-editt">
              <FaComputer size={15} className="editt" />
            </div>
            <h3>Testing & Deployment</h3>
            <p>We thoroughly test the website and deploy it to your server.</p>
          </div>
        </div>
      </section>
      <section className="web-development-covers">
        <h2>Website Development Covers</h2>
        <div className="covers-list">
          <div className="cover-item">
            <h3>E-commerce Website Development</h3>
            <p>
              We build custom e-commerce solutions tailored to your business
              needs.
            </p>
          </div>
          <div className="cover-item">
            <h3>WordPress Development</h3>
            <p>
              Our experts can create and customize WordPress websites for you.
            </p>
          </div>
          <div className="cover-item">
            <h3>Mobile App Development</h3>
            <p>We develop mobile apps for both iOS and Android platforms.</p>
          </div>
          <div className="cover-item">
            <h3>Custom Web Development</h3>
            <p>
              Our team can build any type of custom website or web application.
            </p>
          </div>
        </div>
      </section>
      {/* <section className="accordion">
        <div className="accord">
          <Accordion />
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="faq-sectionn" style={{ marginTop: "19px" }}>
        <h2>Website Development Services</h2>
        <p>
          We Are Providing Every Web Development Service That Your Business
          Needs.
        </p>
        <ul className="faq-list">
          {faqs.map((faq, index) => (
            <li key={index}>
              <div className="faq-questionn" onClick={() => toggleFaq(index)}>
                <span>{faq.question}</span>
                <button>{openFaqIndex === index ? "-" : "+"}</button>
              </div>
              {openFaqIndex === index && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <DevelopersTools />
      </section>

      {/* Consultation Section */}
      <section className="consultationn-section"
        style={{ marginBottom: "15px" }}
      >
        <div className="consultationn-box">
          <h3>Get Free Consultation Now!.</h3>
          <p>Let's create a powerful website that grows with your business</p>
          <button className="consult-btn" onClick={handleConsult}> Consult Now →</button>
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

export default WebDevelopment;
