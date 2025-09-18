import frontbanner from "../assets/frontbanner.jpg"
import rectangle from "../assets/rectangle.jpg"
import styles from "./Home.module.css"
import Bedroom from "../assets/Bedroom.jpg"
import Livingroom from "../assets/living_room.jpg"
import Dining from "../assets/dining.jpg"

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
      {/* banner end */}

      {/* Catogories */}
      <div className={styles.outer_catogorie_container}>
       <div className={styles.inner_catogorie_container}>
        <div className={styles.textcontainer}>
          <div className={styles.text1}>Browse The Range</div>
          <div className={styles.text2}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
        </div>
        <div className={styles.preview_card_container}>
          <div className={styles.preview_card_inner_container}>
            <div className={styles.preview_card1}>
              <img src={Bedroom} alt="bedroom" />
              <label>Bedroom</label>
            </div>
            <div className={styles.preview_card2}>
              <img src={Livingroom} alt="livingroom" />
              <label>Living</label>
            </div>
            <div className={styles.preview_card3}>
              <img src={Dining} alt="dining" />
              <label>Dining</label>
            </div>
          </div>
        </div>
       </div>
      </div>
      {/* Catogories end */}
      
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