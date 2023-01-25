import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Card from '../card/Card';
import style from './todosection.module.css';


const TodoSection = () => {
   const sel = useSelector(state=>state.todo.arr)
   return(
    <div className={style.todosection}>
    {
       sel.map((el)=>{
           return <Card title={el.title} text={el.text}/>
       })
   }
</div>
   )
}

export default TodoSection