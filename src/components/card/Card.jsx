import React from 'react'
import style from './card.module.css';

const Card = ({title,text}) => {
  return (
    <div className={style.card}>
         <h4>{title}</h4>
         <p>
          {text}
         </p>
      </div>
  )
}

export default Card