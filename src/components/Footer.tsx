import styles from "./Footer.module.css";
import Funiro from "../assets/Funiro..png";
import { NAVLINKS, Help } from "./NAVLINKS";

const Footer = () => {
  return (
    <footer className={styles.outercontainer}>
      <div className={styles.innercontainer}>
        <div>
          <div className={styles.footercontainer1}>
            
              <div className={styles.leftdiv}>
                <div className={styles.logocontainer}>
                  <a href="/home">
                    <img src={Funiro} alt="Logo" />
                  </a>
                </div>
                <div className={styles.address}>
                  <p>400 University Drive Suite 200 Coral<br /> Gables,<br /> FL 33134 USA</p>
                </div>
              </div>
              <div className={styles.rightdiv}>
                <div className={styles.navlinkscontainer}>
                  <div style={{fontFamily: "poppins, sans-serif", fontSize: "18px", fontWeight: "500", color: "#9f9f9f"}}>
                    Links
                  </div>
                  <div className={styles.navlinks}>
                  {NAVLINKS.map((link, index) => (
                    <a key={index} href={link.href} className={styles.navLink}>
                      {link.label}
                    </a>
                  ))}
                  </div>
                </div>
                <div className={styles.navlinks}>
                  <div style={{fontFamily: "poppins, sans-serif", fontSize: "18px", fontWeight: "500", color: "#9f9f9f"}}>Help</div>
                  <div className={styles.navlinks}> 
                    {Help.map((link, index) => (
                    <a key={index} href={link.href} className={styles.navLink}>
                      {link.label}
                    </a>
                    ))}
                  </div>
                </div>
                <div className={styles.newslettercontainer}>
                  <div style={{fontFamily: "poppins,sans-serif", fontSize: "18px", fontWeight: "500", color: "#9f9f9f"}}>Newsletter</div>
                  <div className={styles.newsletter}>
                    <input type="email" placeholder="Enter Your Email Address" />
                    <button>SUBSCRIBE</button>
                  </div>
                </div>
              </div>
          
          </div>

          <div className={styles.footercontainer2}>
            2023 furino. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer