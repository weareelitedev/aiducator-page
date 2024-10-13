import { arrowRight, smallRightArrow, tinyArrow } from "../../constants/assets";
import FadeUpEffect from "../FadeUpEffect";
import styles from "./productCard.module.css";

function ProductCard({ subTitle, title, description, link, image, isMobile }) {
  return (
    <a href={link}>
      <FadeUpEffect tag="div" offset={70} className={styles.container}>
        <div className={styles.imageContainer}>
          <div className={styles.imgBox}>
            <img src={image} alt={`${title} image`} />
          </div>
          {isMobile && (
            <div className={styles.arrowContainer}>
              <img src={arrowRight} alt="arrow" />
            </div>
          )}
        </div>
        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <div>
            <p className={styles.subTitle}>{subTitle}</p>
            {!isMobile && (
              <div className={styles.arrowContainer}>
                <img src={arrowRight} alt="arrow" />
              </div>
            )}
          </div>
          <p className={styles.description}>{description}</p>
        </div>
      </FadeUpEffect>
    </a>
  );
}

export default ProductCard;
