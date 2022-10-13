import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){


    return(

        <nav style={{
            width : '100%',
            height : '60px',
            backgroundColor : 'black',
            color : 'white',
        }}>

            <div style={{
              width : '100%',
              height : '100%',
              maxWidth :'900px',
              display : 'flex',
              alignItems : 'center',
              justifyContent: 'space-between',
              gap : 20,
              margin : '0 auto'  
            }}>

                <h1>JValley</h1>

                <menu style={{
                  display : 'flex',
                  gap : 20  
                }}>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contact'}>Contact</Link>
                    <Link to={'/blog'}>Blogs</Link>
                </menu>

            </div>

        </nav>
    )
}