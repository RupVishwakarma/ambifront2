import React, { useRef, useEffect, useState } from "react";
import Homeimg from "../../Images/Homeimg.jpg";
import ImageCarousel from "./ImageCarousel";
import ambiup from '../../Images/ambiup.mp4';
import product3 from '../../Images/product3.png'
import product4 from '../../Images/product4.png'
import product5 from '../../Images/product5.png'
import product6 from '../../Images/product6.png'
import product8 from '../../Images/product8.png'
import product9 from '../../Images/product9.png'
import unlockImg from '../../assets/home2.png';
import officediscussingImg from '../../assets/office-discussing.avif';
import accessImg  from '../../assets/accessImg.jpg';
import empowerImg from '../../assets/EmpowerYourself.jpeg';
import empowerImg1 from '../../assets/empowerImg1.jpg'
import learnImg from '../../assets/learn.jpg';
import connectedImg from '../../assets/connect.avif';
import dashboardImg from '../../assets/dashboard-examples.png';
import clouddata3 from '../../Images/clouddata3.jpg';
import cloudata2 from '../../Images/cloudata2.jpg';
import cloudata1 from '../../Images/cloudata1.jpg';
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
import FeatureCards from "./FeatureCards";
import ProductserviceCard from "./productserviceCard";

const HeroSection = ({ mousePosition }) => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const contentRef = useRef(null);

  const contentItems = [
    "AI-powered chatbots automate customer interactions, providing instant responses and support.",
    "Tools monitor brand reputation by analyzing user sentiments and feedback across social platforms.",
    "AI analyzes engagement patterns to determine the best times to post content for maximum reach and interaction.",
    "Personalized content feeds based on user preferences and behavior, enhancing user engagement.",
  ];
  const service_product=[
    {
      id: 1,
      name: "Mobile Solution",
      description: "transform your business with our innovative mobile solutions, Explore our services",
      link: "mobile-solution",
      img : product8,
    },
    {
      id: 2,
      name: "website Solution",
      description: "Enhance your online visiblity, drive more traffic. Check our services today!",
      link: "website-solution",
      img : product9,
    },
    {
      id: 3,
      name: "Business Solution",
      description: "Elevate your business with Our expert solutions & accelerate your business growth.",
      link: "business-solution",
      img : product3,
    },
    {
      id: 4,
      name: "Designing Solution",
      description: "Make a lasting impression with our expert web design services that help you make a impact and help you to boost engagement and drive results.",
      link: "web-designe-solution",
      img : product4,
    }, 
    {
      id: 5,
      name: "Cloud Solution",
      description: "Scalable cloud solution for secure data management and business growth with our cloud solution services discover the benefit of cloud solution",
      link: "cloud-solution",
      img : product5,
    },
    {
      id: 6,
      name: "Digital  Solution",
      description: "Connect to world increase your network. Expand your global reach engage and connect with your target audience with our expert digital marketing solution.",
      link: "digital-marketing-solution",
      img : product6,
    }

  ]

  const spreadsServices = [
    {
      src: accessImg,
      alt: "Image 1",
      text: "Implies that a stronger network can provide valuable support and tools highlights the potential for new experiences and possibilities",
      headText: "Access the resources",
    },
    {
      src:empowerImg1,
      alt: "Image 2",
      text: "Emphasizes the importance of accessing valuable resources and support through a strong network and follow your passion with following your choices.",
      headText: "Empower your life",
    },
    {
      src: learnImg,
      alt: "Image 3",
      headText: "Learn new skills",
      text: "Learning is an endless process, and it's impact is infinite. Never stop learning and together, let's reach new heights expand your network",
    },
    {
      src: connectedImg,
      alt: "Image 4",
      headText: "Connect, Capture And Share",
      text: "Connect with the world at your fingertips. Think, express and share your ideas with the globe. Spread your wings and soar to new heights feel connection here!",
    },
  ];
  const clouddata = [
    {
      id: 1,
      content: "Embrace the booster of Cloud Computing",
      hoverContent2: "Embrace the booster of cloud computing.Ambispine Technologies' cloud services provide secure, scalable, and reliable infrastructure for your business applications. Our cloud solutions enable you to reduce costs, increase agility, and improve collaboration.",
      src: cloudata1,
     
    },
    {
      id: 2,
      content: "Elevate Your Business with Cloud Expertise",
      hoverContent2: "Unlock the power of cloud computing. Ambispine Technologies' cloud solutions deliver flexible, secure, and scalable infrastructure for your business needs. Our cloud services enhance productivity, reduce costs, and foster collaboration.",
      src: cloudata2,
    },
    {
      id: 3,
      content: "Revolutionize Your Business with Scalable, Secure, and Reliable Cloud Solutions",
      hoverContent2: "Discover the benefits of cloud computing. Ambispine Technologies' cloud solutions offer adaptable, secure, and scalable infrastructure for your business needs. Our cloud services streamline operations, reduce costs, and enhance collaboration",
      src: clouddata3
    },
  ]


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.getAttribute("data-index"));
            setVisibleCards((prev) => new Set([...prev, cardIndex]));
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px",
      }
    );

    const cards = document.querySelectorAll(".feature-card");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="home-hero" style={{padding:"0px"}} >

        <div className="home-video-container">
        <video autoPlay loop muted className="home-background-video">
            <source src={ambiup} type="video/mp4" ></source>
        </video>
        </div>
        <div className="home-hero-overlay">
        <div className="home-hero-content">
          <div className="home-hero-left">

            <h1 className="home-hero-title" data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
              Embracing The Future OF <br /> Technology
            </h1>

            <p className="home-hero-description"  data-aos="fade-right" >
            Join us to discover the latest advancements in cloud. Computing artificial intelligence, and data analytics and be part of the transformation. 
            </p>

            <div className="home-cta-container">
              <button className="home-primary-btn">
                <Link
                  to="/services/software-development-services"
                  style={{ textDecoration: "none", color:"white" }}
                >
                  Explore Technologies <FaLongArrowAltRight className="home-explore_tech_icon"/>
                </Link>
              </button>
            </div>
          </div>
        </div>
        </div>
      </section>
      
      <div className="home-body-section">
      <section className="unlouck-container">
        <div className="text-center mx-auto unlouck-left">
        <h2 data-aos="zoom-in" className="unlouck-title">Maximize effeciency with <br /> intelligent  automation</h2>
        <p data-aos="zoom-in" className="unlouck-description fw-normal">
        <span className="fw-semibold text-primary">AMBISPINE TECHNOLOGIES </span>      
  invites you to join our vibrant digital community platform, where you can connect, collaborate, and foster creativity and innovation. Join us to unlock endless possibilities and experience the magic of limitless potential!
          </p>
       <div className="unlock-img">
       <img  src={unlockImg} className="u-img" alt="Feature" />
       </div>
        </div>
        <div className="home-dasboard">
       <img  src={dashboardImg} className="home-dasboard-img" alt="Feature" />
       </div>
      </section>
      
      <div className="container-home">
      <div className="row-home ">
      {
      clouddata.map((data, index)=>(
        <div className="col-lg-4 home-wrapper-container" key={index}
        data-aos="fade-right"
        data-aos-delay={index * 100} >
          <div className="home-wrapper-img">
            <img src={data.src}  alt={data.alt} />
            <div className="home-content ">
              <h4 className="home-content-header">{data.content}</h4>
              <p className="home-content-subtitle">{data.hoverContent2}</p>
            </div>
          </div>
        </div>
      ))
      }

      </div>
      </div>

      {/* <FeatureCards  clouddata={ clouddata} /> */}
      <section 
  ref={contentRef} 
  className="home-ai-features-section" 
  aria-labelledby="ai-solutions-title"
>
  <h2 id="ai-solutions-title" className="home-section-title-ai pb-5">AI-Powered Solutions</h2>
  <div className="home-features-grid" role="list">
    {contentItems.map((item, index) => (
      <div
        key={index}
        data-index={index}
        className="home-feature-card"
        role="listitem"
      >
        <p className="fs-6" style={{ color: "#333" }}>{item}</p>
      </div>
    ))}
  </div>
</section>


      
      </div>

<div className="">
<ProductserviceCard serviceProduct={service_product}/>
</div>
    


<div className="row justify-content-evenly mt-5">
  <div className="col-md-5 my-auto" >
    <h2 className="network-section-title" style={{ textAlign: 'left' }} data-aos="fade-up">
      Spread Your Wings, Expand Your Network
    </h2>
    <p className="network-description" data-aos="fade-up">
      Expand your reach and influence. Grow your connections, increase your
      opportunities, and access to resources. Make a bond with new
      possibilities and horizons.
    </p>
    <Link to="/product" className="network-learn-more-link" data-aos="fade-up">
      Learn More <FaChevronRight className="icon" />
    </Link>
  </div>
  <div className="col-md-6 network-img-container">
    <img src={officediscussingImg} className="network-img" alt="Office Discussion" />
  </div>
</div>

   
        <div className="wrapper">
   <section className="home-network-section">    
      <div className="home-network-card">
        {spreadsServices.map((data, index) => {
          return (
            <div 
              key={index} 
              data-aos="fade-down"
              data-aos-delay={index * 200} 
              className="home-card"
            >
              <div className="home-card-img">
                <img src={data.src} alt={data.alt || "Service image"} />
              </div>
              <h4 className="home-card-heading">{data.headText}</h4>
              <p className="home-card-text">{data.text}</p>
            </div>
          );
        })}
      </div>
   </section>
</div>

     
        
      
    </>
  );
};

export default HeroSection;