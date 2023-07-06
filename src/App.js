import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavBar } from "../src/components/NavBar"
import { Banner } from "../src/components/Banner"
import { Presentation } from "../src/components/Presentation"
import { Portfolio } from "../src/components/Portfolio"
import { Competence } from "../src/components/Competence"
import { Experience } from "../src/components/Experience"
import { Contact } from "../src/components/Contact"











function App() {
  return (
    <div className="App"> 
      <NavBar />
      <Banner />
      <Presentation />
      <Portfolio />
      <Competence />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
