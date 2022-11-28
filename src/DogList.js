import axios from "axios";

function DogList() {

  async function getDogs() {
    await axios.get("localhost:5001/dogs");
  }

  const dogs = getDogs();

  return (
    <div className="DogList">
      {dogs.map(dog => {
        return (
          <div>
            <p>{dog.name}</p>
            <img src={`${dog}.src`} alt="dogs" ></img>
          </div>
        );
      })}
    </div>
  );
}

export default DogList