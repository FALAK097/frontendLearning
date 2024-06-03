import { useState, useRef } from 'react';
import './App.css';

const App = () => {
  const [people, setPeople] = useState([
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 24 },
    { id: 3, name: 'Doe', age: 26 },
    { id: 4, name: 'Smith', age: 27 },
    { id: 5, name: 'Alex', age: 23 },
    { id: 6, name: 'Sam', age: 22 },
  ]);

  const dragPerson = useRef(0);
  const draggedOverPerson = useRef(0);

  const handleSort = () => {
    const newPeople = [...people];
    const temp = newPeople[dragPerson.current];
    //* Approach 01
    //? how does this approach work?
    //! 1. replace the dragPerson with draggedOverPerson
    //! 2. replace the draggedOverPerson with dragPerson
    newPeople[dragPerson.current] = newPeople[draggedOverPerson.current];
    newPeople[draggedOverPerson.current] = temp;
    //* Approach 02
    //? how does this approach work?
    //! 1. remove the dragPerson from the list
    //! 2. insert the dragPerson at the draggedOverPerson index in the list
    // newPeople.splice(dragPerson.current, 1);
    // newPeople.splice(draggedOverPerson.current, 0, temp);
    setPeople(newPeople);
  };

  return (
    <div className="sortList">
      <h1>Sort List</h1>
      {people.map((person, index) => (
        <div
          className="person"
          key={person.id}
          draggable
          //! onDragStart is triggered when the user starts dragging an element
          onDragStart={() => (dragPerson.current = index)}
          //! onDragEnter is triggered when the dragged element enters the drop zone
          onDragEnter={() => (draggedOverPerson.current = index)}
          //! onDragEnd is triggered when the user releases the mouse button
          onDragEnd={handleSort}
          //! onDragOver is triggered when the dragged element is over the drop zone (to allow a drop) and prevent the default behavior
          //! what is the default behavior? the default behavior is not allowing a drop to happen
          onDragOver={(e) => e.preventDefault()}>
          <p>
            {person.name}, {person.age}
          </p>
        </div>
      ))}
    </div>
  );
};

export default App;
