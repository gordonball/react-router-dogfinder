import { useParams,Navigate } from "react-router-dom";
import DogDetails from "./DogDetails";

function FilterDog({ dogList }) {
  const params = useParams();
  const dog = dogList.find(dog => dog.src === params.name);

  if (!dog) return <Navigate to="/" />;

  return (
    <DogDetails dog={dog} />
  );
}

export default FilterDog;