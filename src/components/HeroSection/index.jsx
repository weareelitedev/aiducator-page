import FadeUpEffect from "../FadeUpEffect";
import Button from "../Button";
import { smallRightArrow } from "../../constants/assets";
import styles from "./heroSection.module.css";

function HeroSection({
  title,
  subTitle,
  description,
  image,
  onClick,
  setIsLoaded,
}) {
  return (
    <section className={styles.firstSection}>
      <img
        className={styles.heroBackground}
        src={image}
        alt="cubes-bg"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
      />
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
          <Button id={2} img={smallRightArrow} onClick={onClick}>
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
