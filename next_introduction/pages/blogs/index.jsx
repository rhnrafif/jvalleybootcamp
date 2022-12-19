import styles from "../../styles/Home.module.css"
import Head from "next/head"

export default function Blogs({blogData}) {

    

  return (
    <div className={styles.container}>

        <Head>
            <title>Ini Title Blog</title>
            <meta name="description" content="ini deskripsi blog" />
        </Head>


        <h1>Hello Blogs</h1>
        
        {blogData.map((e)=>(
            <div key={e.id}>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
            </div>
        ))}


    </div>
  )
}

export async function getStaticProps(){
    const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method : "GET",
        headers : {
            "Content-Type": "aplication-json"
        }
    })

    const data = await result.json()

    return {
        props : {
            blogData : data
        }
    }
}