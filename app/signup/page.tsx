"use client";
import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign Up data: ', formData);
    // Sign Up logic
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
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-custom-dark-gray text-custom-light-apricot placeholder-gray-500 focus:outline-none focus:border-custom-yellow"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
            className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-custom-dark-gray text-custom-light-apricot placeholder-gray-500 focus:outline-none focus:border-custom-yellow"
          />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-custom-dark-gray text-custom-light-apricot placeholder-gray-500 focus:outline-none focus:border-custom-yellow"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-custom-dark-gray text-custom-light-apricot placeholder-gray-500 focus:outline-none focus:border-custom-yellow"
          />
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm Password"
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
