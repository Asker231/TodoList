import React, { useState } from 'react'
import style from './header.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


const Headaer = () => {
    
    const[position,setPosition] = useState(false)

  return (
    <div className={style.header}>
       { 
          position? 
          <CloseOutlinedIcon id={style.exit} onClick={()=>setPosition(!position)} />: 
          <MenuIcon onClick={()=>setPosition(!position)} id={style.menu}/>
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