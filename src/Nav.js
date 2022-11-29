import { NavLink } from "react-router-dom";
import './Nav.css'

function Nav({ dogList }) {
  return (
    <div className="NavBar">

      {dogList.map(
        dog =>
          <NavLink
            key={dog}
            to={`/dogs/${dog.toLowerCase()}`}
          >{dog}
          </NavLink>)}

    </div>
  );
}

export default Nav