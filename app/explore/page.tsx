// pages/index.tsx
import React from "react";
import Card from "../../components/explore/Card";

export default function ExplorePage() {
  return (
    <div className="bg-custom-dark-gray text-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="w-full h-[700px] relative overflow-hidden">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://nyc3.digitaloceanspaces.com/hotelmania/Assets/WhatsApp%20Video%202024-10-10%20at%207.16.57%20PM.mp4"
            autoPlay
            loop
            muted
          ></video>
          <div className="absolute inset-0 flex justify-center items-center">
            <button className="bg-white text-black px-6 py-2 rounded-full font-bold">
              Play Video
            </button>
          </div>
        </div>
      </section>

      {/* Take a Tour Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold">Take a Tour</h2>
      </section>

      {/* Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-10 px-6 lg:px-20 pb-16">
        <Card
          imgSrc="https://nyc3.digitaloceanspaces.com/hotelmania/Assets/5.png"
          imgAlt="Room"
          title="Luxurious Rooms"
          description="The elegant luxury bedrooms in our property feature interior décor design and stunning views of the surrounding area."
        />
        <Card
          imgSrc="https://nyc3.digitaloceanspaces.com/hotelmania/Assets/2fc5b56d-eee2-4626-a3ef-2a1aeee2ae66.jpg"
          imgAlt="Gym"
          title="Gym Center"
          description="Enjoy our state-of-the-art fitness center, designed to ensure you stay fit during your stay."
        />
        <Card
          imgSrc="https://nyc3.digitaloceanspaces.com/hotelmania/Assets/4b718559-1580-40b4-b11b-d7b51aa0398a.jpg"
          imgAlt="Restaurant"
          title="Restaurant"
          description="Our restaurant offers a luxurious fine dining experience, featuring international cuisines and exquisite flavors."
        />
      </section>
    </div>
  );
}
