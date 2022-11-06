
import './App.css';
import { Aboutme } from './components/Aboutme';
import { Contact } from './components/Contact';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

function App() {
return(
    <div className="wrapper" id="wrapper">
      {/* <!-- hero section --> */}
     <Hero/>

      {/* <!-- skills section --> */}
     <Skills/>
      {/* <!-- projects section --> */}
      <Projects/>
      {/* <!-- About me section --> */}
      <Aboutme/>
      {/* <!-- contact section --> */}
     <Contact/>

      {/* <!-- footer section --> */}
      <footer className="footer bg-dark text-light text-center py-5 mt-5">
        Copyritght &copy; all reserved. Made with 💓 by me.
      </footer>

      <a href="#wrapper" className="goup" id="goup">
        <i className="fa-solid fa-circle-up fa-3x text-primary"></i>
      </a>
    </div>
)
}

export default App;
