import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import DogList from './DogList';
import DogDetails from './DogDetails';
import axios from "axios";
import Nav from './Nav';
import './App.css';



function App() {
  const [dogList, setDogList] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("App", dogList, loading);

  async function getDogs() {
    const result = await axios.get("http://localhost:5001/dogs");
    setDogList(result.data);
  }

  if (loading) {
    getDogs();
    setLoading(load => !load);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav dogList= { dogList } />}  />
          <Route path="/dogs" element={<DogList dogList={ dogList } />}  />
          <Route path="/dogs/:name" element={ <DogDetails /> }  />
          <Route path="*" element={ <DogList/> } />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
