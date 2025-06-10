import Start from "./start";
import Home from "./home";
import Navbar from "./navbar";
import About from './about';
import Projects from './projects';
import Skills from './skills';
import Process from './process';
import Archive from './archive';
import Footer from "./footer";
import Like from "./like"; 
import EmailForm from "./emailform"; 
import { BrowserRouter,Routes, Route } from "react-router-dom";

import '../App.css';

function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Start />}/>
                <Route path="/home" element={<Home />}/>
            </ Routes>
            <Navbar />
            <Routes>
                <Route path="/about" element={<About />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/skills" element={<Skills />}/>
                <Route path="/archive" element={<Archive />}/>
                <Route path="/process" element={<Process />}/>
                <Route path="/like" element={<Like />}/>
                <Route path="/emailform" element={<EmailForm />} />
            </Routes>
            <Footer />
    </BrowserRouter>
  );
}

export default App;
