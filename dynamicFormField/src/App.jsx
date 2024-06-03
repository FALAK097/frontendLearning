import { useState } from 'react';
import './App.css';

const App = () => {
  const [fields, setFields] = useState([{ value: '' }]);

  const handleChange = (index, event) => {
    //! The spread operator is used to create a new array with the existing fields.
    const values = [...fields];
    //! The value of the input field is updated based on the index of the field. When the user types in the input field, the value is updated in the fields array.
    values[index].value = event.target.value;
    setFields(values);
  };

  const handleAdd = () => {
    const values = [...fields];
    //! A new object with an empty value is pushed to the values array.
    values.push({ value: '' });
    setFields(values);
  };

  const handleRemove = (index) => {
    const values = [...fields];
    //! The field at the specified index is removed from the values array. Use of 1 as the second argument to the splice method indicates that only one element should be removed.
    values.splice(index, 1);
    setFields(values);
  };

  const handleSubmit = (event) => {
    //! When the form is submitted, the page is reloaded. This behavior is prevented using the preventDefault method.
    event.preventDefault();
    console.log('Form values:', fields);
  };

  return (
    <>
      <h1>Dynamic Form fields</h1>
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <div key={index} className="form-group">
            <input
              type="text"
              value={field.value}
              onChange={(event) => handleChange(index, event)}
              className="input-field"
              placeholder="Enter text"
            />
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="remove-btn">
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAdd} className="add-btn">
          Add Field
        </button>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default App;
