import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../img/Logo.png'
import {TbPizza} from 'react-icons/tb';
import { useStore } from '../store/store';

export default function Header() {
    
    // state in terminal
    const state = useStore((state)=>state)
    console.log(state)


    const items = useStore((state)=>state.cart.pizzas.length)

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
            <Link href='/cart'>
            <div className={styles.cart}>
                <TbPizza size={45}/>
                <div className={styles.badge}>{items}</div>
            </div>
            </Link>
        </div>
        </div>
    )
};
