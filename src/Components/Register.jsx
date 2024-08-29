import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { account } from '../Config/Appwrite';

const Register = () => {
  const [data, setData] = useState({ fName: "", lName: "", email: "", password: "", passwordConfirmation: "" });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (data.password !== data.passwordConfirmation) {
      alert("Passwords do not match!");
      return;
    }

    if (!data.fName || !data.lName || !data.email || !data.password) {
      alert("Please fill all fields!");
      return;
    }

    try {
      const res = await account.create(data.fName, data.lName, data.email, data.password);
      alert("Register Successfully!");
      console.log(res);
      navigate("/login");
    } catch (err) {
      alert("Register Error: " + err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-xl p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-teal-600">Create an Account</h2>

        <form onSubmit={handleRegister} className="grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="FirstName"
              onChange={(e) => setData({ ...data, fName: e.target.value })}
              name="first_name"
              className="mt-1 w-full rounded-md py-2 border border-gray-500 bg-white text-sm text-gray-700 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="LastName"
              onChange={(e) => setData({ ...data, lName: e.target.value })}
              name="last_name"
              className="mt-1 w-full rounded-md py-2 border border-gray-500 bg-white text-sm text-gray-700 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>
            <input
              type="email"
              id="Email"
              name="email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="mt-1 w-full rounded-md py-2 border border-gray-500 bg-white text-sm text-gray-700 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>
            <input
              type="password"
              id="Password"
              name="password"
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="mt-1 w-full rounded-md py-2 border border-gray-500 bg-white text-sm text-gray-700 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="PasswordConfirmation"
              name="password_confirmation"
              onChange={(e) => setData({ ...data, passwordConfirmation: e.target.value })}
              className="mt-1 w-full rounded-md py-2 border border-gray-500 bg-white text-sm text-gray-700 shadow-sm focus:border-teal-500 focus:ring-teal-500"
            />
          </div>

          <div className="col-span-6">
            <label htmlFor="MarketingAccept" className="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="rounded-md border-gray-300 bg-white shadow-sm active:bg-teal-500"
              />
              <span className="text-sm text-gray-700 ">
                I want to receive emails about events, product updates and company announcements.
              </span>
            </label>
          </div>

          <div className="col-span-6">
            <p className="text-sm text-gray-500 active:bg-teal-400">
              By creating an account, you agree to our
              <a href="#" className="text-teal-600 underline"> terms and conditions </a>
              and
              <a href="#" className="text-teal-600 underline"> privacy policy</a>.
            </p>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              type="submit"
              className="inline-block w-full sm:w-auto rounded-md bg-teal-600 px-12 py-3 text-sm font-medium text-white active:text-slate-300 "
            >
              Create an account
            </button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <Link to='/login' className="text-teal-600 underline"> Log in</Link>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
