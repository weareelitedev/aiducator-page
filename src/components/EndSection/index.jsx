import Button from "../Button";
import { contactArrow } from "../../constants/assets";
import FadeUpEffect from "../FadeUpEffect";
import styles from "./endSection.module.css";
import useDisplay from "../../hooks/useDisplay";

function EndSection({
  titleIntro,
  title,
  underlinedTitle,
  content,
  background,
  titleMobile,
  underlinedTitleMobile,
  contentMobile,
  backgroundMobile,
  isBackgroundImg,
  style,
}) {
  const [isMobileDisplay] = useDisplay();

  return (
    <section className={styles.contactSection}>
      {isBackgroundImg && (
        <img
          src={isMobileDisplay ? backgroundMobile : background}
          alt="contact-section-bg"
          style={
            isMobileDisplay
              ? { objectPosition: "center" }
              : { objectPosition: "right" }
          }
          loading="lazy"
        />
      )}
      <div className={styles.contactSectionCont}>
        <div className={styles.contactSectionHeader}>
          {titleIntro && <p>{titleIntro}</p>}
          <FadeUpEffect
            tag="h2"
            className={style == "1" ? styles.biggerHeader : ""}
          >
            {isMobileDisplay ? titleMobile : title} <br />
            <span>
              {isMobileDisplay ? underlinedTitleMobile : underlinedTitle}
            </span>
          </FadeUpEffect>
        </div>
        <FadeUpEffect tag="div" className={styles.contactSectionLowerBox}>
          <Button href="#" id={1} img={contactArrow}>
            Contact Us
          </Button>
          <div className={styles.separator}></div>
          <p>{isMobileDisplay ? contentMobile : content}</p>
        </FadeUpEffect>
      </div>
    </section>
  );
}

export default EndSection;
