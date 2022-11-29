import { NavLink } from "react-router-dom";
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