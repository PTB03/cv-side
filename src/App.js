
import Nav from './components/navbar/Nav';
import Home from './pages/Home';
import './App.css';
import {Route, Routes} from "react-router-dom"
import About from './pages/About';
import Prosjekter from './pages/Prosjekter';



function App() {
  return (

      <div className="App">
        <Nav/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/prosjekt" element={<Prosjekter/>}/>
            <Route path="/prosjekt/:id" element={<div>en side som viser prosjekt</div>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
