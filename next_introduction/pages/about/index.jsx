
import styles from "../../styles/Home.module.css"
import Head from "next/head"

export default function About(){
    return(
        <div className={styles.container} >
            <Head>
                <title>Halaman About</title>
                <meta name="description" content="ini adalah halaman about" />
            </Head>
            <h1>About Page</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, eligendi obcaecati. Nobis recusandae suscipit doloribus, perspiciatis placeat vero corrupti obcaecati cupiditate qui voluptate dolores exercitationem eaque aspernatur adipisci quis et?
                Labore, obcaecati, neque suscipit officia eaque deleniti adipisci reiciendis quaerat harum veniam dolorem voluptatum porro mollitia vero ipsa inventore nesciunt omnis voluptas quos minus, in iusto dignissimos unde facere? Qui.
            </p>
        </div>
    )
}