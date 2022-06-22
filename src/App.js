import Person from './Person';
import data from "./data"


function App() {
  
  return (
    <div>
      {data.map((person) => {
        const list = (
          <>
            <Person
              img={person.img}
              name= {person.name}
              tel={person.tel}
            />
            <hr />
          </>
        );
        return list;
      })}
    </div>
  );
}

export default App;