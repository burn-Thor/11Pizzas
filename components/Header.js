import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Logo from '../img/Logo.png'
import {TbPizza} from 'react-icons/tb';

export default function Header() {
    return(
        <div className={styles.header}>
        
        <div className={styles.logo}>
            <Image src = {Logo} alt="" width ={80} height = {80}/>
            <span>11 Pizzas</span>
        </div>

        <ul className={styles.menu}>
            <li>Home</li>
            <li>Menu</li>
            <li>Contact</li>
        </ul>


        <div className={styles.rightSide}>
            <div className={styles.cart}>
                <TbPizza size={45}/>
                <div className={styles.badge}>1</div>
            </div>
        </div>
        </div>
    )
};
