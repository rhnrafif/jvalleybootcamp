import React from 'react'

export default function Navbar(props) {
  
    return (
    <div style={{
      width : "100vw",
      height : 60,
      backgroundColor : "navy"  
    }}>
        <nav style={{
          width : '100vw',
          maxWidth : 1080,
          height : '100%',
          margin : " 0px auto",
          display : "flex",
          alignItems : "center",
          justifyContent : "space-between",
          padding : "0 20px"
        }}>
            <h1 style={{
              fontSize : 36,
              color: "white"  
            }}> Market Place Sebelah</h1>

            <p style={{
              fontWeight: 500,
              color : "white"  
            }}> Total Belanja : {props.total}</p>
        </nav>
    </div>
  )
}
