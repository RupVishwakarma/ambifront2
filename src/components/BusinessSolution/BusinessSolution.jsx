// import React, { useState, useEffect } from "react";
// import "./BusinessSolutions.css";
// import CallToAction from '../card/CallToAction';
// import IndustryIconSlider from './IndustryIconSlider';

// const BusinessSolutionsPage = () => {
//   const [activeTab, setActiveTab] = useState("digital");
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const serviceOfferings = [
//     {
//       id: "digital",
//       title: "Digital Transformation",
//       icon: "💻",
//       subtitle: "Reimagine Your Business in the Digital Era",
//       description:
//         "Comprehensive digital strategy that integrates cutting-edge technologies, process optimization, and innovative business models.",
//       keyPoints: [
//         "Enterprise Architecture Redesign",
//         "Cloud Migration Strategies",
//         "AI & Machine Learning Integration",
//         "Cybersecurity Enhancement",
//         "Data-Driven Decision Making",
//         "Digital Customer Experience",
//       ],
//       benefits: [
//         "Accelerate Digital Adoption",
//         "Enhance Operational Efficiency",
//         "Create New Revenue Streams",
//         "Improve Customer Experience",
//         "Reduce Operational Costs",
//         "Competitive Technological Edge",
//       ],
//     },
//     {
//       id: "strategy",
//       title: "Strategic Consulting",
//       icon: "🎯",
//       subtitle: "Precision-Driven Business Planning",
//       description:
//         "Advanced strategic planning that combines deep market insights, competitive analysis, and data-driven decision-making.",
//       keyPoints: [
//         "Market Positioning Analysis",
//         "Growth Strategy Development",
//         "Organizational Transformation",
//         "Performance Optimization",
//         "Competitive Intelligence",
//         "Change Management",
//       ],
//       benefits: [
//         "Clear Strategic Direction",
//         "Competitive Advantage",
//         "Risk Mitigation",
//         "Sustainable Growth",
//         "Organizational Agility",
//         "Strategic Resource Allocation",
//       ],
//     },
//     {
//       id: "innovation",
//       title: "Innovation Management",
//       icon: "🚀",
//       subtitle: "Catalyst for Breakthrough Innovations",
//       description:
//         "Structured innovation framework that fosters creativity, identifies emerging opportunities, and accelerates breakthrough solutions.",
//       keyPoints: [
//         "Innovation Culture Design",
//         "Technology Scouting",
//         "Startup Ecosystem Engagement",
//         "R&D Strategy Alignment",
//         "Innovation Portfolio Management",
//         "Emerging Technology Integration",
//       ],
//       benefits: [
//         "Continuous Innovation",
//         "Disruptive Thinking",
//         "Talent Attraction",
//         "Market Leadership",
//         "Future-Proofing Business",
//         "Accelerated Product Development",
//       ],
//     },
//   ];

//   const expandedClientTestimonials = [
//     {
//       name: "Michael Chen",
//       company: "TechGlobal Enterprises",
//       title: "Chief Technology Officer",
//       quote:
//         "Their digital transformation strategy was a game-changer. We increased operational efficiency by 40% and launched three new digital products.",
//       rating: 5,
//       image: "👨‍💼",
//     },
//     {
//       name: "Sarah Rodriguez",
//       company: "FinanceInnovate",
//       title: "Chief Strategy Officer",
//       quote:
//         "Exceptional strategic consulting that provided clear, actionable insights. Their approach helped us navigate complex market challenges.",
//       rating: 5,
//       image: "👩‍💼",
//     },
//     {
//       name: "David Kim",
//       company: "GlobalRetail Solutions",
//       title: "Head of Innovation",
//       quote:
//         "Our innovation management process was completely transformed. We've seen a 60% increase in new product development speed.",
//       rating: 5,
//       image: "👨‍💻",
//     },
//   ];

//   const expandedKeyAdvantages = [
//     {
//       icon: "🔒",
//       title: "Secure & Compliant",
//       description:
//         "Enterprise-grade security and regulatory compliance across global standards",
//       details:
//         "ISO 27001 certified, GDPR compliant, advanced threat protection",
//     },
//     {
//       icon: "🤝",
//       title: "Collaborative Partnership",
//       description:
//         "Customized solutions with dedicated expert teams and continuous engagement",
//       details:
//         "Agile methodologies, weekly strategic reviews, personalized roadmaps",
//     },
//     {
//       icon: "📊",
//       title: "Data-Driven Approach",
//       description:
//         "Advanced analytics and actionable insights powered by cutting-edge technologies",
//       details:
//         "Machine learning models, predictive analytics, real-time dashboards",
//     },
//   ];
//   return (
//     <div className="business-solutions-platform">
//       {/* Hero Section */}
//       <section className="hero_business">
//         <div className="hero-overlay">
//           <h1>Business Solution</h1>
//           <p>
//             Transform Your Digital Vision into Powerful Mobile Solutions with
//             Think Web Hub.Start Designs is an emerging web development company
//             that offers website development services. .
//           </p>
//         </div>
//       </section>

//       {/* Services Section */}
//       <section className="services-section">
//         <h2>Our Comprehensive Service Offerings</h2>
//         <div className="services-tabs">
//           {serviceOfferings.map((service) => (
//             <button
//               key={service.id}
//               className={`service-tab ${
//                 activeTab === service.id ? "active" : ""
//               }`}
//               onClick={() => setActiveTab(service.id)}
//             >
//               <span className="service-icon">{service.icon}</span>
//               {service.title}
//             </button>
//           ))}
//         </div>

//         {/* Active Service Details */}
//         <div className="service-details">
//           {serviceOfferings
//             .filter((s) => s.id === activeTab)
//             .map((service) => (
//               <div key={service.id} className="service-content">
//                 <h3>{service.subtitle}</h3>
//                 <p>{service.description}</p>

//                 <div className="service-breakdown">
//                   <div className="key-points">
//                     <h4>Key Capabilities</h4>
//                     <ul>
//                       {service.keyPoints.map((point, index) => (
//                         <li key={index}>{point}</li>
//                       ))}
//                     </ul>
//                   </div>
//                   <div className="service-benefits">
//                     <h4>Anticipated Benefits</h4>
//                     <ul>
//                       {service.benefits.map((benefit, index) => (
//                         <li key={index}>{benefit}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             ))}
//         </div>
//       </section>

//       {/* <section className="testimonials-section">
//         <h2>Success Stories That Speak Volumes</h2>
//         <div className="testimonial-grid">
//           {expandedClientTestimonials.map((testimonial, index) => (
//             <div key={index} className="testimonial-card">
//               <div className="testimonial-avatar">{testimonial.image}</div>
//               <p>"{testimonial.quote}"</p>
//               <div className="testimonial-footer">
//                 <strong>{testimonial.name}</strong>
//                 <span>
//                   {testimonial.title}, {testimonial.company}
//                 </span>
//                 <div className="rating">{"★".repeat(testimonial.rating)}</div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section> */}

//       <section className="advantages-section">
//         <h2>Why Choose StrategySync</h2>
//         <div className="advantages-grid">
//           {expandedKeyAdvantages.map((advantage, index) => (
//             <div key={index} className="advantage-card">
//               <div className="advantage-icon">{advantage.icon}</div>
//               <h3>{advantage.title}</h3>
//               <p>{advantage.description}</p>
//               <div className="advantage-details">{advantage.details}</div>
//             </div>
//           ))}
//         </div>
//       </section>
//       {/* New Industry Expertise Section */}
//       {/* <section className="industry-expertise-section">
//         <h2>Industry Expertise</h2>
//         <div className="industry-grid">
//           {[
//             "Technology",
//             "Finance",
//             "Healthcare",
//             "E-Commerce",
//             "Manufacturing",
//             "Energy",
//           ].map((industry, index) => (
//             <div key={index} className="industry-card">
//               <div className="industry-icon">🏢</div>
//               <h3>{industry}</h3>
//             </div>
//           ))}
//         </div>
//       </section> */}

//       <section>
//        <IndustryIconSlider />
//       </section>

//       {/* Consultation Section */}
//       {/* <section className="consultation_b-section">
//         <div className="consultation-box">
//           <h3>Get Free Consultation Now!.</h3>
//           <p>Let's create a powerful website that grows with your business</p>
//           <button className="consult-btn">Consult Now →</button>
//         </div>
//       </section> */}
//       <CallToAction />
//     </div>
//   );
// };

// export default BusinessSolutionsPage;

import React, { useState, useEffect } from "react";
import "./BusinessSolutions.css";
import CallToAction from '../card/CallToAction';
import IndustryIconSlider from './IndustryIconSlider';
import { FaArrowDown } from "react-icons/fa";
import { PiBankLight } from "react-icons/pi";
import { TiShoppingCart } from "react-icons/ti";
import { BiSolidSchool } from "react-icons/bi";
import { FaCircleUser } from "react-icons/fa6";
import { FaUsersGear } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";
import { HiCurrencyDollar } from "react-icons/hi2";

const BusinessSolutionsPage = () => {
  const [activeTab, setActiveTab] = useState("digital");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceOfferings = [
    {
      id: "digital",
      title: "Digital Transformation",
      icon: "💻",
      subtitle: "Reimagine Your Business in the Digital Era",
      description:
        "Meet new opportunities with a comprehensive digital strategy that transforms your business and drives growth.",
      keyPoints: [
        {
          title: "Enterprise Architecture Redesign",
          description: "Establish a clear vision and strategy and boost your business capability with technology roadmapping.",
          icon: FaArrowDown,
        },
        {
          title: "Cloud Migration Strategies",
          description: "A well-planned cloud migration strategy can help you to improve your business agility and responsiveness",
          icon: FaArrowDown,
        },
        {
          title: "AI & Machine Learning Integration",
          description: "Operate your business and make more efficient, agile and innovative, Automate repetitive task and processes.",
          icon: FaArrowDown,
        },
        {
          title: "Cybersecurity Enhancement",
          description: "Protect your business from evolving cyber threats wit a robust cybersecurity strategy. Enhance your cybersecurity posture and ensure business continuity.",
          icon: FaArrowDown,
        },{
          title: "Data-Driven Decision Making",
          description: "Improve accuracy, increase efficiency and enhanced customer experiences and drive business success .",
          icon: FaArrowDown,
        },{
          title: "Digital Customer Experience",
          description: "Join the digital age with a well-designed digital customer experience. Drive business success through personalized, intuitive, and seamless experience.",
          icon: FaArrowDown,
        }
      ],
    },
    {
      id: "strategy",
      title: "Strategic Consulting",
      icon: "🎯",
      subtitle: "Precision-Driven Business Planning",
      description:
        "Advanced strategy planning that combine deep market insights, competitive analysis and data-driven decision making to drive growth and stay ahead of the competition.",
      keyPoints: [
        {
          title: "Market Positioning Analysis",
          description: "It involves analyzing various market and customer-related factors to determine the company's strengths, weaknesses, opportunities, and threats.",
          icon: FaArrowDown,
        },
        {
          title: "Growth Strategy Development",
          description: "Increase revenue with clear direction and improve competitiveness. Develop strategy to improve the growth with cloud migration strategies. ",
          icon: FaArrowDown,
        },
        {
          title: "Organizational Transformation",
          description: "Unlock sustainable success through organizational transformation. Develop leaders, improve processes, and adopt technology to drive innovation and efficiency.",
          icon: FaArrowDown,
        },
        {
          title: "Performance Optimization",
          description: "Give a peak performance in your organization with performance optimization. Eliminate inefficiencies, drive growth, innovation, and sustainability with a comprehensive optimization strategy.",
          icon: FaArrowDown,
        },{
          title: "Competitive Intelligence",
          description: "Stay ahead of the competition with actionable insights from competitive intelligence. Gather, analyze, and disseminate information to drive business success.",
          icon: FaArrowDown,
        },{
          title: "Change Management",
          description: "Navigate organizational change with ease using effective change management strategies. Minimize resistance to change and ensure a smooth transition with our expert guidance.",
          icon: FaArrowDown,
        }
      ],
      
    },
    {
      id: "innovation",
      title: "Innovation Management",
      icon: "🚀",
      subtitle: "Catalyst for Breakthrough Innovations",
      description:
        "Catalyst for breakthrough innovations is a comprehensive approach that combines innovation culture design, technology scouting, startup ecosystem engagement, R&D strategy alignment, innovation portfolio management, and emerging technology integration to drive sustainable success",
      keyPoints: [
        {
          title: "Innovation Culture Design",
          description: "Innovation culture design involves creating an environment that fosters creativity, experimentation, and risk-taking to drive innovation and growth.",
          icon: FaArrowDown,
        },
        {
          title: "Technology Scouting",
          description: "Technology scouting involves identifying and leveraging emerging technologies to drive innovation and stay ahead of the competition.",
          icon: FaArrowDown,
        },
        {
          title: "Startup Ecosystem Engagement",
          description: "Startup ecosystem engagement involves collaborating with startups to access innovative solutions and talent, and to drive growth and innovation.",
          icon: FaArrowDown,
        },
        {
          title: "R&D Strategy Alignment",
          description: "R&D strategy alignment involves aligning R&D strategies with business objectives to drive innovation and growth, and to maximize ROI.",
          icon: FaArrowDown,
        },{
          title: "Innovation Portfolio Management",
          description: "Innovation portfolio management involves managing innovation portfolios to maximize ROI and minimize risk, and to drive growth and innovation.",
          icon: FaArrowDown,
        },{
          title: "Emerging Technology Integration",
          description: "Emerging technology integration involves integrating emerging technologies into business operations to drive innovation and growth, and to stay ahead of the competition.",
          icon: FaArrowDown,
        }
      ],
    },
  ];
  const expetSoftware = [
    {
      title: "Banking Software",
      description: "Optimize your enterprise architecture for digital transformation.",
      icon: PiBankLight,
    },
    {
      title: "CRM Software",
      description: "Cloud Migration Strategies Cloud Migration Strategies.",
      icon: PiBankLight,
    },
    {
      title: "E- commerce Software",
      description: "AI & Machine Learning Integration digital transformation.",
      icon: TiShoppingCart,
    },
    {
      title: "Education Software",
      description: "AI & Machine Learning Integration digital transformation.",
      icon: BiSolidSchool,
    },{
      title: "HR Software",
      description: "AI & Machine Learning Integration digital transformation.",
      icon: FaCircleUser,
    },{
      title: "Microfinance Software",
      description: "Digital Customer Experience digital transformation.",
      icon: FaArrowDown,
    },
    {
      title: "NGO Software",
      description: "Digital Customer Experience digital transformation.",
      icon: FaHandshakeSimple,
    },
    {
      title: "Billing Software",
      description: "Digital Customer Experience digital transformation.",
      icon: HiCurrencyDollar,
    },{
      title: "Field Officer Software",
      description: "Digital Customer Experience digital transformation.",
      icon: FaUsersGear,
    }
  ];

  const expandedClientTestimonials = [
    {
      name: "Michael Chen",
      company: "TechGlobal Enterprises",
      title: "Chief Technology Officer",
      quote:
        "Their digital transformation strategy was a game-changer. We increased operational efficiency by 40% and launched three new digital products.",
      rating: 5,
      image: "👨‍💼",
    },
    {
      name: "Sarah Rodriguez",
      company: "FinanceInnovate",
      title: "Chief Strategy Officer",
      quote:
        "Exceptional strategic consulting that provided clear, actionable insights. Their approach helped us navigate complex market challenges.",
      rating: 5,
      image: "👩‍💼",
    },
    {
      name: "David Kim",
      company: "GlobalRetail Solutions",
      title: "Head of Innovation",
      quote:
        "Our innovation management process was completely transformed. We've seen a 60% increase in new product development speed.",
      rating: 5,
      image: "👨‍💻",
    },
  ];

  const expandedKeyAdvantages = [
    {
      icon: "🔒",
      title: "Secure & Compliant",
      description:
        "Enterprise-grade security and regulatory compliance across global standards",
      details:
        "ISO 27001 certified, GDPR compliant, advanced threat protection",
    },
    {
      icon: "🤝",
      title: "Collaborative Partnership",
      description:
        "Customized solutions with dedicated expert teams and continuous engagement",
      details:
        "Agile methodologies, weekly strategic reviews, personalized roadmaps",
    },
    {
      icon: "📊",
      title: "Data-Driven Approach",
      description:
        "Advanced analytics and actionable insights powered by cutting-edge technologies",
      details:
        "Machine learning models, predictive analytics, real-time dashboards",
    },
  ];
  return (
    <div className="business-solutions-platform">
      {/* Hero Section */}
      <section className="hero_business">
        <div className="hero-overlay">
          <h1>Business Solution</h1>
          <p>
            Transform Your Digital Vision into Powerful Mobile Solutions with
            Think Web Hub.Start Designs is an emerging web development company
            that offers website development services. .
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Comprehensive Service Offerings</h2>
        <div className="services-tabs">
          {serviceOfferings.map((service) => (
            <button
              key={service.id}
              className={`service-tab ${
                activeTab === service.id ? "active" : ""
              }`}
              onClick={() => setActiveTab(service.id)}
            >
              <span className="service-icon">{service.icon}</span>
              {service.title}
            </button>
          ))}
        </div>

        {/* Active Service Details */}
        
        <div className="service-details">
        {serviceOfferings
          .filter((service) => service.id === activeTab)
          .map((service) => (
            <div key={service.id} className="service-content">
              <h3>{service.subtitle}</h3>
              <p>{service.description}</p>
              <div className="service-breakdown ">
                {service.keyPoints.map((item, index) => (
                  <div key={index} className="">
                    <div className="service-details-show">
                      <div>
                      <item.icon className="business-services-icon" />
                      </div>
                      <div className="pt-3 ms-4 text-start">
                      <h4>{item.title}</h4>
                      <p className="text-start">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      </section>

      {/* <section className="testimonials-section">
        <h2>Success Stories That Speak Volumes</h2>
        <div className="testimonial-grid">
          {expandedClientTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-avatar">{testimonial.image}</div>
              <p>"{testimonial.quote}"</p>
              <div className="testimonial-footer">
                <strong>{testimonial.name}</strong>
                <span>
                  {testimonial.title}, {testimonial.company}
                </span>
                <div className="rating">{"★".repeat(testimonial.rating)}</div>
              </div>
            </div>
          ))}
        </div>
      </section> */}

      <section className="advantages-section">
        <h2>Our expert software product </h2>
        <div className="expert-service-grid">
          {expetSoftware.map((advantage, index) => (
            <div key={index} className="expert-service-card">
              <div className="advantage-icon fs-1"><advantage.icon className="expert-software-icon"/></div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
              <div className="advantage-details">{advantage.details}</div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="advantages-section">
        <h2>Why Choose StrategySync</h2>
        <div className="advantages-grid">
          {expandedKeyAdvantages.map((advantage, index) => (
            <div key={index} className="advantage-card">
              <div className="advantage-icon fs-2">{advantage.icon}</div>
              <h3>{advantage.title}</h3>
              <p>{advantage.description}</p>
              <div className="advantage-details">{advantage.details}</div>
            </div>
          ))}
        </div>
      </section>
      {/* New Industry Expertise Section */}
      {/* <section className="industry-expertise-section">
        <h2>Industry Expertise</h2>
        <div className="industry-grid">
          {[
            "Technology",
            "Finance",
            "Healthcare",
            "E-Commerce",
            "Manufacturing",
            "Energy",
          ].map((industry, index) => (
            <div key={index} className="industry-card">
              <div className="industry-icon">🏢</div>
              <h3>{industry}</h3>
            </div>
          ))}
        </div>
      </section> */}

      <section>
       <IndustryIconSlider />
      </section>

      {/* Consultation Section */}
      {/* <section className="consultation_b-section">
        <div className="consultation-box">
          <h3>Get Free Consultation Now!.</h3>
          <p>Let's create a powerful website that grows with your business</p>
          <button className="consult-btn">Consult Now →</button>
        </div>
      </section> */}
      <CallToAction />
    </div>
  );
};

export default BusinessSolutionsPage;
