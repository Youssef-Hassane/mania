import CardInTheThirdSection from '@/components/cardInTheThirdSection';
import { Separator } from '@/components/ui/separator';
import React, { useContext } from 'react';
import { Context_responseDataHotels } from '../Home';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';



export default function ThirdSection() {
  const { responseDataHotels, setResponseDataHotels } = useContext(Context_responseDataHotels);

  const defaultData = async () => {
    try {
      const response = await fetch(`http://localhost:5001/hotels?governate=Cairo`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const responseData = await response.json();

      setResponseDataHotels(responseData);
      console.log(responseData);

    } catch (error) {
      console.error("Error searching for rooms:", error);
      alert("An error occurred while searching for rooms. Please try again later.");
    }
  };


  if (!Array.isArray(responseDataHotels) || responseDataHotels.length === 0) {
    defaultData();
  }

  return (
    <div className="h-full w-full flex flex-row  justify-center items-center text-center relative" style={{ backgroundImage: 'url(https://nyc3.digitaloceanspaces.com/hotelmania/Assets/1.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='h-full w-full justify-center items-center text-center bg-custom-light-apricot/60 md:px-[100px] px-[1px]'>
        <div className=" m-10">
          <p className="text-custom-dark-gray text-5xl">Amenities at Your Service</p>
          <Separator className="h-3  bg-border-none" />
          <p className="text-custom-dark-gray text-2xl">We offer modern (5 star) hotel facilities for your comfort.</p>
          <Separator className="h-6  bg-border-none" />
        </div>
        <div className='flex flex-row w-full pr-0'>
          <ScrollArea className="w-full overflow-auto">
            <div className='flex flex-row gap-4 m-5 justify-center items-center '>
              {Array.isArray(responseDataHotels) && responseDataHotels.length > 0 ? (
                responseDataHotels.map((room) => (
                  <CardInTheThirdSection
                    key={room.id}
                    text={room.name}
                    imageURL={room.imageURL}
                    numbersOfRooms={room.rooms.length}
                  />
                ))
              ) : (
                <p>Loading...</p>
              )}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>

      </div>
    </div>
  );
}
