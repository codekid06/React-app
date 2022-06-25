import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Text from './Components/Text';
function App() {
  const[mode,setMode]=useState('light');//Enabled or not
  const[btn,setbtn]=useState("Enable Dark Mode");
 const toggleMode=()=>{
       if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor='black';
        setbtn("Disable Dark Mode")
       }
       else{
        setMode('light');
        document.body.style.backgroundColor='white';
        setbtn("Enable Dark Mode")  
        }
  }
  return(
    <>
     <Navbar title="TextUtils"about="About" mode={mode} toggleMode={toggleMode} btn={btn}/>
     <div className="container my-5">
      <Text heading="Enter the text to analyse"mode={mode}/>
     </div>
    </>
  );
}
export default App;