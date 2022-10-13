import React, {useContext} from 'react'
import { ProductConsumer } from '../store/ProductProvider'

export default function CardProduct(props) {
  
  // global state
  const [total, setTotal] = useContext(ProductConsumer)

  // func utk merubah, menambah dan mengurangi
  const increment = ()=>{
    setTotal(total + 1)
  }

  const decrement = ()=>{
    if(total <= 0){
      setTotal(0)
      return
    }
    setTotal(total - 1)
  }
  
  
  return (
    <div style={{
      width : '35%',
      backgroundColor : "whitesmoke",
      padding : 20,
      display : 'flex',
      flexDirection : "column",
      boxShadow : "5px 4px 7px rgba(0,0,0,0.184)"  
    }}>
        <h1>{props.name}</h1>
        <h1>{props.price}</h1>

        <img src={props.img} alt={props.name} style={{
            width : "100%",
            height : 100,
            objectFit : "cover"
        }}/>

        <div style={{
          display : "flex",
          justifyContent : "space-around",
          paddingTop: "20px"
        }}>
            <button style={{width:80}} onClick={decrement}> - </button>
            <h1>{total}</h1>
            <button style={{width:80}} onClick={increment}> + </button>
        </div>
    </div>
  )
}
