
import React, { useState } from 'react';
import './mobile.css';
import logo from "../../Images/AmbiSpine_logo.png";
import { RxCross2 } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";
import { AiFillAndroid } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { DiDigitalOcean } from "react-icons/di";
import { FaBusinessTime } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoIosCloudUpload } from "react-icons/io";
import { Link } from "react-router-dom";

export default function MobileView() {
  const [expandedService, setExpandedService] = useState(null);

  const servicesdrop = [
    {
      id: 1,
      icon: <AiFillAndroid />,
      name: "Mobile App Development",
      feature: [
        { name: "IOS App Development" },
        { name: "Android App Development" },
        { name: "Hybrid App Development" },
      ],
    },
    {
      id: 2,
      icon: <CgWebsite />,
      name: "Website Development",
      feature: [
        { name: "Website App Development" },
        { name: "Content Management System" },
        { name: "Software Development Services" },
      ],
    },
    {
      id: 3,
      icon: <FaBusinessTime />,
      name: "Business Solution",
      feature: [
        { name: "CRM Business Solution" },
        { name: "ERP Business Solution" },
      ],
    },
    {
      id: 4,
      icon: <MdOutlineDesignServices />,
      name: "Responsive Web Designing",
      feature: [
        { name: "Website Design" },
        { name: "Logo Design" },
      ],
    },
    {
      id: 5,
      icon: <IoIosCloudUpload />,
      name: "Cloud Solution",
      feature: [
        { name: "Cloud Solution and Data Migration" },
      ],
    },
    {
      id: 6,
      icon: <DiDigitalOcean />,
      name: "Digital Marketing Services",
      feature: [
        { name: "SEO Services" },
        { name: "Content Writing Service" },
      ],
    },
  ];

  const toggleService = (id) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="mobile-view-section">
      <div className="d-flex justify-content-between">
        <Link to="/" className="header__logo">
          <img src={logo} alt="AmbiSpine Logo" className="header__logo-img" />
        </Link>
        <RxCross2 className="cross-icon" />
      </div>
      <nav>
        <Link to="/" className="mobile-view-link">
          Home
        </Link>
        <div className="services-section">
          {servicesdrop.map((service) => (
            <div key={service.id} className="service-item">
              <div
                className="service-header"
                onClick={() => toggleService(service.id)}
              >
                {service.icon} {service.name}
                <FaArrowRightLong
                  className={`service-arrow ${
                    expandedService === service.id ? "rotated" : ""
                  }`}
                />
              </div>
              {expandedService === service.id && (
                <div className="service-features">
                  {service.feature.map((feature, idx) => (
                    <Link
                      key={idx}
                      to={`/services/${feature.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="feature-tag"
                    >
                      {feature.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <Link to="/product" className="mobile-view-link">
          Product
        </Link>
        <Link to="/aboutus" className="mobile-view-link">
          About Us
        </Link>
        <Link to="/career" className="mobile-view-link">
          Career
        </Link>
        <Link to="/" className="mobile-view-link">
          Contact
        </Link>
      </nav>
    </div>
  );
}

