import React from 'react'
import "./productservic.css"
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

const ProductserviceCard = ({serviceProduct}) => {
  return (
      <section className="product-service-section">
      <div className="product-service-container">
        <h2 className="product-service-title">
          Empowering Innovation: unleashing digital potential.
        </h2>
        <p className="product-service-subtitle">
          Discover the power of discover the power of technology solution services technology solutions & services.
        </p>
        <div className="row gap-5">
          {serviceProduct.map((service, index) => (
            <div
              key={service.id}
              className="col-lg-4 product-service-item-card"
              // data-aos="fade-right"
              // data-aos-delay={index * 300} // Staggered delay (200ms between items)
            >
              <div className="product-service-image-container">
                <img
                  src={service.img}
                  className="product-service-image"
                  alt={`${service.name}`}
                />
                <div>
                  <h4 className="product-service-item-title">{service.name}</h4>
                  <p className="product-service-item-description">{service.description}</p>
                  <Link
                    to={`/services/${service.link}`}
                    className="product-service-link"
                  >
                    Explore {service.name} 
                    <FaLongArrowAltRight className="product-service-arrow-icon" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductserviceCard