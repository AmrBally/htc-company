import React from "react";
import { Button } from "react-bootstrap";
import "./Welcome.css";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="content">
        <h3>Welcome To Our Company</h3>
        <h1 className="sec-logo">
          <Typewriter
            options={{
              strings: "Hi Tech Chemicals",
              autoStart: true,
              loop: true,
              delay: 500,
            }}
          />
        </h1>
        <p>Hope We Help You To Get What You Looking For !</p>
        <Button onClick={() => navigate("/contactus")} variant="danger">
          Join Now
        </Button>
      </div>
    </div>
  );
};

export default Welcome;
