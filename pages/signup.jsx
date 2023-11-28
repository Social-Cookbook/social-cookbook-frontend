// pages/signup.jsx

import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import styles from "../styles/Auth.module.css"; // Adjust the path to the actual location of your CSS module

const Signup = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: toast.POSITION.BOTTOM_RIGHT,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/api/auth/signup",
        inputValue,
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          router.push("/feed");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      handleError(error.message);
    }
    setInputValue({
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className={styles.form_container}>
      <div className="form_container">
        <div className="flex flex-row justify-center">
          <h2>Account Signup</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-row justify-center">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-row justify-center">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Enter your username"
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-row justify-center">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
            />
          </div>
          <div className="flex flex-row justify-center">
            <button type="submit">Submit</button>
          </div>
          <div className="flex flex-row justify-center">
            <br />
            <span>
              Already have an account? <Link href="/login">Log in.</Link>
            </span>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Signup;
