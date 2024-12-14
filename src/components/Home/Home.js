import Banner from "../Banner/Banner";
import styles from "./Home.module.css";

export default function Home() {
    return (
        <>
            <div className={styles.banners}>
                <Banner image='https://nikifilini.com/wp-content/uploads/2024/11/Banners_19.11.24-2048x1366.jpg'
                        width='100%'/>
                <div className={styles.twoBanners}>
                    <Banner
                        image='https://nikifilini.com/wp-content/uploads/2024/08/limited-2_LEAD_title_categories_16.08.24-768x512.jpg'
                        width='50%'/>
                    <Banner
                        image='https://nikifilini.com/wp-content/uploads/2024/08/new-2_LEAD_title_categories_16.08.24-768x512.jpg'
                        width='50%'/>
                </div>
                <div className={styles.threeBanners}>
                    <Banner
                        image='https://nikifilini.com/wp-content/uploads/2024/09/jeans_2-768x512.png'
                        width='33.33%'/>
                    <Banner
                        image='https://nikifilini.com/wp-content/uploads/2024/09/shirts-2-768x512.png'
                        width='33.33%'/>
                    <Banner
                        image='https://nikifilini.com/wp-content/uploads/2024/09/sw-2-768x512.png'
                        width='33.33%'/>
                </div>
            </div>
        </>
    )
}
