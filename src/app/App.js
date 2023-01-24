import Headaer from '../components/header/Headaer';
import TodoSection from '../components/todoSection/TodoSection';
import './App.css';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


function App() {
  return (
    <div className="App">
       <Headaer/>
      <div className='section'>
      <TodoSection/>
        <AddCircleOutlineOutlinedIcon className='add'/>
      </div>
    </div>
  );
}

export default App;
