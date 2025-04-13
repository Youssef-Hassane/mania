import { Separator } from "@/components/ui/separator";
import { Tv, Wifi, ShowerHead } from 'lucide-react';
import { ScrollArea, ScrollBar } from "../../../ui/scroll-area";
import Image from "next/image";

interface CardProps {
  text: string;
  Available: string;
  price: string;
  imageURL: string;
  numbersOfRooms?: number;
  where?: string;
  amenities?: { id: string; name: string; iconURL: string }[]; // Add amenities prop

}

export default function HotelRoomCard({ text, Available, price, imageURL, numbersOfRooms, amenities, where }: CardProps) {
  return (
    <div className="w-[450px] h-auto flex flex-col bg-custom-light-apricot rounded-md">
      {/* Apply the background color and set the image */}
      <div className="w-[450px] h-[250px] rounded-t-md bg-[#F8CBA4]">
        <Image className="w-full h-full object-cover min-h-[250px] rounded-t-md" src={imageURL} alt="Hotel image" width={450} height={250} />
      </div>

      <div className="px-6 py-3">
        <div className="w-full h-auto flex flex-row justify-between items-center">
          <p className="text-2xl">
            {text.length > 20 ? `${text.substring(0, 20)}...` : text}
          </p>

          {where === "room" ? (
            <p>Available: {Available}</p>
          ) : (
            <p>Available Rooms: {numbersOfRooms}</p>
          )}
        </div>
        {where === "room" ? (
          <div className="flex flex-row">
            <p className="text-xl text-start">{price} </p>
            <p className="text-sm flex items-end pl-1">EGP</p>
          </div>
        ) : null}
      </div>

      <div className="h-auto w-full flex flex-row justify-center items-center">
        <Separator className="h-[1px] w-[95%] bg-custom-dark-gray" />
      </div>

      <div className="h-auto w-full flex flex-row justify-between items-center p-4">
        <div className="flex flex-row gap-2">
          {/* Display Amenities */}
          {amenities && amenities.length > 0 && (
            <div className="flex flex-row gap-2 mt-2">
              <ScrollArea className="w-[260px] h-[50px] overflow-auto">
                <div className="flex flex-row items-center gap-2">
                  {amenities.map((amenity) => (
                    <div key={amenity.id} className="flex flex-row items-center gap-2">
                      {amenity.iconURL ? (
                        <CircularCard
                          util={
                            <Image
                              src={amenity.iconURL}
                              width={24}
                              height={24}
                              className="w-6 h-6"
                              alt={amenity.name}
                              style={{ filter: 'invert(87%) sepia(29%) saturate(575%) hue-rotate(323deg) brightness(100%) contrast(92%)' }}
                            />
                          }
                        />
                      ) : null}
                    </div>
                  ))}
                </div>
                <ScrollBar className="scrollbar-none" orientation="horizontal" />
              </ScrollArea>
            </div>
          )}
        </div>

        <div className="w-auto h-full flex flex-row justify-center items-center">
          <button
            className="w-[150px] h-[50px] rounded-md bg-custom-dark-gray text-custom-light-apricot hover:bg-custom-dark-gray/70 focus:outline-none"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

function CircularCard({ util }: { util: React.ReactNode }) {
  return (
    <div className="rounded-full bg-custom-dark-gray flex flex-row justify-center items-center h-[40px] w-[40px]">
      {util}
    </div>
  );
}
