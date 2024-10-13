import FadeUpEffect from "../FadeUpEffect";
import Button from "../Button";
import { smallRightArrow } from "../../constants/assets";
import styles from "./heroSection.module.css";

function HeroSection({ title, subTitle, description, image, onClick }) {
  return (
    <section className={styles.firstSection}>
      <img className={styles.heroBackground} src={image} alt="cubes-bg" />
      <div className={styles.sectionContent}>
        <div className={styles.upperSection}>
          <FadeUpEffect tag="p" className={styles.mainSubTitle}>
            {subTitle}
          </FadeUpEffect>
          <FadeUpEffect tag="h1" className={styles.mainTitle}>
            {title}
          </FadeUpEffect>
        </div>
        <div className={styles.lowerSection}>
          <Button href="#" id={2} img={smallRightArrow} onClick={onClick}>
            Book a Demo
          </Button>
          <FadeUpEffect tag="p" className={styles.lowerSectionContent}>
            {description}
          </FadeUpEffect>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
