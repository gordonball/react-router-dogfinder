import { Link} from "react-router-dom";

function DogDetails({ dog }) {
  return (
    <div className="DogDetails">
      <p>Name: {dog.name} Age: {dog.age}</p>
      <img src={`/${dog.src}.jpg`} alt={dog.name} />
      {dog.facts.map((fact, idx) => <p key={idx}>{fact}</p>)}
      <Link to="/dogs">Let's go back to all the good boys</Link>
    </div>
  );
}

export default DogDetails;