// import React, { Fragment, useEffect, useState } from "react";
// import "./About.css";
// import aboutusImg from "../../assets/about.jpg"
// import about1 from '../../assets/about1.jpg'
// import OurTeam from "./OurTeam";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchTeamMembers } from "../../redux/admin/slice/teamSlice";
// import {Link} from 'react-router-dom';
// import { FaChevronDown } from "react-icons/fa6";
// import { FaChevronUp } from "react-icons/fa";
// // TeamMember component
// import { FaChevronRight } from "react-icons/fa";
// import VisionAbout from './VisionSlider';

// const AboutMe = () => {
//   const dispatch = useDispatch();
//   const { teamMembers } = useSelector((state) => state.team);

//   const [companycontent, setCompanyContent] = useState([
//     {
//       id: 1, 
//       img : aboutusImg, 
//       title: 'Connect, grow and succeed with us!',
//       content: ' We are a dynamic community empowering individuals to achievetheir goals, expand their network, and discover new opportunities. Through connection, growth, and support, we unlock potential, foster meaningful relationships, and create aripple effect of success. Join us and transform your life!'
//     },
//     { 
//       id:2,
//       img: about1, 
//       content: 'In a world where technology bridges gaps and brings people closer, we stand at the forefront. We specialize in enhancing business health through robust IT support and innovative SaaS applications. Solutions are designed to connect people, streamline processes, and empower companies to reach their full potential. With personalized support and cutting-edge technology, we ensure your business runs smoothly and efficiently. Connecting People, Empowering Success.'
//     },
    
//   ])

//   const toggleDescription = (id) => {
//     setCompanyContent(
//       companycontent.map((item) =>
//         item.id === id ? { ...item, isExpanded: !item.isExpanded } : item
//       )
//     );
//   };

//   useEffect(() => {
//     dispatch(fetchTeamMembers());
//   }, [dispatch]);
  

//   return (
//     <>
//       <section>

//       <header className="main about-header">
//         <div className="company-banner-wrapper">
//           <div className="main-content">
//             <div className="content-text">
//               <h1>About Us</h1>
//               <p>Get the latest news, updates, and tips</p>
//             </div>
//           </div>
//         </div>
//       </header>
//       <section>
        
//       </section>


//         <div className="about-page">
//         <div className="about-content">
//             {/* <div className="">
//               <img
//                 src={aboutusImg}
//                 alt="Our Services"
//               />
//               <p className="about-para" >
//                 We are a dynamic community empowering individuals to achieve
//                 their goals, expand their network, and discover new
//                 opportunities. Through connection, growth, and support, we
//                 unlock potential, foster meaningful relationships, and create a
//                 ripple effect of success. Join us and transform your life!
//               </p>
//             </div>
//             <div className="about-me pt-5">
//             <img
//                 src={aboutusImg}
//                 alt="Our Services"
//               />
//               <h1  style={{ color: "black", fontWeight: "bold" }}>
//               Connect, grow and succeed with us!
//               </h1>
//               <p className="about-para">Empower individual to achieve their goals expand their network and find new opportunity "" </p>
//               <p className="about-para" >
//                 We are a dynamic community empowering individuals to achieve
//                 their goals, expand their network, and discover new
//                 opportunities. Through connection, growth, and support, we
//                 unlock potential, foster meaningful relationships, and create a
//                 ripple effect of success. Join us and transform your life!
//               </p>
//               <button>Read More</button>
//               <Link to="/product" className="network-learn-more-link" data-aos="fade-up">
//                 Learn More <FaChevronRight className="icon" />
//                   </Link>
//             </div> */}
//           </div>

//           <div className="company-image-details-con">
//           {
//               companycontent.map((item, index)=>{
//                 return (<div key={index} className="">
//                   <div className=' About-image-container' >
//                   <img src={item.img} className=' AboutImage' alt="Our Company" />
//                   <span className="img-accent-gradient"></span>
//                   <h5 className="text-start mt-4">{item.title}</h5>
//                   <p className=" text-start " style={{marginBottom:"0px"}}>{item.isExpanded ? item.content : `${item.content.slice(0, 130)}...`}</p>        
//                   <span onClick={() => toggleDescription(item.id)} >{item.isExpanded ? <FaChevronUp className="icon text-primary" /> : <FaChevronDown  className="icon text-primary" /> }</span>
//                 </div>  
//                 </div>)
//               })
//             }
//             </div>

//             {/* <p> We are a dynamic community empowering individuals to achieve
//                 their goals, expand their network, and discover new
//                 opportunities. Through connection, growth, and support, we
//                 unlock potential, foster meaningful relationships, and create a
//                 ripple effect of success. Join us and transform your life!</p> */}  
//         </div>
//         <div className="about-text">
//           <h1 className="about-title">About Our Company</h1>
//           <p>            In a world where technology bridges gaps and brings people closer,
//             we stand at the forefront. We specialize in enhancing business
//             health through robust IT support and innovative SaaS applications.
//             Solutions are designed to connect people, streamline processes, and
//             empower companies to reach their full potential. With personalized
//             support and cutting-edge technology, we ensure your business runs
//             smoothly and efficiently. Connecting People, Empowering Success.</p>
//           </div>
//         <VisionAbout />
//         <div className="team-page">
//           {/* <h2 className="com-title">OUR COMPANY</h2> */}
//           <h1 className="com-subtitle">Meet Our Team</h1>
//           <div className="com-text">
//             Even the best technology needs the best people with the right spirit
//             behind it. Right across the world, we have a team of dreamers and
//             doers just like you, ready to help bring your ideas to life. Here
//             are the folks leading the charge.
//           </div>
//           <div className="com-team">
//             {teamMembers.map((member, index) => (
//               <OurTeam key={index} {...member} />
//             ))}
//           </div>
//         </div>
        
//       </section>
      
//     </>
//   );
// };

// export default AboutMe;

import React, { Fragment, useEffect, useState } from "react";
import "./About.css";
import aboutusImg from "../../assets/about.jpg"
import OurTeam from "./OurTeam";
import { useDispatch, useSelector } from "react-redux";
import { fetchTeamMembers } from "../../redux/admin/slice/teamSlice";
import VisionSlider from './VisionSlider'
// TeamMember component

const AboutMe = () => {
  const dispatch = useDispatch();
  const { teamMembers } = useSelector((state) => state.team);
  const [isExpanded, setIsExpanded] = useState(false);
  const fulltext = 'We are a dynamic community empowering individuals to achieve their goals, expand their network, and discover new opportunities. Through connection, growth, and support, we unlock potential, foster meaningful relationships, and create a ripple effect of success. Join us and transform your life!';

  
  useEffect(() => {
    dispatch(fetchTeamMembers());
  }, [dispatch]);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const truncatedText = fulltext.split(' ').slice(0, 20).join(' ') + '...';

  return (
    <>
      <section>
<header className="main about-header">
  <div className="company-banner-wrapper">
    <div className="main-content">
      <div className="content-text">
        <h1>About Us</h1>
        <p>Get the latest news, updates, and tips</p>
      </div>
    </div>
  </div>
</header>


        <div className="about-page">
          <h1 className="about-title">About Our Company</h1>
          <div className="about-text">
            In a world where technology bridges gaps and brings people closer,
            we stand at the forefront. We specialize in enhancing business
            health through robust IT support and innovative SaaS applications.
            Solutions are designed to connect people, streamline processes, and
            empower companies to reach their full potential. With personalized
            support and cutting-edge technology, we ensure your business runs
            smoothly and efficiently. Connecting People, Empowering Success.
          </div>
          <div className="about-content">
            <div>
              <img
                src={aboutusImg}
                alt="Our Services"
              />
            </div>
            <div className="about-me">
              <h1 className="ms-2" style={{ fontWeight: "bold" }}>
              Connect, grow and succeed with us!
              </h1>
              <p className="about-para"> Empower individual to
                achieve their goals expand their network and find new
                opportunity
              </p>
           
              <p className="about-para">{isExpanded ? fulltext : truncatedText}</p>
              <button onClick={toggleReadMore}> {isExpanded ? 'Read Less' : 'Read More'}</button>
            </div>
          </div>
        </div>
       <div style={{marginTop:"150px"}}>
       <VisionSlider />
       </div>
        <div className="team-page">
          {/* <h2 className="com-title">OUR COMPANY</h2> */}
          <h1 className="com-subtitle">Meet Our Team</h1>
          <div className="com-text">
            Even the best technology needs the best people with the right spirit
            behind it. Right across the world, we have a team of dreamers and
            doers just like you, ready to help bring your ideas to life. Here
            are the folks leading the charge.
          </div>
          <div className="com-team">
            {teamMembers.map((member, index) => (
              <OurTeam key={index} {...member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
