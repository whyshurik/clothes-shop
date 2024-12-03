import styles from './Header.module.css';

export default function Header () {
    return (
        <>
            <div className={styles.headerContainer}>
                <div className={styles.leftHeader}>
                    <div className={styles.sidebarBtn}>side</div>   {/* отдельный компонент iconsize-button */}
                    <div className={styles.logo}>logo</div>
                </div>
                <div className={styles.clothesTypes}>
                    <div className={styles.typesList}>types</div>
                </div>
                <div className={styles.cartContainer}>
                    <div className={styles.findBtn}>find-btn</div>                    {/* отдельный компонент iconsize-button */}
                    <div className={styles.cart}>cart</div>
                </div>
            </div>
        </>
    )
}