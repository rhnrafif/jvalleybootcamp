import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Home({data, page}){

  const router = useRouter()

  return(
    <main className={styles.main}>
      <h1>My Blog Page {page}</h1>

      <div className={styles.cardWrapper}>
        {data.map((e)=>{
          return(
            <div key={e.id} className={styles.blogCard}>

              <Image src={`https://picsum.photos/seed/${e.id}/200/200`}
              width={200}
              height={200}
              alt={e.title}
              />
                
              <div>
                <h3>{e.id}.{e.title}</h3>
                <p>{e.body}</p>
              </div>
            </div>
          )
        })}

      </div>

      <div className={styles.btnPagination}>
        <button>prev</button>
        <button>next</button>
      </div>

    </main>
  )
}

export async function getServerSideProps(ctx){
  
  const result = await fetch("https://jsonplaceholder.typicode.com/posts?_page=" + ctx.query.page)
  const data = await result.json()

  return {
    props : {
      data : data,
      page : ctx.query.page || 1
    }
  }

}