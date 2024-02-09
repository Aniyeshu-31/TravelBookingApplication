import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const ServicesData = [
  {
    imgUrl: weatherImg,
    title: "Wide Range of Destinations",
    desc: "We offer a wide range of destinations to choose from, including popular tourist spots as well as off-the-beaten-path locations. Whether you're looking for a beach vacation, a city break, or a wilderness adventure, we've got you covered.",
  },
  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Our tours and travel website only works with the best tour guides in the industry. Our tour guides are highly knowledgeable, friendly, and passionate about their work. They possess a deep understanding of the local culture and customs, making them valuable resources for travelers.",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "Our tours and travel website offers a customization feature that allows you to design a personalized itinerary based on your preferences. You can choose your destinations, activities, accommodations, and transportation, and our team of travel experts will work with you to create a tour package.",
  },
];
const ServiceList = () => {
  return (
    <>
      {ServicesData.map((item, index) => (
        <Col lg="3" key={index}>
          <ServiceCard item={item} />
        </Col>
      ))}
    </>
  );
};

export default ServiceList;
