import React from "react";
import MainLayout from "../layouts/MainLayout";

export default function Blog(){



    return(
        <MainLayout>
            <h1>Blog Page</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit quas, eos libero labore accusamus animi, voluptatum laborum dolorum quidem tenetur sequi! Reiciendis, a. Dolorem, modi facilis! Dicta ipsam natus laboriosam.
            </p>
            <img src="https://images.pexels.com/photos/12158048/pexels-photo-12158048.jpeg?auto=compress&cs=tinysrgb&w=500&lazy=load" alt="" style={{
                width : 300,
                height : 200,
                objectFit : 'cover'

            }} />
        </MainLayout>
    )
}