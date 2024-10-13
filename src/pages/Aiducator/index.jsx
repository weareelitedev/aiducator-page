import FadeUpEffect from "../../components/FadeUpEffect";
import HeroSection from "../../components/HeroSection";
import EndSection from "../../components/EndSection";
import ContactSection from "../../components/ContactSection";
import VideoPlayer from "../../components/VideoPlayer";
import Button from "../../components/Button";
import {
  cubesImgBg,
  blueBgMobile,
  smallRightArrow,
  aiducatorBottomBg,
  aiducatorMiddleBg,
} from "../../constants/assets";
import styles from "./aiducator.module.css";
import { useState } from "react";
import { TextField } from "@mui/material";
import useDisplay from "../../hooks/useDisplay";
import Popup from "../../components/Popup";
import Footer from "../../components/Footer";
import { useLocation, useNavigate, useNavigation } from "react-router-dom";

function Aiducator() {
  const [isMobileDisplay] = useDisplay();
  const [isOpen, setIsOpen] = useState(false);

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
      body: "AiDucator never sleeps. It’s always there, ready to assist students and parents anytime, ensuring they feel supported around the clock.",
    },
    {
      title: "Personalized Assistance",
      body: "Every interaction is tailored. AiDucator understands individual needs and delivers the right information, right when it’s needed, making every query feel personal and relevant.",
    },
    {
      title: "Data-Driven Insights",
      body: "With AiDucator, every conversation is an opportunity to learn. Gain valuable insights from user interactions to continuously improve your institution’s services and better meet the needs of your community.",
    },
  ];

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
      body: "Tailor AiDucator to fit your institution’s unique needs and branding, ensuring a seamless integration with your existing systems and identity.",
    },
    {
      title: "Extensive Knowledge Base",
      body: "Leverage a chatbot trained on your institution’s specific data, providing accurate and comprehensive information at all times.",
    },
  ];

  const router = useNavigate();

  return (
    <>
      <HeroSection
        title={"The Smart Solution for Modern Education"}
        subTitle={"Aiducator"}
        description={
          "We empower schools and universities to harness cutting-edge technology, transforming teaching and learning for remarkable outcomes."
        }
        image={cubesImgBg}
        onClick={() => {
          if (window && window.location) {
            window.location.href = "https://www.cts.ae/contact-us/";
          }
        }}
      />
      <section className={styles.secondSection}>
        <FadeUpEffect tag="h2">{"Discover AiDucator"}</FadeUpEffect>
        <FadeUpEffect tag="p">
          {
            "Welcome to the future of education with AiDucator, the all-in-one AI solution that transforms the admissions process into a seamless, intuitive experience. "
          }
        </FadeUpEffect>
        <FadeUpEffect tag="p">
          {
            "Designed to meet the unique needs of students, parents, and educational institutions, AiDucator harnesses the power of advanced AI to deliver personalized, real-time support—while keeping the human touch at its core. Say goodbye to the frustrations of traditional searches and hello to a smarter, more efficient way to connect with your prospective community."
          }
        </FadeUpEffect>
        <Button href="#" id={3} img={smallRightArrow}>
          Learn more
        </Button>
      </section>
      <section className={styles.thirdSection}>
        <VideoPlayer
          url={
            "https://d6zyps6w1bjznwd8.public.blob.vercel-storage.com/AiDucator_ExplainerVideo_MP4-4Keble489mB3Vyi13ypyD9GXTlD7jQ.mp4"
          }
          title={"Effortless information access"}
          desc={"Aiducator simplifie"}
        />
        <FadeUpEffect tag="h2">
          {"Lost in the Shuffle? The Strain of Traditional Searches."}
        </FadeUpEffect>
        <FadeUpEffect tag="p">
          {
            "Enter AiDucator—a game-changing AI solution that takes the complexity out of the equation. With AiDucator, students and parents no longer need to sift through cluttered webpages or struggle with outdated search tools. Our AI-driven chatbot delivers instant, personalized responses to every query, ensuring that information is not just accessible but effortlessly delivered. For educational institutions, AiDucator is more than a tool—it’s a necessity."
          }
        </FadeUpEffect>
        <FadeUpEffect tag="p">
          {
            "Navigating school and university websites has become a daunting task for students and parents alike. The endless clicking, scrolling, and hunting for crucial information leaves them overwhelmed and frustrated, often missing out on vital details that could shape their educational journey. In a world where time is precious, the traditional search methods feel outdated, inefficient, and impersonal."
          }
        </FadeUpEffect>
        <Button href="#" id={3} img={smallRightArrow}>
          Book a Demo
        </Button>
      </section>
      <section className={styles.fourthSection}>
        <FadeUpEffect tag="h2">
          {"Why Every Institution Needs AiDucator?"}
        </FadeUpEffect>
        <ul>
          {attributes.map((item, index) => (
            <FadeUpEffect tag="li" key={index}>
              <p className={styles.title}>{item.title}</p>
              <p className={styles.body}>{item.body}</p>
            </FadeUpEffect>
          ))}
        </ul>
      </section>
      <ContactSection
        title={"Shaping the future of"}
        underlinedTitle={"innovational education"}
        desc={
          "We empower schools and universities to harness cutting-edge technology, transforming teaching and learning for remarkable outcomes."
        }
        isVideoBackground={false}
        url={aiducatorMiddleBg}
      />

      <section className={styles.sixthSection}>
        <FadeUpEffect tag="h2">
          {"Explore the Full Suite of Capabilities"}
        </FadeUpEffect>
        <ul>
          {features.map((item, index) => (
            <FadeUpEffect tag="li" key={index} className={styles.listItem}>
              <span>{item.title}:</span> {item.body}
            </FadeUpEffect>
          ))}
        </ul>
      </section>

      <EndSection
        titleIntro={"Reach out to us"}
        title={"Streamline your visitors’ search experience"}
        underlinedTitle={"and start engaging more effectively with prospects."}
        content={null}
        background={aiducatorBottomBg}
        titleMobile={"Let’s get to know each other"}
        underlinedTitleMobile={"Reach out."}
        contentMobile={
          "Empowering users with rapid content generation, Thunda transforms ideas into well-articulated, structured, and persuasive text."
        }
        backgroundMobile={blueBgMobile}
        isBackgroundImg={true}
        style={isMobileDisplay ? 1 : 0}
      />
      <Footer />
      {isOpen && (
        <Popup onClick={() => setIsOpen(false)}>
          <h2>Contact Us</h2>
          <p className={styles.popupFormParagraph}>
            Whether you’re interested in learning more about our products or
            have a specific inquiry, our team is here to assist you.
          </p>
          <br />
          <form className={styles.popupForm}>
            <TextField
              required
              type="text"
              id="standard-required"
              label="First Name"
              variant="standard"
              InputLabelProps={{ style: { color: "#fff" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "white",
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "yellow",
                  },
                },
              }}
            />
            <TextField
              required
              type="text"
              id="standard-required"
              label="Last Name"
              variant="standard"
              InputLabelProps={{ style: { color: "#fff" } }}
            />
            <TextField
              required
              type="tel"
              id="standard-required"
              label="Contact Number"
              variant="standard"
              InputLabelProps={{ style: { color: "#fff" } }}
            />
            <TextField
              required
              type="email"
              id="standard-required"
              label="Email Address"
              variant="standard"
              InputLabelProps={{ style: { color: "#fff" } }}
            />
            <TextField
              required
              type="text"
              id="standard-required"
              label="School / Company Name"
              variant="standard"
              InputLabelProps={{ style: { color: "#fff" } }}
            />
            <br />
            <Button href="#" id={1} img={smallRightArrow}>
              Submit
            </Button>
          </form>
        </Popup>
      )}
    </>
  );
}

export default Aiducator;
