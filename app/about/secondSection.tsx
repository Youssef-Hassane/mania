



import Image from 'next/image';

export default function SecondSection() {
  return (
    <div className="flex flex-wrap bg-custom-dark-gray">
      <div className="w-[40%]  flex flex-col justify-center items-center">
        <Image
          src="https://nyc3.digitaloceanspaces.com/hotelmania/Assets/Screenshot%202024-10-12%20at%205.46.33%E2%80%AFPM%20%281%29.png"
          alt="HotelMania Screenshot"
          width={300}
          height={600}
        />
        <p className="text-2xl text-custom-light-apricot p-10">A hotel finder at you fingertips</p>
      </div>
      <div className="w-[50%] p-10 text-custom-light-apricot">
        <div className="w-full text-center p-5">
          <strong className="text-3xl text-center">About HotelMania</strong>
        </div>

        <p><strong>HotelMania</strong> was founded with the vision of creating a seamless, user-friendly platform for travelers to discover and book hotels worldwide. Whether you’re booking a weekend getaway or an extended stay, we make it easy to find the perfect hotel tailored to your needs and budget.</p>

        <strong>Our Mission:</strong>
        <p>At HotelMania, our mission is to simplify the hotel booking process by offering a wide range of accommodation options at competitive prices. We aim to provide travelers with a reliable, hassle-free experience from start to finish.</p>

        <strong>What We Offer:</strong>
        <ul>
          <li>A wide selection of hotels, ranging from budget-friendly options to luxury stays.</li>
          <li>Special discounts and exclusive deals for registered users.</li>
          <li>A secure platform to make and manage bookings.</li>
          <li>24/7 customer support to assist with any questions or concerns.</li>
        </ul>

        <strong>Why Choose Us:</strong>
        <p>We are more than just a hotel booking platform. HotelMania offers a personalized experience, ensuring that every user finds a stay that suits their preferences. We continuously work to improve our platform and build trust with our customers by maintaining transparency, competitive pricing, and excellent customer service.</p>

        <strong>Our Technology:</strong>
        <p>HotelMania is built on cutting-edge technology to ensure reliability and security. By leveraging frameworks such as React, Node.js, and secure databases, we provide a fast, responsive platform that guarantees a seamless booking experience for every user.</p>

        <strong>Our Team:</strong>
        <p>We are a group of passionate individuals dedicated to making travel easier for everyone. Our team combines expertise in software development, hospitality, and customer service to create a comprehensive platform tailored to the needs of modern travelers.</p>

        <strong>Contact Us:</strong>
        <p>If you have any questions or need assistance, feel free to reach out to us at <a href="mailto:support@hotelmania.com">support@hotelmania.com</a>. We are here to help you at every step of your journey!</p>

      </div>
    </div>
  );
}