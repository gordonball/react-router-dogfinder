

function DogList({dogList}) {

  return (

    <div className="DogList">

      {dogList.map(dog => {
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