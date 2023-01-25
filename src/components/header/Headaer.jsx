import React, { useState } from 'react'
import style from './header.module.css';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Headaer = () => {
    
    const[position,setPosition] = useState(false)

  return (
    <div className={style.header}>
      <mark>Notes</mark>
       { 
          position? 
          <CloseOutlinedIcon id={style.exit} onClick={()=>setPosition(!position)} />: 
          <AccountCircleOutlinedIcon onClick={()=>setPosition(!position)} id={style.menu}/>
       }
        <div className={style.search}>
        <input 
         placeholder='Search...'
         type="text" 
         id={style.inp} />
        <SearchOutlinedIcon style={{cursor:"pointer"}} />
        </div>
        <div style={{top:position?"100px":"-500px"}} className={style.rect}>

        </div>
    </div>
  )
}

export default Headaer