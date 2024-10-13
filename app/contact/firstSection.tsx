import { Separator } from '@/components/ui/separator';
import React from 'react';
import { MoveDown } from 'lucide-react';




export default function FirstSection() {
  return (
    <div className="h-[700px] w-full flex flex-row  justify-center items-center text-center relative" style={{ backgroundImage: 'url(https://nyc3.digitaloceanspaces.com/hotelmania/Assets/5.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='flex h-full w-full justify-center items-center text-center bg-custom-light-apricot/70'>
        <div className=" m-10 w-[600px] flex flex-col justify-center items-center text-center">
          <p className="text-custom-dark-gray text-5xl">Contact us</p>
          <Separator className="h-3  bg-border-none" />
          <p className="text-custom-dark-gray text-2xl">The elegant luxury bedrooms in this gallery showcase custom interior designs & decorating ideas. View pictures and find your perfect luxury bedroom design.</p>
          <Separator className="h-6  bg-border-none" />
          <div className='flex justify-center items-center text-center h-[100px] w-[50px] border-2 border-custom-dark-gray rounded-full'>
            <MoveDown className="w-12 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
}