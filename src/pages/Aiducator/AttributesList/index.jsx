import React from "react";
import FadeUpEffect from "../../../components/FadeUpEffect";
import styles from "../aiducator.module.css";

const attributes = [
  {
    title: "Effortless Information Access",
    body: "AiDucator turns complex searches into simple conversations. Students and parents get instant answers to their questions, without the frustration of navigating through endless pages.",
  },
  {
    title: "Lighten Administrative Load",
    body: "Let AiDucator handle the routine queries, so your staff can focus on what truly matters—providing personalized support and tackling the bigger challenges.",
  },
  {
    title: "24/7 Availability",
    body: "AiDucator never sleeps. It's always there, ready to assist students and parents anytime, ensuring they feel supported around the clock.",
  },
  {
    title: "Personalized Assistance",
    body: "Every interaction is tailored. AiDucator understands individual needs and delivers the right information, right when it's needed, making every query feel personal and relevant.",
  },
  {
    title: "Data-Driven Insights",
    body: "With AiDucator, every conversation is an opportunity to learn. Gain valuable insights from user interactions to continuously improve your institution's services and better meet the needs of your community.",
  },
];

const AttributesList = () => (
  <ul>
    {attributes.map((item, index) => (
      <FadeUpEffect tag="li" key={index}>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.body}>{item.body}</p>
      </FadeUpEffect>
    ))}
  </ul>
);

export default AttributesList;
