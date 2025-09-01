import styles from "./Footer.module.css";
import Funiro from "../assets/Funiro..png";

const Footer = () => {
  return (
    <footer className={styles.outercontainer}>
      <div className={styles.innercontainer}>
        <div>
          <div className={styles.footercontainer1}>
            <div className={styles.logocontainer}>
              <img src={Funiro} alt="Logo" />
            </div>
          </div>
          <div className={styles.footercontainer2}>
            Footer 2
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer