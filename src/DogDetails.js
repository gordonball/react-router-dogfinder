
function DogDetails({dog}) {

  return (
    <div>
      <p>Name: {dog.name}</p>
      <p>Age: {dog.age}</p>
      <ul>
        {(dog.facts).map(fact =>
          <li>{fact}</li>
        )}
      </ul>

    </div>
  )
}

export default DogDetails