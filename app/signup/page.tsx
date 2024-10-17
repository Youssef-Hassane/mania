"use client";
import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function SignUpForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formBody = Object.keys(formData)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(formData[key]))
      .join('&');
  
    try {
      const response = await fetch('http://localhost:5001/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',  // URL-encoded content type
        },
        body: formBody,  // Send URL-encoded data
      });
  
      if (response.ok) {
        console.log('Signup successful');
        alert('Signup successful!');
      } else if (response.status === 409) {
        console.error('Email already in use');
        alert('Email is already in use. Please use a different email.');
      } else {
        const errorData = await response.json();
        console.error('Signup failed', errorData);
        alert('Signup failed: ' + errorData.error);
      }
    } catch (error) {
      console.error('Error during signup', error);
      alert('An error occurred: ' + error.message);
    }
  };
  



  return (
    <main className="h-full p-[100px] flex items-center justify-center bg-custom-dark-gray p-6 relative overflow-hidden">
      <div className="bg-custom-light-apricot p-8 rounded-lg shadow-md w-full max-w-[800px] z-50 flex items-center justify-center">
        <div className="w-1/2 flex items-center justify-center">
          <Image
            src="https://nyc3.digitaloceanspaces.com/hotelmania/Assets/Screenshot%202024-10-12%20at%205.46.33%E2%80%AFPM%20%281%29.png"
            alt="logo"
            className="object-contain rounded-md"
            width={200}
            height={400}
            priority
          />
        </div>
        <Separator orientation="vertical" className="h-[100px] w-[10px]" />

        <div className="w-1/2 p-8 rounded-lg bg-custom-light-apricot z-50 relative flex-col items-center justify-center">
          <div className='flex flex-row gap-1'>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="First Name"
              className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-custom-dark-gray text-custom-light-apricot placeholder-gray-500 focus:outline-none focus:border-custom-yellow"
            />
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Last Name"
              className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-custom-dark-gray text-custom-light-apricot placeholder-gray-500 focus:outline-none focus:border-custom-yellow"
            />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-custom-dark-gray text-custom-light-apricot placeholder-gray-500 focus:outline-none focus:border-custom-yellow"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-custom-dark-gray text-custom-light-apricot placeholder-gray-500 focus:outline-none focus:border-custom-yellow"
          />
          <button
            onClick={handleSubmit}
            className="w-full mb-2 p-3 rounded-md bg-custom-dark-gray text-custom-light-apricot hover:bg-custom-dark-gray/90 focus:outline-none"
          >
            Sign Up
          </button>

          <h1 className="text-custom-dark-gray text-center text-sm pt-2">
            Already have an account?{' '}
            <Link href={'/login'} className="text-custom-yellow hover:text-custom-yellow/80">
              Sign In
            </Link>
          </h1>
        </div>
      </div>
    </main>
  );
}
