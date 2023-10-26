import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { categories } from "./db";
import "./CardItem.css";

const CardItem = () => {
  return (
    <div className="carditem-container ">
      <h1>OUR CATEGORIES</h1>
      <div className="card-container">
        {categories.map((item) => {
          return (
            <Card className="cardDiv" key={item.id} style={{ width: "18rem" }}>
              <Card.Img className="img" variant="top" src={item.image} />
              <Card.Body>
                <Card.Title style={{ color: "#3387EC" }}>
                  {item.name}
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                {/* <Button variant="primary">Go Check</Button> */}
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default CardItem;
