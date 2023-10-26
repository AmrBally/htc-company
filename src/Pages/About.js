import React from "react";
import companyImage from "../images/company.png";
import "./About.css";
import BeforeFooter from "../components/BeforeFooter";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <div className="about-content">
        <div className="divImage">
          <img src={companyImage} alt="" />
        </div>
        <div className="divP">
          <p>
            HTC Protective Coatings is a leading manufacturer and supplier of
            quality protective coatings, servicing Australia, New Zealand, Papua
            New Guinea and Fiji for over 80 years.
          </p>
        </div>
      </div>
      <div className="paragraphs">
        <p>
          HTCGroup is a leading manufacturer and marketer of products that
          protect, maintain and enhance the spaces and places in which we live
          and work.
        </p>
        <p>
          With an extensive network of manufacturing, distribution centres and
          trade sales outlets throughout the Asia Pacific region, HTCGroup can
          readily supply our products across this geographically diverse market.
        </p>
        <p>
          HTC Protective Coatings' market leadership through use of world class
          technologies, local market presence, depth of experience and technical
          expertise, enables us to work with you to provide long term and
          sustainable solutions for the protection of new and existing
          buildings, infrastructure, facilities, plant and equipment.
        </p>
        <p>
          With our extensive product range and our experienced, customer-focused
          team, HTC Protective Coatings provides tailor-made solutions for
          specifiers, project engineers, architects, facilities managers and
          applicators. We provide all the information you need, covering
          everything from substrate preparation to application methods and
          maintenance scheduling, ensuring your assets are effectively
          protected, in even the most demanding conditions.
        </p>
        <p>
          Our maintenance systems are practical and cost-effective. You benefit
          from reduced down-times, lower maintenance costs and sustained value
          of your assets.
        </p>
      </div>
      <BeforeFooter />
    </div>
  );
};

export default About;
