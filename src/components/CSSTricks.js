import React from 'react'
import Rainbow from '../hoc/Rainbow'
import '../styles/cssTricks.css'

export const CSSTricks = (props) => {
  return (
    <div>
      <div className="container">
        <div className="circle">Hi</div>
      </div>
    </div>
  )
}

export default Rainbow(CSSTricks)