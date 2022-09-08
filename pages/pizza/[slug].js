import Image from 'next/image'
import Layout from '../../components/Layout'
import { client, urlFor } from '../../lib/client'
import styles from '../../styles/Pizza.module.css'
import {BiRightArrow} from 'react-icons/bi'
import {BiLeftArrow} from 'react-icons/bi'

export default function Pizza ({pizza}) {
    const src = urlFor(pizza.image).url()
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
        <span><span className={styles.red}>£</span>{pizza.price[0]}0</span>

            <div className={styles.size}>
            <span>Size</span>
            <div className={styles.sizeVariants}>
                <div>Regular</div>
                <div>Large</div>      
            </div>
            </div>
        

        <div className={styles.quantity}>
            <span>Quantity</span>
            <div className={styles.counter}>
                <BiLeftArrow className={styles.arrow}/>
                <span>1</span>
                <BiRightArrow className={styles.arrow}/>
            </div>
        </div>

        <div className={`btn ${styles.btn}`}>Add to Cart</div>
            
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