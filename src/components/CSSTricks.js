import React from 'react'
import Rainbow from '../hoc/Rainbow'
import '../styles/cssTricks.css'

const PopUp = () => {
  return (
    <div id="pop-up">
      <img src="img/mushroom.png" />
      <div className="popup-container">
        <h3>Order Boba Tea</h3>
        <p>Choose your tea and topping</p>
        <input type="email" placeholder="email" required />
        <button>Order</button>
        <div className="cross">x</div>
      </div>
    </div>
  );
}

export const CSSTricks = (props) => {
  return (
    <div>
      <div className="container">
        <PopUp />
        <div className="circle">Hi</div>
      </div>
    </div>
  )
}

// export default Rainbow(CSSTricks)
export default CSSTricks