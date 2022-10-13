import React from "react";
import { Link } from "react-router-dom";

export default function Footer(){


    return(
        <footer style={{
          width : '100vw',
          height : '180px',
           backgroundColor : 'black',
           color : 'white',
           padding : 20,
           display : 'flex',
           alignItems : 'center'  
        }}>

            <div style={{
              width : '100%',
              maxWidth : 900,
              margin : '0 auto',
              display : 'flex',
              justifyContent : 'space-between',
              alignItems : 'center',
              gap : 20  
            }}>
                <h1>JValley</h1>

                <menu style={{
                  display : 'flex',
                  flexDirection : 'column',
                  gap : 10  
                }}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contact'}>Contact</Link>
                    <Link to={'/blog'}>Blog</Link>
                </menu>
            </div>
        </footer>
    )
}