import React from 'react'

export default function SideMenu(props) {
  return (
    <div style={{
      width : 250,
      height : "100px",
      display : "flex",
      flexDirection : "column",
      backgroundColor : "white",
      padding : '20px'  
    }}>
        <h1>
        Total Belanja : {props.total}
        </h1>
    </div>
  )
}
