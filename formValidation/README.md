# Form Validation with React

This document explains the step-by-step process of creating a form with validation using React state and custom validation functions.

## Prerequisites

Refer [React + Vite + Tailwind](https://tailwindcss.com/docs/guides/vite) docs for setup or simply follow the below steps.

1. Create React Project using Vite

```bash
npm create vite@latest formValidation -- --template react
cd formValidation
```

2. Install Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

3. Configure your template paths (tailwind.config.js)

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

4. Add the Tailwind directives to your CSS (index.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## 1. Initialize React Component

First, create a functional React component named `Form`.

```jsx
import { useState } from 'react';

const Form = () => {
  // State management here
  // Return JSX here
};

export default Form;
```

## 2. Define State Variables

Define state variables to manage the form fields and error messages.

```jsx
const [fname, setFName] = useState('');
const [lastName, setLastName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setConfirmPassword] = useState('');
const [error, setError] = useState({
  fname: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
});
```

## 3. Create Custom Validation Functions

Create custom validation functions for each field.

```jsx
const validateFirstName = (name) =>
  name.length > 0 ? '' : 'First name is required';
const validateLastName = (name) =>
  name.length > 0 ? '' : 'Last name is required';
const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Email is invalid';
const validatePassword = (password) =>
  password.length >= 8 ? '' : 'Password must be at least 8 characters';
const validateConfirmPassword = (password, confirmPassword) =>
  password === confirmPassword ? '' : 'Passwords do not match';
```

## 4. Handle Form Submission

Create a `handleSubmit` function to validate the form and handle form submission.

```jsx
const handleSubmit = (e) => {
  // prevent default form submission behavior
  e.preventDefault();

  // validate the fields
  const newErrors = {
    fname: validateFirstName(fname),
    lastName: validateLastName(lastName),
    email: validateEmail(email),
    password: validatePassword(password),
    confirmPassword: validateConfirmPassword(password, confirmPassword),
  };

  setError(newErrors);

  // if there is error it would return it
  if (Object.values(newErrors).some((error) => error)) {
    return;
  }

  console.log('Submitted:', { fname, lastName, email, password });

  // clear the input fields after submission
  setFName('');
  setLastName('');
  setEmail('');
  setPassword('');
  setConfirmPassword('');
};
```

## 5. Render the form

Render the form with input fields and error messages.

```jsx
return (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <form
      className="bg-white p-8 rounded shadow-md w-full max-w-md"
      onSubmit={handleSubmit}>
      <div className="text-center text-cyan-400 text-3xl mb-6 font-semibold">
        Form Validation
      </div>
      <div className="mb-4">
        <label htmlFor="fname" className="block text-gray-700">
          First Name:
        </label>
        <input
          type="text"
          id="fname"
          value={fname}
          onChange={(e) => setFName(e.target.value)}
          placeholder="Enter your first name"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        {error.fname && (
          <div className="text-red-500 text-sm mt-1">{error.fname}</div>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-gray-700">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Enter your last name"
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        {error.lastName && (
          <div className="text-red-500 text-sm mt-1">{error.lastName}</div>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700">
          Email:
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        {error.email && (
          <div className="text-red-500 text-sm mt-1">{error.email}</div>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">
          Password:
        </label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        {error.password && (
          <div className="text-red-500 text-sm mt-1">{error.password}</div>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="confirmPassword" className="block text-gray-700">
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-cyan-400"
          required
        />
        {error.confirmPassword && (
          <div className="text-red-500 text-sm mt-1">
            {error.confirmPassword}
          </div>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-cyan-400 text-white py-2 rounded hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400">
        Submit
      </button>
    </form>
  </div>
);
```

## 6. Add the Form Component in App.jsx.(😎 don't forget this)

```jsx
import Form from './Form';

const App = () => {
  return <Form />;
};

export default App;
```

## Summary

1. By following these steps, you create a form with proper state management, validation, and error handling in React.
2. Each input field is validated using custom functions, and error messages are displayed appropriately.
3. The form submission is handled efficiently, ensuring that all validations pass before proceeding.
