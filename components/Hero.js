import styles from '../styles/Hero.module.css'
import Image from 'next/image'
import delivery from '../img/delivery.svg'
import pizzaHero from '../img/pizzaHero.avif'
import margarita from '../img/margarita.avif'
import {AiOutlinePhone} from 'react-icons/ai'

export default function Hero() {
    return(
        <div className={styles.container}>
           
            {/* left side */}
        <div className={styles.leftSide}>
        <div className={styles.fastDelivery}>
            <span>Delivered fresh</span>
            <Image src={delivery} alt='' width={120} height={70}/>
        </div>
        <div className={styles.heroText}>
            <span>Wood stove fired pizzas</span>
            <span>Delivered straight to your door</span>
            <span>Your <span style={{color:"var(--themeRed)"}}>pizza</span></span>
        </div>
        <span className={styles.miniText}>We make the finest pizzas in the north, then deliver to you fresh with zero fuss.</span>

        <button className={`btn ${styles.btn}`}>Get Started</button>
        </div>

            {/* right side */}
         <div className={styles.rightSide}>
            <div className={styles.imageContainer}>
                <Image src={pizzaHero} alt='' layout="intrinsic"/>
            <div className={styles.contactUs}>
                <span>Contact Us</span>
                <div><AiOutlinePhone/></div>
            </div>

            <div className={styles.Pizza}>
                <div>
                    <Image src={margarita} alt='' objectFit='cover' layout='intrinsic'/>
                </div>
                <div className={styles.details}>
                    <span>Napolean Pizza</span>
                    <span><span style={{color:"var(--themeRed)"}}>£</span>8.50</span>
                </div>
            </div>
            </div>
         </div>


        </div>
    )
};
