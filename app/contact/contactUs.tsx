"use client"
import React, { useState } from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form data submitted:', formData);
  };

  return (
    <div className="flex flex-col justify-between  bg-custom-dark-gray w-screen">
      <div className="w-full mb-8 md:mb-0 ">
        <form onSubmit={handleSubmit} className="w-full bg-custom-dark-gray rounded-lg p-8 text-custom-light-apricot placeholder:text-custom-dark-gray">
          <div className='flex flex-row w-full gap-4'>
            <div className="mb-6 w-full">
              <label className="block text-sm mb-2" htmlFor="fullname">Fullname</label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                className="w-full p-3 bg-transparent text-custom-light-apricot rounded-md border-[1px] border-custom-light-apricot"
                placeholder="e.g., Youssef Hassane"
              />
            </div>

            <div className="mb-6 w-full">
              <label className="block text-sm mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 bg-transparent text-custom-light-apricot rounded-md border-[1px] border-custom-light-apricot"
                placeholder="youssef_hassane@icloud.com"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-2" htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-transparent text-custom-light-apricot rounded-md border-[1px] border-custom-light-apricot"
              rows="10"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-custom-light-apricot text-custom-dark-gray py-3 rounded-md hover:bg-custom-light-apricot/80 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="w-full md:w-1/2 lg:w-2/3 bg-custom-dark-gray">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110049.7389141196!2d31.2357116!3d30.0444196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840c5b5f5b5b5%3A0x5b5b5b5b5b5b5b5b!2sCairo%2C%20Egypt!5e0!3m2!1sen!2sus!4v1633024800000!5m2!1sen!2sus"
          width="100%"
          height="450"
          loading="lazy"
          className=" w-screen h-[500px]"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
