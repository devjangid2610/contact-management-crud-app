import './App.css';
import Create from './Components/Create';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from './Components/Read';
import Update from './Components/Update';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={ <Create/>}></Route>
          <Route exact path="/create" element={ <Create/>}></Route>
          <Route exact path="/read" element={ <Read/>}></Route>
          <Route exact path="/update" element={ <Update/>}></Route>
          <Route path="/footer" exact component={<Footer/>}></Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
