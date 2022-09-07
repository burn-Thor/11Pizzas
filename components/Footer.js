import {ImInstagram} from 'react-icons/im'
import {SiTrustpilot} from 'react-icons/si'
import styles from '../styles/Footer.module.css'
import Logo from '../img/Logo.png'
import Image from 'next/image'

export default function Footer() {
    return(
        
        <div className={styles.container}>
            
            <span>All Rights Reserved</span>
            <div className={styles.social}>
                <ImInstagram size = {35}/>
                <SiTrustpilot size = {35}/>
            </div>

            <div className={styles.logo}>
                 <Image src = {Logo} alt="" width ={80} height = {80}/>
                <span>11 Pizzas</span>
            </div>

        </div>
        
    )
};
