import React from "react";
import Welcome from "../components/Welcome";
import CardItem from "../components/CardItem";
import ColorCard from "../components/ColorCard";
import BeforeFooter from "../components/BeforeFooter";
import HighPerformance from "../components/HighPerformance";

const Home = () => {
  return (
    <>
      <Welcome />
      <HighPerformance />
      <CardItem />
      <ColorCard />
      <BeforeFooter />
    </>
  );
};

export default Home;
