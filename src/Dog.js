function Dog({ dog }) {

  return (
    <div>
      <p>{dog.name}</p>
      <img src={`/${dog.src}.jpg`} alt="dogs" />
    </div>

  );
}

export default Dog;