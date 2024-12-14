import styles from './Banner.module.css'
export default function Banner({image}) {
    return <>
        <img className={styles.mainBanner} src={image} alt='main banner'/>
    </>
}