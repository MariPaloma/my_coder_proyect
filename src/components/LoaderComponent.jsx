import React from 'react'
import PacmanLoader from "react-spinners/PacmanLoader";

function LoaderComponent() {
  return (
    <div style={{widht: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <PacmanLoader size={50} color='yellow' />
    </div>
  )
}

export default LoaderComponent