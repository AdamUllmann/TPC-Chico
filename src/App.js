import NavBar from './Components/NavBar'
import './CSS/App.css'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Projects from './Pages/Projects'
import HomePage from './Pages/HomePage'
import Events from './Pages/Events'
import {Route, Routes} from "react-router-dom"
import './CSS/App.css'

function App() {
  return (
    <>
        <NavBar />
        <div className = "container">
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/Home" element={<HomePage />}/>
            <Route path="/About" element={<About />}/>
            <Route path="/Events" element={<Events />}/>
            <Route path="/Projects" element={<Projects />}/>
            <Route path="/Contact" element={<Contact />}/>
          </Routes>
        </div>
    </>
  );
}

export default App;
