import styles from '../styles/Services.module.css'
import Image from 'next/image'
import s1 from '../img/chooseOnline.svg'
import s2 from '../img/payOnline.svg'
import s3 from '../img/relax.svg'
import s4 from '../img/eatPizza.svg'

export default function Services() {
    return(
        <>
        <div className={styles.heading}>
            <span>Our Pizza</span>
            <span>Our Methods</span>
            <span>Our Delivery</span>
        </div>

        {/* features */}
        <div className={styles.services}>
            <div className={styles.feature}>
                <div className={styles.ImageWrapper}>
                    <Image src={s1} alt='' objectFit='cover' layout='intrinsic'/>
                </div>
            <span>Easy to Order</span>
            <span>Choose your pizza in a few easy steps</span>

            </div>

            <div className={styles.feature}>
                <div className={styles.ImageWrapper}>
                    <Image src={s2} alt='' objectFit='cover' layout='intrinsic'/>
                </div>
            <span>Payment Options</span>
            <span>Pay online or cash on delivery</span>

            </div>
            
            <div className={styles.feature}>
                <div className={styles.ImageWrapper}>
                    <Image src={s3} alt='' objectFit='cover' layout='intrinsic'/>
                </div>
            <span>Relax</span>
            <span>The moment it is ready, we will personally deliver to your door</span>

            </div>

            <div className={styles.feature}>
                <div className={styles.ImageWrapper}>
                    <Image src={s4} alt='' objectFit='cover' layout='intrinsic'/>
                </div>
            <span>Enjoy your order</span>
            <span>Get ready for the main event</span>

            </div>
            
        </div>
        

        </>
    )
    
};
