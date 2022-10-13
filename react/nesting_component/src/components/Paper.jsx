import React from "react";

export default function Paper(props){


    return(
        <div style={{
            padding: '20px',
            backgroundColor: 'white',
            boxShadow : '5px 6px 8px rgba(0,0,0,0.2)',
            width : props.width || 'auto',
            height : props.height || 'auto',
            margin: '20px 0px'
        }}>
            {props.children}
        </div>
    )
}