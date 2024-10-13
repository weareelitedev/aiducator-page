import styles from "./button.module.css";

function Button({ children, href, id, onClick, img = null }) {
  const stylesList = [styles.style1, styles.style2, styles.style3];

  return (
    <a
      href={href}
      className={`${styles.btn} ${stylesList[id - 1]}`}
      onClick={onClick}
    >
      <p>{children}</p>
      {img && <img src={img} alt="btn-icon" />}
    </a>
  );
}

export default Button;
