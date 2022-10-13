import React from "react";
import MainLayout from "../layouts/MainLayout";

export default function About(){



    return(
        <MainLayout>
            <h1>About Page</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quas, eos libero labore accusamus animi, voluptatum laborum dolorum quidem tenetur sequi! Reiciendis, a. Dolorem, modi facilis! Dicta ipsam natus laboriosam.
            </p>
            <img src="https://images.pexels.com/photos/13234191/pexels-photo-13234191.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" style={{
                width : 300,
                height : 200,
                objectFit : 'cover',
            }} />
        </MainLayout>
    )
}