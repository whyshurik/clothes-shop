import styles from "../Slider/ItemSlider.module.css";
import useEmblaCarousel from 'embla-carousel-react'


const images = [
    {id: 1, image: 'https://nikifilini.com/wp-content/uploads/2024/08/LOOKBOOK-528.08.24_6-1536x1152.jpg', width: 400},
    {id: 2, image: 'https://nikifilini.com/wp-content/uploads/2024/08/LOOKBOOK-427.08.24_13-1536x1024.jpg', width: 450},
    {id: 3, image: 'https://nikifilini.com/wp-content/uploads/2024/08/LOOKBOOK-328.08.24-1024x1536.jpg', width: 200},
    {id: 4, image: 'https://nikifilini.com/wp-content/uploads/2024/08/LOOKBOOK-227.08.24_4-1536x1152.jpg', width: 400},
    {id: 5, image: 'https://nikifilini.com/wp-content/uploads/2024/08/10-Lookbook_27.08.24.jpg-1536x1024.jpg', width: 450},
    {id: 6, image: 'https://nikifilini.com/wp-content/uploads/2024/02/8_hero_look-768x1082.jpg', width: 212},
    {id: 7, image: 'https://nikifilini.com/wp-content/uploads/2023/12/SHDW_Chp1_Pg2-768x1069.jpg', width: 215},
    {id: 8, image: 'https://nikifilini.com/wp-content/uploads/2023/06/yk_UvWlOTXc-768x524.jpg', width: 440},
    {id: 9, image: 'https://nikifilini.com/wp-content/uploads/2024/08/LOOKBOOK-628.08.24-768x512.jpg', width: 450},
    {id: 10, image: 'https://nikifilini.com/wp-content/uploads/2024/08/LOOKBOOK-728.08.24-768x1086.jpg', width: 212},

]


export default function ItemSlider(options) {
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    return (
        <section className={styles.embla}>
            <div className={styles.emblaViewport} ref={emblaRef}>
                <div className={styles.emblaContainer}>
                    {images.map((image) => (
                        <div className={styles.slideContainer} key={image.id}
                             style={{width: image.width}}>
                            <img
                                src={image.image}
                                alt={image.name}
                                className={styles.sliderImage}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
