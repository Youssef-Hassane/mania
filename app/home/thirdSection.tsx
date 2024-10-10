import CardInTheThirdSection from '@/components/cardInTheThirdSection';
import { Separator } from '@/components/ui/separator';
import React from 'react';



export default function ThirdSection() {
  return (
    <div className="h-full w-full flex flex-row  justify-center items-center text-center relative" style={{ backgroundImage: 'url(https://nyc3.digitaloceanspaces.com/hotelmania/Assets/1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='h-full w-full justify-center items-center text-center bg-custom-light-apricot/60'>
        <div className=" m-10">
          <p className="text-custom-dark-gray text-5xl">Amenities at Your Service</p>
          <Separator className="h-3  bg-border-none" />
          <p className="text-custom-dark-gray text-2xl">We offer modern (5 star) hotel facilities for your comfort.</p>
          <Separator className="h-6  bg-border-none" />
        </div>
        <div className='flex flex-col gap-4 m-5 justify-center items-center md:flex-row'>
          <CardInTheThirdSection text="Television set, Extra sheets and Breakfast" imageURL="https://nyc3.digitaloceanspaces.com/hotelmania/Assets/2.png" />
          <CardInTheThirdSection text="Television set, Extra sheets, Breakfast, and fireplace" imageURL="https://nyc3.digitaloceanspaces.com/hotelmania/Assets/3.png" />
          <CardInTheThirdSection text="Television set, Extra sheets, Breakfast, and fireplace, Console and bed rest" imageURL="https://nyc3.digitaloceanspaces.com/hotelmania/Assets/4.png" />
        </div>

      </div>
    </div>
  );
}