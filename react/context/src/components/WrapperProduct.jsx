import React from 'react'
import CardProduct from './CardProduct'

export default function WrapperProduct() {
  return (
    <div style={{
      flex : 1,
      minHeight : 900,
      backgroundColor : "white",
      display : "flex",
      padding : 20,
      flexDirection : 'column'  
    }}>
        <h1 style={{
          marginBottom : 20  
        }}>Product</h1>
        <hr />

        <div style={{
        width : '100%',
        display : 'flex',
        flexWrap : "wrap",
        gap : 20

        }}>
            <CardProduct 
            name={"Sepatu"}
            price={"Rp. 30.000"}
            img={'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=500'} />

        </div>
    </div>
  )
}
