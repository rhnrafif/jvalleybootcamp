import React from "react";

export default function MainLayout(props){


    return(
        <main className="main_layout">

            <div className="content">
                {props.children}
            </div>

        </main>
    )
}