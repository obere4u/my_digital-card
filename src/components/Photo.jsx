import React from 'react'
import Tochi from '../assets/tochi1.jpg'

function Photo() {
  return (
    <div>
      <img src={Tochi} alt="Photo of Tochi smiling" className='my__card-photo' />
      <p className="my__card-photo__credit">Tochi</p>
    </div>
  )
}

export default Photo