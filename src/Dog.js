import { Link } from "react-router-dom";
function Dog({ dog }) {
  return (
    <div>
      <p>{dog.name}</p>
      <Link to={`/dogs/${dog.name.toLowerCase()}`}>
        <img src={`/${dog.src}.jpg`} alt="dogs" />
      </Link>
    </div>
  );
}

export default Dog;