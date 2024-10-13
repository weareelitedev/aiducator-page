import { footerLogo } from "../../constants/assets";

import styles from "./footer.module.css";

function Footer() {
  const socialLinks = [
    {
      name: "linkedin",
      src: "/assets/socialIcons/linkedin.svg",
      href: "https://www.linkedin.com/company/creativetechnologysolution",
    },
    {
      name: "facebook",
      src: "/assets/socialIcons/facebook.svg",
      href: "https://www.facebook.com/p/CreativeTechnologySolutions-100076005835997",
    },
    {
      name: "instagram",
      src: "/assets/socialIcons/instagram.svg",
      href: "https://www.instagram.com/creative.technology.solutions/",
    },
  ];

  return (
    <footer>
      <div className={styles.logoBox}>
        <img src={footerLogo} alt="cts-logo" width={200} height="auto" />
      </div>
      <div className={styles.upperSection}>
        <div className={styles.footerTxt}>
          <h1>Subscribe for New Content</h1>
          <p>
            By becoming a member of our blog, you have access article and
            content.
          </p>
          <div className={styles.socialLinks}>
            {socialLinks.map((elem, i) => (
              <a key={i} href={elem.href}>
                <img src={elem.src} alt={elem.name + "-icon"} />
              </a>
            ))}
          </div>
        </div>
        <form action="" className={styles.newsletter}>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.lowerSection}>
        <ul className={styles.sitemapLinks}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/media">Media</a>
          </li>
          <li>
            <a href="/products">Solutions</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <div className={styles.copyright}>
          Copyright &copy; {new Date().getFullYear()} Creative Technoogy
          Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
