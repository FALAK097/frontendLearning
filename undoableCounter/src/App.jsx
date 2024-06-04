import { useState } from 'react';
import './App.css';

const App = () => {
  const [value, setValue] = useState(0);
  const [history, setHistory] = useState([]);
  const [redoList, setRedoList] = useState([]);
  const [undoCount, setUndoCount] = useState(0);

  const maintainHistory = (key, prev, curr) => {
    const obj = {
      action: key,
      prev,
      curr,
    };
    const newHistory = [...history];
    // why not use push here?
    // to display the latest action on top of the history list
    newHistory.unshift(obj);
    setHistory(newHistory);
  };

  const handleClick = (key) => {
    const val = parseInt(key);
    maintainHistory(key, value, val + value);
    setValue((prev) => prev + val);
  };

  const handleUndo = () => {
    // LIFO - Last In First Out (Stack)
    if (history.length) {
      if (undoCount + 1 > 5) {
        alert('You can only undo 5 times');
        return;
      }
      setUndoCount((prev) => prev + 1);

      const copyHistory = [...history];
      const firstItem = copyHistory.shift();
      setHistory(copyHistory);

      setValue(firstItem.prev);
      const copyRedoList = [...redoList];
      copyRedoList.unshift(firstItem);
      setRedoList(copyRedoList);
    }
  };

  const handleRedo = () => {
    if (redoList.length) {
      const copyRedoList = [...redoList];
      const poppedValue = copyRedoList.pop();
      setRedoList(copyRedoList);
      const { action, prev, curr } = poppedValue;
      setValue(curr);
      maintainHistory(action, prev, curr);
    }
  };

  return (
    <div className="container">
      <h1>Undoable Counter</h1>

      <div className="action-btn">
        <button onClick={handleUndo}>Undo</button>
        <button onClick={handleRedo}>Redo</button>
      </div>

      <div className="user-actions">
        {[-100, -10, -1].map((btn, index) => (
          <button onClick={() => handleClick(btn)} key={index}>
            {btn}
          </button>
        ))}

        <span className="counter">{value}</span>

        {['+1', '+10', '+100'].map((btn, index) => (
          <button onClick={() => handleClick(btn)} key={index}>
            {btn}
          </button>
        ))}
      </div>

      <div className="history">
        <h2>History</h2>
        {history.map((item, index) => {
          return (
            <div key={index} className="row">
              <div>{item.action}</div>
              <div>{`[${item.prev} -> ${item.curr}]`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
