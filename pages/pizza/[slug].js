import Image from 'next/image'
import Layout from '../../components/Layout'
import { client, urlFor } from '../../lib/client'
import styles from '../../styles/Pizza.module.css'
import {BiRightArrow} from 'react-icons/bi'
import {BiLeftArrow} from 'react-icons/bi'
import { useState } from 'react'
import { useStore } from '../../store/store'
import toast, {Toaster} from 'react-hot-toast'

export default function Pizza ({pizza}) {
    const src = urlFor(pizza.image).url()

    const [size, setSize] = useState(0)
    const [quantity, setQuantity] = useState(1)
    
    const handleQuantity = (type) => {
        type === 'inc' ?
        setQuantity((prev)=>prev+1) 
        : quantity === 1 
        ? null 
        : setQuantity((prev)=>prev-1) 
    }
    const addPizza = useStore((state)=>state.addPizza)
    const addToCart=()=>{
        addPizza({...pizza, price: pizza.price[size], quantity: quantity, size: size})
        toast.success("Added to Cart")
    }
    return(
        <Layout>
        <div className={styles.container}>
            <div className={styles.imageWrapper}>
                <Image 
                loader={()=>src}
                src={src}
                alt = ''
                layout = 'fill'
                unoptimized
                objectFit='cover'/>
            </div>
        

        <div className={styles.rightSide}>
        <span>{pizza.name}</span>
        <span>{pizza.details}</span>
        <span><span className={styles.red}>£</span>{pizza.price[size]}0</span>

            <div className={styles.size}>
            <span>Size</span>
            <div className={styles.sizeVariants}>
                <div 
                onClick={()=>setSize(0)} 
                className={size === 0 ? styles.selected : ''}>
                    Regular</div>
                <div 
                onClick={()=>setSize(1)}
                className={size === 1 ? styles.selected : ''}>
                    Large</div>      
            </div>
            </div>
        

        <div className={styles.quantity}>
            <span>Quantity</span>
            <div className={styles.counter}>
                <BiLeftArrow className={styles.arrow} onClick={()=>handleQuantity('dec')}/>
                <span>{quantity}</span>
                <BiRightArrow className={styles.arrow} onClick={()=>handleQuantity('inc')}/>
            </div>
        </div>

        <div className={`btn ${styles.btn}`} onClick={addToCart}>Add to Cart</div>
        <Toaster/>
            
        </div>

        </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await client.fetch(
        `*[_type=="pizza" && defined(slug.current)][].slug.current`
    )
    return{
        paths: paths.map((slug)=> ({ params: {slug} })),
        fallback: 'blocking',
    }
}

export async function getStaticProps(context) {
    const {slug = ""} = context.params;
    const pizza = await client.fetch(
        `*[_type=='pizza' && slug.current == '${slug}'][0]`
    )
    return {
        props: {
            pizza,
        }
    }
}