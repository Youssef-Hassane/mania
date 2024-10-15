"use client";
import { Separator } from '@radix-ui/react-separator';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    else setPassword(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login data: ', { email, password });
    // Login logic
  };

  return (
    <main className="h-full p-[100px] flex items-center justify-center bg-custom-dark-gray p-6 relative overflow-hidden">
      <div className="bg-custom-light-apricot p-8 rounded-lg shadow-md w-full max-w-[800px] z-50 flex items-center justify-center">
        <div className="w-1/2 flex items-center justify-center ">
          <Image
            src="https://nyc3.digitaloceanspaces.com/hotelmania/Assets/Screenshot%202024-10-12%20at%205.46.33%E2%80%AFPM%20%281%29.png"
            alt="logo"
            className="object-contain rounded-md"
            width={200}
            height={400}
            priority
          />
        </div>
        <div className="w-1/2 p-8 rounded-lg bg-custom-light-apricot z-50 relative flex-col items-center justify-center">
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInputChange}
            placeholder="Email"
            className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-custom-dark-gray text-custom-light-apricot placeholder-gray-500 focus:outline-none focus:border-custom-yellow"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            placeholder="Password"
            className="mb-4 w-full p-3 rounded-md border border-gray-700 bg-custom-dark-gray text-custom-light-apricot placeholder-gray-500 focus:outline-none focus:border-custom-yellow"
          />
          <button
            onClick={handleSubmit}
            className="w-full mb-2 p-3 rounded-md bg-custom-dark-gray text-custom-light-apricot hover:bg-custom-dark-gray/90 focus:outline-none"
          >
            Sign In
          </button>
          
          <h1 className='text-custom-dark-gray text-center text-sm pt-2'>Don&apos;t have account? <Link className='' href={'/signup'}>SignUp</Link></h1>
          <h1 className='text-custom-dark-gray text-center text-sm pt-2'>Forgot Password? <Link className='text-custom-yellow' href={'/forgot-password'}>Reset</Link></h1>

        </div>
      </div>
    </main>
  );
}
