import React, {useState, useEffect } from "react";

export default function MyButton2(){

    const [count, setCount] = useState(1)

    const increment = ()=>{
        setCount(count + 1)
    }

    //component did mount
    useEffect(()=>{
        console.info("My Button 2 di Mount ke Browser")

        //component will unmount (clean function)
        return ()=>{
            console.info("My Button 2 di Destroy")
        }
        
    }, [])

    //component did update
    useEffect(()=>{
        console.info("My Button 2 diupdate", count)
    }, [count]) //setiap var count diupdate, maka function yang disebelah kiri akan dijalankan kembali

    return (
        <button onClick={increment}>Button Click {count}</button>
    )
}