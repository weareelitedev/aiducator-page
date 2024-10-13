import React, { lazy, Suspense } from "react";
import useDisplay from "../../hooks/useDisplay";
import styles from "./aiducator.module.css";
import {
  cubesImgBg,
  blueBgMobile,
  smallRightArrow,
  aiducatorBottomBg,
  aiducatorMiddleBg,
} from "../../constants/assets";

import LoadingScreen from "../../components/LoadingScreen";
import Footer from "../../components/Footer";

const FadeUpEffect = lazy(() => import("../../components/FadeUpEffect"));
const HeroSection = lazy(() => import("../../components/HeroSection"));
const EndSection = lazy(() => import("../../components/EndSection"));
const ContactSection = lazy(() => import("../../components/ContactSection"));
const VideoPlayer = lazy(() => import("../../components/VideoPlayer"));
const Button = lazy(() => import("../../components/Button"));
const AttributesList = lazy(() => import("./AttributesList"));
const FeaturesList = lazy(() => import("./FeaturesList"));

function Aiducator() {
  const [isMobileDisplay] = useDisplay();

  return (
    <Suspense fallback={<LoadingScreen />}>
      <HeroSection
        title="The Smart Solution for Modern Education"
        subTitle="Aiducator"
        description="We empower schools and universities to harness cutting-edge technology, transforming teaching and learning for remarkable outcomes."
        image={cubesImgBg}
        onClick={() => {
          window.location.href = "https://www.cts.ae/contact-us/";
        }}
      />

      {/* Second Section */}
      <section className={styles.secondSection}>
        <FadeUpEffect tag="h2">Discover AiDucator</FadeUpEffect>
        <FadeUpEffect tag="p">
          Welcome to the future of education with AiDucator, the all-in-one AI
          solution that transforms the admissions process into a seamless,
          intuitive experience.
        </FadeUpEffect>
        <FadeUpEffect tag="p">
          Designed to meet the unique needs of students, parents, and
          educational institutions, AiDucator harnesses the power of advanced AI
          to deliver personalized, real-time support—while keeping the human
          touch at its core. Say goodbye to the frustrations of traditional
          searches and hello to a smarter, more efficient way to connect with
          your prospective community.
        </FadeUpEffect>
        <Button href="#" id={3} img={smallRightArrow}>
          Learn more
        </Button>
      </section>

      {/* Third Section */}
      <section className={styles.thirdSection}>
        <VideoPlayer
          url="https://d6zyps6w1bjznwd8.public.blob.vercel-storage.com/AiDucator_ExplainerVideo_MP4-4Keble489mB3Vyi13ypyD9GXTlD7jQ.mp4"
          title="Effortless information access"
          desc="Aiducator simplifie"
        />
        <FadeUpEffect tag="h2">
          Lost in the Shuffle? The Strain of Traditional Searches.
        </FadeUpEffect>
        <FadeUpEffect tag="p">
          Enter AiDucator—a game-changing AI solution that takes the complexity
          out of the equation. With AiDucator, students and parents no longer
          need to sift through cluttered webpages or struggle with outdated
          search tools. Our AI-driven chatbot delivers instant, personalized
          responses to every query, ensuring that information is not just
          accessible but effortlessly delivered. For educational institutions,
          AiDucator is more than a tool—it's a necessity.
        </FadeUpEffect>
        <FadeUpEffect tag="p">
          Navigating school and university websites has become a daunting task
          for students and parents alike. The endless clicking, scrolling, and
          hunting for crucial information leaves them overwhelmed and
          frustrated, often missing out on vital details that could shape their
          educational journey. In a world where time is precious, the
          traditional search methods feel outdated, inefficient, and impersonal.
        </FadeUpEffect>
        <Button href="#" id={3} img={smallRightArrow}>
          Book a Demo
        </Button>
      </section>

      {/* Fourth Section */}
      <section className={styles.fourthSection}>
        <FadeUpEffect tag="h2">
          Why Every Institution Needs AiDucator?
        </FadeUpEffect>
        <AttributesList />
      </section>

      <ContactSection
        title="Shaping the future of"
        underlinedTitle="innovational education"
        desc="We empower schools and universities to harness cutting-edge technology, transforming teaching and learning for remarkable outcomes."
        isVideoBackground={false}
        url={aiducatorMiddleBg}
      />

      {/* Sixth Section */}
      <section className={styles.sixthSection}>
        <FadeUpEffect tag="h2">
          Explore the Full Suite of Capabilities
        </FadeUpEffect>
        <FeaturesList />
      </section>

      <EndSection
        titleIntro="Reach out to us"
        title="Streamline your visitors' search experience"
        underlinedTitle="and start engaging more effectively with prospects."
        content={null}
        background={aiducatorBottomBg}
        titleMobile="Let's get to know each other"
        underlinedTitleMobile="Reach out."
        contentMobile="Empowering users with rapid content generation, Thunda transforms ideas into well-articulated, structured, and persuasive text."
        backgroundMobile={blueBgMobile}
        isBackgroundImg={true}
        style={isMobileDisplay ? 1 : 0}
      />
      <Footer />
    </Suspense>
  );
}

export default Aiducator;
