import Headaer from '../components/header/Headaer';
import TodoSection from '../components/todoSection/TodoSection';
import './App.css';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useState } from 'react';
import  TextField  from '@mui/material/TextField';
import Textarea from '@mui/joy/Textarea';
import  Button  from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import {addTodo} from '../store/todoSlice.js';
import { v4 } from 'uuid';


function App() {
  const[isAlert,setIsAlert] = useState(false)

  const[text,setText] =useState("")

  const[title,setTitle] =useState("")

  const disp = useDispatch()

  const data ={
    id:v4(),
    title,
    text
  }

  return (
    <div className="App">
       <Headaer/>
      <div className='section'>
      <TodoSection/>
        <AddCircleOutlineOutlinedIcon onClick={()=>setIsAlert(!isAlert)} className='add'/>
        
        <div style={{width:isAlert?"50%":"0%",height:isAlert?"500px":"0%",padding:isAlert?"10px":"0px"}} className='alert'>
          <div style={{display:isAlert?"flex":"none"}} className='wrap'>
          <h3 >Добавьте пожалуйста описание вашей заметки...</h3>
          <div className='todo'>
          <TextField 
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
          id="standard-basic" label="Заголовок...." variant="standard" />
          <Textarea 
          value={text}
          onChange={(e)=>setText(e.target.value)}
          style={{width:isAlert?"400px":"0px"}} minRows={9}  />
          <Button  onClick={()=>{
            setIsAlert(!isAlert)
            disp(addTodo(data))
          }} style={{backgroundColor:"#044CA8",color:"#fff"}} startDecorator={<Add />}>Add to cart</Button>
          </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
