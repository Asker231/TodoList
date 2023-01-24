import React from 'react'
import style from './card.module.css';

const Card = ({num}) => {
  return (
    <div className={style.card}>Card{num}</div>
  )
}

export default Card