import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DogList from './DogList';
import FilterDog from './FilterDog'
import axios from "axios";
import Nav from './Nav';
import './App.css';


function App() {
  const [dogList, setDogList] = useState([]);
  const [loading, setLoading] = useState(true);

  /**Function to make async calls*/
  async function getDogs() {
    const result = await axios.get("http://localhost:5001/dogs");
    setDogList(result.data);
  }
  /** Check to see if the page is loading or not*/
  if (loading) {
    getDogs();
    setLoading(!loading);
  }

  return (
    <div className="App">

      {loading && <h1> Loading... </h1>}
      {!loading &&
        <BrowserRouter>
          <Nav dogList={dogList.map(dog => dog.name)} />
          <Routes>
            <Route path="/" element={<DogList dogList={dogList} />} />
            <Route path="/dogs/:name" element={<FilterDog dogList={dogList} />} />
            <Route path="*" element={<DogList dogList={dogList} />} />
          </Routes>
        </BrowserRouter>
      }
    </div>
  );
}

export default App;
