
import React, { useState, useEffect } from 'react';
import './IndustryIconSlider.css';

import EnergyIcon from '../../assets/energy-partners.svg';
import EcommerceIcon from '../../assets/shopee-1.svg';
import SoftwareIcon from '../../assets/tableau-software.svg';
import medicalIcon from '../../assets/medical.svg';
import manufactureIcon from '../../assets/manufacturing.svg';
import SourcetreeIcon from '../../assets/Sourcetree.svg';

export default function IndustryIconSlider() {
  const industries = [
    { name: 'Manufacture', icon: manufactureIcon },
    { name: 'Energy', icon: EnergyIcon },
    { name: 'E-commerce', icon: EcommerceIcon },
    { name: 'Software', icon: SoftwareIcon },
    { name: 'Medical', icon: medicalIcon },
    { name: 'Technologies', icon: SourcetreeIcon },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5); // Default for large screens

  // Update visible items based on screen width
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth <= 576) {
        setVisibleCount(1); // Small screens
      } else if (window.innerWidth <= 768) {
        setVisibleCount(3); // Medium screens
      } else {
        setVisibleCount(5); // Large screens
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const visibleItems = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleItems.push(industries[(startIndex + i) % industries.length]);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) => (prevIndex + 1) % industries.length);
    }, 2000); // Auto-slide every 2 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, [industries.length]);

  return (
    <div className="industry-slider">
      <h2 className="p-3">Industry Expertise</h2>
      <div className="carousel-container">
        {visibleItems.map((item, index) => (
          <div key={index} className="carousel-item industry-display-content">
            <img
              src={item.icon}
              alt={`${item.name} icon`}
              className="tool-icon"
            />
            <p className="mt-2 industry-name-slider">{item.name}</p>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        onClick={() =>
          setStartIndex((prevIndex) =>
            prevIndex === 0 ? industries.length - 1 : prevIndex - 1
          )
        }
      >
        &#8249;
      </button>
      <button
        className="carousel-control-next"
        onClick={() =>
          setStartIndex((prevIndex) => (prevIndex + 1) % industries.length)
        }
      >
        &#8250;
      </button>
    </div>
  );
}

