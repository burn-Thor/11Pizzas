import { useStore, urlFor } from '../store/store'
import Layout from '../components/Layout'
import styles from '../styles/Cart.module.css'
import Image from 'next/image'

export default function Cart () {
    const cartData = useStore((state)=>state.cart)
    return(
        <Layout>
            <div className={styles.container}>
                <div className={styles.details}>
                    <table className={styles.table}>
                        <thead>
                            <th>Pizza</th>
                            <th>Name</th>
                            <th>Size</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th></th>
                        </thead>
                        <tbody className={styles.tbody}>
                            {cartData.pizzas.length > 0 && 
                            cartData.pizzas.map((pizza, i) => {
                                
                                const src = urlFor(pizza.image).url()

                                return(
                                <tr key={i}>
                                    <td>
                                        <Image
                                        loader={()=>src}
                                        classname = {styles.imageTd}
                                        src={src}
                                        alt=''
                                        objectFit = 'cover'
                                        width={85}
                                        height={85}
                                            />
                                    </td>
                                    <td>{pizza.name}</td>
                                    <td>{
                                            pizza.size === 0 ?
                                            "Regular" :
                                            "Large"
                                        }
                                    </td>
                                    <td>{pizza.price}</td>
                                    <td>{pizza.quantity}</td>
                                    <td>{pizza.price * pizza.quantity}</td>
                                </tr>
                            )})}
                        </tbody>
                    </table>
                </div>
                <div className={styles.cart}></div>

            </div>
        </Layout>
    )
}