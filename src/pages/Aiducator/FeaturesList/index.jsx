import React from "react";
import FadeUpEffect from "../../../components/FadeUpEffect";
import styles from "../aiducator.module.css";

const features = [
  {
    title: "Natural Language Processing",
    body: "AiDucator understands and interprets conversational language, enabling smooth, human-like interactions that make finding information effortless.",
  },
  {
    title: "Multilingual Support",
    body: "Communicate seamlessly in any language. AiDucator provides real-time responses, ensuring every query is understood and addressed, no matter the language barrier.",
  },
  {
    title: "CRM Integration and Lead Generation",
    body: "Effortlessly connect AiDucator with your CRM system to streamline lead management and capture valuable prospects with ease.",
  },
  {
    title: "Dashboard Insights and Analytics",
    body: "Gain deep insights into user interactions and performance metrics with our comprehensive analytics dashboard, empowering your institution to make data-driven decisions.",
  },
  {
    title: "Scheduling Meetings and Tours",
    body: "Simplify the booking process for meetings and tours. AiDucator uses natural language prompts to make scheduling quick and intuitive.",
  },
  {
    title: "Voice Interaction",
    body: "Enhance the user experience with integrated voice capabilities, allowing students and parents to engage with AiDucator in a more dynamic and accessible way.",
  },
  {
    title: "Fully Customizable",
    body: "Tailor AiDucator to fit your institution's unique needs and branding, ensuring a seamless integration with your existing systems and identity.",
  },
  {
    title: "Extensive Knowledge Base",
    body: "Leverage a chatbot trained on your institution's specific data, providing accurate and comprehensive information at all times.",
  },
];

const FeaturesList = () => (
  <ul>
    {features.map((item, index) => (
      <FadeUpEffect tag="li" key={index} className={styles.listItem}>
        <span>{item.title}:</span> {item.body}
      </FadeUpEffect>
    ))}
  </ul>
);

export default FeaturesList;
