import React from 'react'
import './card.css'

export const Card = () => {
  return (
    <div className='art-card'>
      <div className='art-card-title'>
          <label>Title</label>
      </div>

      <div className='art-card-body'>
          <label>Body</label>
      </div>

      <div className='art-card-footer'>
          <label>Footer</label>
      </div>
    </div>
  )
}
