// components/Card.tsx
import React from "react";
import Image from "next/image";

interface CardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, imgAlt, title, description }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={1200}
        height={600}
        className="w-full h-auto"
      />
      <div className="bg-custom-light-apricot p-6 text-center text-black">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-4">{description}</p>
      </div>
    </div>
  );
};

export default Card;
