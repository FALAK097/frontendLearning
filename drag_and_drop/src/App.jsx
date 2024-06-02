import { useState } from 'react';
import './App.css';
import Notes from './components/Notes';

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: 'Drag and Drop the Notes',
    },
    {
      id: 2,
      text: 'You can also move them around',
    },
    {
      id: 3,
      text: 'Try it out!',
    },
  ]);

  const [note, setNote] = useState('');

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '5px',
          marginTop: '30px',
        }}>
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button
          onClick={() => {
            setNotes([...notes, { id: notes.length + 1, text: note }]);
            setNote('');
          }}>
          Add Note
        </button>
      </div>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
