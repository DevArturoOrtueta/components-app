import React from 'react'
import { useState } from 'react'
import './card.css'

export const Card = (props) => {
  return (
    props?.link_card ? 
        <a href={props.link_card} className="art-card-ref">
          <div className='art-card'>
        {/* Evaluate if the card have title */}
        { props?.title ? 
          <div className='art-card-title'>
            <label>{props?.title}</label>
          </div>
          :
          <></>
        }
        {/* Evaluate if the card have an image */}
        {
            props?.image ?
            <div className='art-card-img'>
              <img src={props?.image} />
            </div>
            : 
            <></>
        }
        {/* Evalute if the card have some body content */}
        {
          props?.body ?
          <div className='art-card-body'>
            <label>{props.body}</label>
          </div>
          :
          <></>
        }
        {/* Evaluate if the card have footer */}
        {
          props?.footer ?
          <div className='art-card-footer'>
            <label>{props.footer}</label>
          </div>
          :
          <></>
        }
      </div>
        </a>
      :
      <div className='art-card'>
         {/* Evaluate if the card have title */}
         { props?.title ? 
          <div className='art-card-title'>
            <label>{props?.title}</label>
          </div>
          :
          <></>
        }
        {/* Evaluate if the card have an image */}
        {
            props?.image ?
            <div className='art-card-img'>
              <img src={props?.image} />
            </div>
            : 
            <></>
        }
        {/* Evalute if the card have some body content */}
        {
          props?.body ?
          <div className='art-card-body'>
            <label>{props.body}</label>
          </div>
          :
          <></>
        }
        {/* Evaluate if the card have footer */}
        {
          props?.footer ?
          <div className='art-card-footer'>
            <label>{props.footer}</label>
          </div>
          :
          <></>
        }
        
      </div>
  )
      
    
  
}
