import React from "react";
import "./HighPerformance.css";
import { Card } from "react-bootstrap";
import { highPerformance } from "./db";

const HighPerformance = () => {
  return (
    <div className="carditem-container ">
      <h1>High Performance Protection</h1>
      <p>See the Dulux Protective Coating systems in action.</p>
      <div className="card-container">
        {highPerformance.map((item) => {
          return (
            <Card className="cardDiv" key={item.id} style={{ width: "18rem" }}>
              <Card.Img className="img" variant="top" src={item.image} />
              <div
                className="title"
                style={{
                  color: "#eee",
                  backgroundColor: "#5767aa",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {item.name}
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default HighPerformance;
