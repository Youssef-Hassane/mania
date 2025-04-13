import HotelRoomCard from "@/components/hotels/hotel-rooms-section/room-card/HotelRoomCard";
import { useContext } from "react";
import { Context_responseDataHotels, Context_responseDataWithAmenities } from "../../../app/Home";

function HotelRoomsSection({ roomsArray }) {
  // const { responseDataHotels: roomsArray = [], setResponseDataHotels } = useContext(Context_responseDataHotels);;
  // const { roomsWithAmenities, setRoomsWithAmenities } = useContext(Context_responseDataWithAmenities);
  console.log(roomsArray);

  return (
    <section className="h-auto w-full bg-custom-dark-gray flex flex-wrap px-[100px] justify-center items-center text-center p-[50px] gap-10">
      {Array.isArray(roomsArray) && roomsArray.length > 0 ? (
        roomsArray.map((room) => (
          <HotelRoomCard
            key={room.id}
            text={room.name}
            imageURL={room.imageURL}
            amenities={room.amenities}
            // numbersOfRooms={room.rooms.length}
            where="hotel"
            Available={""}
            price={""}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
}

export default HotelRoomsSection;
