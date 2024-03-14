import React, { useState } from "react";
import Link from "next/link";
import axios from 'axios';

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };


  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Make a POST request to the backend
  //     const response = await axios.post(
  //       `http://localhost:8000/signup/${email}`
  //     ); // Handle form submission, e.g., send data to backend or perform further actions
  //     console.log("Email:", email);
  //     console.log("Password:", password);
  //     console.log("Remember Me:", rememberMe);
  //     // Reset form fields after submission
  //     setEmail("");
  //     setPassword("");
  //     setRememberMe(false);
  //   } catch (error) {
  //     console.error("Failed to fetch data: ", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const userData = {
        email: email,
        password: password, // Make sure this includes the password
      };
  
      const response = await axios.post('http://localhost:8000/signup/', userData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log("Response:", response.data);
  
      // Reset form fields after submission
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Failed to create user account: ", error.response.data);
    }
  };

  return (
    <div className="container p-20 mx-auto">
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-black"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-black"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="flex items-start mb-5">
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Sign Up
        </button>
        <p className="mt-4 text-sm text-center">
          Have an account? {' '}
          <Link href="/login" passHref>
            <span className="font-medium text-blue-600 hover:text-blue-500">Log In !</span>
          </Link>
        </p>
      </form>
    </div>
  );
}
