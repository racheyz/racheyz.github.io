import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Introduction, Navbar, Projects, StarsCanvas } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"> 
          <Navbar />
          <Introduction />
        </div>
        <div className="relative">
          <About />
          <Experience />
          <Projects />
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
