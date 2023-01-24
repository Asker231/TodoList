import React, { useState } from 'react'
import Card from '../card/Card';
import style from './todosection.module.css';


const TodoSection = () => {
    const m = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,3,4,5,5,67,8,8,8,9,123,3,3,43,43,423,424,2]
  return (
    <div className={style.todosection}>
        {
            m.map((el)=>{
                return <Card num={el}/>
            })
        }
    </div>
  )
}

export default TodoSection