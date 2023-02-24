import React from 'react'
import './card.css'

export const Card = (props) => {
  return (
    props?.link_card ? 
        <a href={props.link_card} className="art-card-ref">
          <div className='art-card'>
        { props?.title ? 
          <div className='art-card-title'>
            <label>{props.title}</label>
          </div>
          :
          <></>
        }

        {
          props?.image ?
          <div className='art-card-img'>
            <img src={props?.image} />
          </div>
          : 
          <></>
        }
      

        <div className='art-card-body'>
            <label>Body</label>
        </div>

        <div className='art-card-footer'>
            <label>Footer</label>
        </div>
      </div>
        </a>
      :
      <div className='art-card'>
        { props?.title ? 
          <div className='art-card-title'>
            <label>{props.title}</label>
          </div>
          :
          <></>
        }

        {
          props?.image ?
          <div className='art-card-img'>
            <img src={props?.image} />
          </div>
          : 
          <></>
        }
      

        <div className='art-card-body'>
            <label>Body</label>
        </div>

        <div className='art-card-footer'>
            <label>Footer</label>
        </div>
      </div>
  )
      
    
  
}
