
import './App.css';
import { Aboutme } from './components/Aboutme';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import {BrowserRouter, Routes, Route} from "react-router-dom"
function App() {
return(
    <div className="wrapper" id="wrapper">
    <BrowserRouter>
    <Routes>
    <Route path = '/' element={<Hero />} />
    <Route path = 'skills' element={<Skills />} />
   <Route path = 'about-me' element={<Aboutme />} /> 
    <Route path = "projects" element={<Projects />} />
    <Route path = "contact" element={  <Contact/>} />
    </Routes>
    </BrowserRouter>
    
     
   
 
     
    </div>
)
}

export default App;
