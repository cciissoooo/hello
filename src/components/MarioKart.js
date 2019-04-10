import React from 'react'
import '../styles/mario.css'

export const MarioKartCrash = () => {
  return (
    <div className="one-lane road">
      <div className="lines"></div>
      <img className="kart mario2" src="img/mario.png" />
      <img className="kart luigi2" src="img/flip-luigi.png" />
    </div>
  )
}

const MarioKart = () => {
  return (
    <div>
      <div className="container">
        {/* <MarioKartCrash /> */}
        <div className="sky">
          <img className="cloud" src="img/cloud.png" />
          <img className="cloud" src="img/cloud.png" />
        </div>
        <div className="grass"></div>
        
        <div className="two-lane road">
          <div className="lines"></div>
          <img className="kart mario" src="img/mario.png" />
          <img className="kart luigi" src="img/luigi.png" />
        </div>
       </div>
    </div>
  )
}

export default MarioKart
