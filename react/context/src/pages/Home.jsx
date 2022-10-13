import React, { useState, useContext } from 'react'
import Navbar from '../components/Navbar'
import SideMenu from '../components/SideMenu'
import WrapperProduct from '../components/WrapperProduct'
import { ProductConsumer } from '../store/ProductProvider'

export default function Home() {
  
    // state
    const [total, setTotal] = useContext(ProductConsumer)
  
    return (
    <div>
        <Navbar total={total} />
        <div style={{
          width : "100vw",
          maxWidth : 1080,
          padding : 20,
          margin : "0px auto",
          display : "flex",
          gap : 20  
        }}>

            <SideMenu total={total} />
            <WrapperProduct />

        </div>
    </div>
  )
}
