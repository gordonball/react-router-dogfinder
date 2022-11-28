import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DogList from './DogList';
import DogDetails from './DogDetails';
import Nav from './Nav';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav {names=} />}  />
          <Route path="/dogs" element={<DogList />}  />
          <Route path="/dogs/:name" element={<DogDetails />}  />
          <Route path="*" element={<DogList/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
