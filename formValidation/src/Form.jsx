import { useState } from 'react';

const Form = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      fname: validateFirstName(fname),
      lastName: validateLastName(lastName),
      email: validateEmail(email),
      password: validatePassword(password),
      confirmPassword: validateConfirmPassword(password, confirmPassword),
    };

    setError(newErrors);

    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    console.log('Submitted:', { fname, lastName, email, password });

    setFName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

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
};

export default Form;
