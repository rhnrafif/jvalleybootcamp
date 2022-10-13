import React from 'react'

function MyCustomButton( props ){

    return(
        <button>{props.name}</button>
    )
}


export default function ReactProps() {
  return (
    <div className='App'>
        <h1>React Props</h1>
        <MyCustomButton />
        <MyCustomButton />
        <MyCustomButton />
    </div>
  )
}
