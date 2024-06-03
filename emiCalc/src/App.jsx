import { useState } from 'react';
import './App.css';

const App = () => {
  const [principal, setPrincipal] = useState();
  const [interestRate, setInterestRate] = useState();
  const [loanTerm, setLoanTerm] = useState();
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculatePayment = () => {
    const P = parseFloat(principal);
    const r = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    const payment = (P * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);

    setMonthlyPayment(Math.round(payment));
  };

  return (
    <div className="container">
      <h1>Mortgage Calculator</h1>
      <div className="input-group">
        <label>Principal loan amount</label>
        <input
          type="number"
          placeholder="$300000"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Interest rate</label>
        <input
          type="number"
          placeholder="9 %"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Length of loan</label>
        <input
          type="number"
          placeholder="3 years"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
        />
      </div>
      <button onClick={calculatePayment}>Calculate</button>
      {monthlyPayment ? (
        <div className="result">
          Your monthly mortgage payment will be ${monthlyPayment}
        </div>
      ) : (
        <div className="result">Please fill out all the fields</div>
      )}
    </div>
  );
};

export default App;
