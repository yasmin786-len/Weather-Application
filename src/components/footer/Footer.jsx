import styles from "./Footer.module.css";
import openWeatherLogo from "../../assets/openweatherImg.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.openWeather}>
        <p>Powered by </p>
        <a
          href="https://openweathermap.org/api"
          title="OpenWeather API"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={openWeatherLogo} alt="OpenWeather" loading="lazy" />
        </a>
      </div>

      <p className={styles.info}>Built with ❤️ by</p>

      <p>
        <sup>&#169;</sup> {currentYear}{" "}
        <span className={styles.myName}>Sayyad Yasmin</span>
      </p>

      <div className={styles.links}>
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/yasmin-sayyad-457229270?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          title="My LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

        {/* GitHub */}
        <a
          href="https://leetcode.com/u/Sd_Yasmin/"
          title="My GitHub"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
    </footer>
  );
}

export default Footer;