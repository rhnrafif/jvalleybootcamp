import React, { createContext, useState } from 'react'

// untuk membuat sebuah context
export const ProductConsumer = createContext()

export default function ProductProvider(props) {

    // state
    const [total, setTotal] = useState(0)
    

    return (
    <ProductConsumer.Provider value={[total, setTotal]}>
        {props.children}
    </ProductConsumer.Provider>
  )
}
