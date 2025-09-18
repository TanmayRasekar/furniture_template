import frontbanner from "../assets/frontbanner.jpg"
import rectangle from "../assets/rectangle.jpg"
import styles from "./Home.module.css"

const Home = () => {
  return (
    <div>
      {/* banner */}
      <div>
        <div className={styles.outercontainer}>
          <img src={frontbanner} alt="frontbanner" className={styles.frontbanner} />
          <img src={rectangle} alt="rectangle" className={styles.overlayimage} />
          <div className={styles.overlayTextouter}>
          <div className={styles.overlayText1}>New Arrival</div>
          <div className={styles.overlayText2}>Discover Our <br/> New Collection</div>
          <div className={styles.overlayText3}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
          <div className={styles.overlaybutton}>
            <button>Buy Now</button>
          </div>

          </div>
          
        </div>
      </div>

      <div>catogories</div>
      <div>products</div>
      <div>showcase1</div>
      <div>showcase2</div>
    </div>
  )
}

export default Home

// <div>
//        <div className={styles.outercontainer}>
//         <img src={frontbanner} alt="frontbanner" className={styles.frontbanner} />
//         <div>
//         <img src={rectangle} alt="rectangle" className={styles.overlayimage} />
//         <div className={styles.overlayText}>discover the new furniture</div>
//         </div>
//       </div>
// </div>