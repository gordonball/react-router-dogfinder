import Dog from './Dog';
function DogList({ dogList }) {
  return (
    <ul>
      {dogList.map(dog => (
         <li key={dog.name}>
        <Dog dog={dog} />
        </li>
      ))}
    </ul>
  );
}

export default DogList;