import { Link } from "react-router-dom";

function Nav({ dogList }) {

  return (
    <div>
      {dogList.map(dog =>
        <Link to={`/dogs/${dog}`} />
      )}
    </div>
  )
}

export default Nav