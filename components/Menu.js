import styles from '../styles/Menu.module.css'
import Image from 'next/image'
import { urlFor } from '../lib/client'
import Link from 'next/link'

export default function Menu({pizzas}) {
    
    return(
    <div className={styles.container}>
            <div className={styles.heading}>
                <span>MENU</span>
                <span>4 Different Pizzas</span>
                <span>4 delicious options</span>
            </div>

        <div className={styles.menu}>
            {pizzas.map((pizza,id)=>{
                
                const src = urlFor(pizza.image).url()
                
                return(
                    <div className={styles.pizza} key={id}>
                        <Link href={`./pizza/${pizza.slug.current}`}>
                        <div className={styles.ImageWrapper}>
                            <Image 
                            loader = {()=>src}
                            src={src} alt='' objectFit='cover' layout='fill'/>
                        </div>
                        </Link>
                        <span>{pizza.name}</span>
                        <span><span style={{color:'var(--themeRed)'}}>£</span>{pizza.price[0]}</span>
                        
                    </div>
                )
            })}
        </div>
    </div>
    )
};
