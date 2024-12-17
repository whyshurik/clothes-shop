import Banner from "../Banner/Banner";
import styles from "./Home.module.css";
import ItemSlider from "../Slider/ItemSlider";
import LookbookCarousel from "../LookbookCarousel/LookbookCarousel";

const OPTIONS = {dragFree: true}

export default function Home() {
    return (
        <>
            <div className={styles.banners}>
                <Banner image='assets/newDrop.jpg'
                        width='100%'
                        alt='main banner'/>
                <div className={styles.twoBanners}>
                    <Banner
                        image='assets/limited.jpg'
                        width='50%'
                        alt='limited banner'/>
                    <Banner
                        image='assets/new.jpg'
                        width='50%'
                        alt='new banner'/>
                </div>
                <div className={styles.threeBanners}>
                    <Banner
                        image='assets/jeans.png'
                        width='33.33%'
                        alt='jeans banner'/>
                    <Banner
                        image='assets/shirts.png'
                        width='33.33%'
                        alt='shirts banner'/>
                    <Banner
                        image='assets/stoneWashed.png'
                        width='33.33%'
                        alt='stone washed banner'/>
                </div>
            </div>
            <LookbookCarousel/>
        </>
    )
}
