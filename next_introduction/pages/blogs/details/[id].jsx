import styles from "../../../styles/Home.module.css"


export default function Details(){


    return(
        <div className={styles.container}>
            <h1>Details Page</h1>
        </div>
    )
}

export async function getStaticProps(context){
    
    console.info(context)

    return{
        props : ""
    }
}