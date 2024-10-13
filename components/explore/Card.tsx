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
    <div className="bg-custom-dark-gray rounded-lg overflow-hidden relative h-[800]">
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={1200}
        height={600}
        className="w-full h-auto rounded-lg"
      />
      <div className="bg-custom-light-apricot p-6 text-center text-black absolute bottom-0 left-1/2 transform -translate-x-1/2 border-t-[10px] border-[#7C6A46] rounded-lg w-[900px] ">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-4">{description}</p>
      </div>
      <div className="h-[100px]">
      </div>
    </div>
  );
};

export default Card;
