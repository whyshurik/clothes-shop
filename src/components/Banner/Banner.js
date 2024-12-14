import styles from './Banner.module.css'
export default function Banner({image, width, height}) {
    return <>
        <img className={styles.mainBanner} src={image} width={width} alt='main banner'/>
    </>
}