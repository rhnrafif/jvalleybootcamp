import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function MainLayout(props){



    return(
        <main>

            <Navbar />

            <div style={{
              width : "100%",
              minHeight :  "100vh",
              maxWidth : "900px",
              margin : "0 auto",
              paddingTop : 40 
            }}>

                {props.children}

            </div>

            <Footer />

        </main>
    )
}