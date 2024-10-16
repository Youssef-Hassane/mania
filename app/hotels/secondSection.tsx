import CardInTheSecondSectionOfHotelsPage from "@/components/cardInTheSecondSectionOfHotelsPage";
import { useContext } from "react";
import { Context_responseDataHotels } from "../Home";

function SecondSection() {
  const { responseDataHotels = [], setResponseDataHotels } = useContext(Context_responseDataHotels);

  const defaultData = async () => {
    try {
      const response = await fetch(`http://localhost:5001/hotels?governate=Cairo`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const responseData = await response.json();

      setResponseDataHotels(responseData);

    } catch (error) {
      console.error("Error searching for rooms:", error);
      alert("An error occurred while searching for rooms. Please try again later.");
    }
  };


  if (!Array.isArray(responseDataHotels) || responseDataHotels.length === 0) {
    defaultData();
  }


  return (
    <div className="h-auto w-full bg-custom-dark-gray flex flex-wrap px-[100px] justify-center items-center text-center p-[50px] gap-10">


      {Array.isArray(responseDataHotels) && responseDataHotels.length > 0 ? (
        responseDataHotels.map((room) => (
          <CardInTheSecondSectionOfHotelsPage
            key={room.id}
            text={room.name}
            imageURL={room.imageURL}
            numbersOfRooms={room.rooms.length}
            where="hotel"
            Available={""}
            price={""}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SecondSection;
