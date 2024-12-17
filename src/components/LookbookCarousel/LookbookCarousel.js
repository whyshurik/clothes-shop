import ItemSlider from "../Slider/ItemSlider";
import styles from './LookbookCarousel.module.css'
const OPTIONS = {dragFree: true}


export default function LookbookCarousel(options) {
    return (
        <>
            <div className={styles.lookbookContainer}>
                <div className={styles.sliderHeader}>NIKIFILINI LOOKS</div>
                <ItemSlider options={OPTIONS}/>
            </div>
        </>
    )
}