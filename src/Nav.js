import { Link } from "react-router-dom";

function Nav({ names }) {

  return (
    <div>
      {names.map(dog =>
        <Link to={`/dogs/${dog}`} />
      )}
    </div>
  )
}

export default Nav