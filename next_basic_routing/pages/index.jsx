import styles from "../styles/page.module.css"
import { useState } from "react"

export default function Home() {

  const [dark, setDark] = useState(false);

  const handleDark = ()=>{
    setDark(!dark)
  }


  return (
    <div className={styles.container}>
      <h1>Home Page</h1>
    </div>
  )
}
