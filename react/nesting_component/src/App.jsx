import React from "react";
import ImageCard from "./components/ImageCard";
import Paper from "./components/Paper";
import MobileLayout from "./layouts/MobileLayout";



export default function App(){




  return(
    <div>
      <h1>Hello React</h1>

      <MobileLayout>
        <h3>Ini didalam Mobile Layout</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, ipsam.</p>



        <Paper>
          <h1>Rafif</h1>
        </Paper>
        <Paper>
          <h1>Raihanudin</h1>
        </Paper>

        <ImageCard left={<h1>Ini Kiri</h1>} right={<h2>Ini Kanan</h2>} />

        <ImageCard 
        left={
        
          <div style={{flex : 1}}>
            <img src="https://images.pexels.com/photos/13577692/pexels-photo-13577692.jpeg?auto=compress&cs=tinysrgb&w=200&lazy=load" alt="" style={{
              width:150,
              height: 150,
              objectFit: 'cover',
              borderRadius : 12
            }} />
          </div>
        
        } 
        right={
          <div style={{flex : 3}}>
            ini Kanan juga
          </div>
          
          } />

      </MobileLayout>

    </div>
  )
}