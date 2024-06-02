import React from 'react';
import './App.css';
import CheckoutStepper from './components/CheckoutStepper';

const CHEKOUT_STEPS = [
  {
    name: 'Customer Information',
    component: () => <div>Provide your contact details</div>,
  },
  {
    name: 'Shipping Information',
    component: () => <div>Enter your shipping info</div>,
  },
  {
    name: 'Payment Information',
    component: () => <div>Complete payment for your order</div>,
  },
  {
    name: 'Delivered!',
    component: () => <div>Your order has been delivered</div>,
  },
];

const App = () => {
  return (
    <>
      <h2 className="header">Checkout Stepper</h2>
      <CheckoutStepper stepsConfig={CHEKOUT_STEPS} />
    </>
  );
};

export default App;
