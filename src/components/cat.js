import React from 'react'
import './cat.css'

const Cat = ({
  name,
  picture,
  age = null
}) => (
  <div className='cat-details'>
    <img className='cat-img' src={ picture } />
    <div className='cat-name'>{ name }</div>
  </div>
)

export default Cat
