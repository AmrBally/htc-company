import React from "react";
import "./ColorCard.css";
import { colors } from "./db";
import { Card, CardBody, CardText } from "react-bootstrap";

const ColorCard = () => {
  return (
    <div className="colorContainer">
      <h1>COLORS</h1>
      <div>
        {colors.map((color) => {
          return (
            <Card key={color.id}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h5>{color.name}</h5>
                <div
                  style={{
                    backgroundColor: `${color.color}`,
                    width: "180px",
                    height: "50px",
                    borderRadius: "5px",
                    border: "1px solid",
                  }}
                  className="colorDiv"
                ></div>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ColorCard;
