import HotelRoomCard from "@/components/hotels/hotel-rooms-section/room-card/HotelRoomCard";
import { useContext, useEffect, useState } from "react";
import { Context_responseDataRooms, Context_responseDataWithAmenities } from "../Home";

function SecondSection() {
  const { responseDataRooms = [], setResponseDataRooms } = useContext(Context_responseDataRooms);
  const { roomsWithAmenities, setRoomsWithAmenities } = useContext(Context_responseDataWithAmenities);
  const [paginationState, setPaginationState] = useState({
    offset: 0,
    limit: 10,
  });

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5001/rooms/`);

      if (!response.ok) {
        console.log(response);
        throw new Error(`Error: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData);
      const { data: { rooms: roomsData }, offset, limit } = responseData;
      setRoomsWithAmenities(roomsData);
      setPaginationState({
        offset,
        limit
      })

    } catch (error) {
      console.error("Error searching for rooms:", error);
      alert("An error occurred while searching for rooms. Please try again later.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  console.log(responseDataRooms, roomsWithAmenities);

  return (
    <div className="h-auto w-full bg-custom-dark-gray flex flex-wrap px-[100px] justify-center items-center text-center p-[50px] gap-10">
      {roomsWithAmenities.length > 0 ? (
        roomsWithAmenities.map((room) => (
          <HotelRoomCard
            key={room.id}
            text={room.name}
            Available={room.isReserved ? "No" : "Yes"}
            price={room.price}
            imageURL={room.imageURL}
            amenities={room.amenities} // Pass amenities here
            where="room"
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SecondSection;
