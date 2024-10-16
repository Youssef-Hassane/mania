import { ComboboxDemo } from "@/components/combobox";
import { DatePickerDemo } from "@/components/DatePicker";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Play } from "lucide-react";
import { useContext, useState } from "react";
import { Context_search, Context_responseDataRooms } from "../Home";
import { useRouter } from 'next/navigation';

// Governorate options
const governorateOptions = [
  { value: "cairo", label: "Cairo" },
  { value: "giza", label: "Giza" },
  { value: "alexandria", label: "Alexandria" },
  { value: "minya", label: "Minya" },
  { value: "sharqia", label: "Sharqia" },
  { value: "suez", label: "Suez" },
];

// City options for each governorate
const cityOptions: { [key: string]: { value: string; label: string }[] } = {
  cairo: [
    { value: "Nasr City", label: "Nasr City" },
    { value: "heliopolis", label: "Heliopolis" },
    { value: "shubra", label: "Shubra" },
    { value: "maadi", label: "Maadi" },

  ],
  giza: [
    { value: "6th_of_october", label: "6th of october" },
    { value: "sheikh_zayed", label: "Sheikh Zayed" },
    { value: "al_haram", label: "Al-Haram" },
    { value: "imbaba", label: "Imbaba" },
  ],

  alexandria: [
    { value: "Borg_Al_arab", label: "Borg Al arab" },
    { value: "Abu_Qir", label: "Abu Qir" },
    { value: "Montazah", label: "Montazah" },
    { value: "Sidi_Gaber", label: "Sidi Gaber" },

  ],
  minya: [
    { value: "minya", label: "Minya" },
    { value: "mallawi", label: "Malawi" },
    { value: "bani_mazar", label: "Beni Mazar" },
    { value: "abu_qurqas", label: "Abu Qurqas" },
  ],
  sharqia: [
    { value: "zagazig", label: "Zagazig" },
    { value: "mit_ghamr", label: "Mit-Ghamr" },
    { value: "10th_of_ramadan", label: "10th of Ramadan" },
    { value: "al_ibrahimiya", label: "Al Ibrahimiya" },
  ],
  suez: [
    { value: "al_ghanayen", label: "Al Ghanayen" },
    { value: "suez", label: "Suez" },
    { value: "faisal", label: "Faisal" },
  ],
};

// Person options
const personOptions = Array.from({ length: 10 }, (_, i) => ({
  value: (i + 1).toString(),
  label: `${i + 1} Person${i > 0 ? "s" : ""}`,
}));


export default function FirstSection() {
  const router = useRouter();



  const { selectedCity, setSelectedCity } = useContext(Context_search);
  const { responseDataRooms, setResponseDataRooms } = useContext(Context_responseDataRooms);




  const [selectedGovernorate, setSelectedGovernorate] = useState("");
  const [selectedPerson, setSelectedPerson] = useState("");
  const [checkInDate, setCheckInDate] = useState<Date | undefined>();
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>();

  const handleGovernorateChange = (value: string) => {
    setSelectedGovernorate(value);
    setSelectedCity(""); // Reset city when governorate changes
  };

  const handleCityChange = (value: string) => {
    setSelectedCity(value);
  };

  const handlePersonChange = (value: string) => {
    setSelectedPerson(value);
  };

  const cities =
    selectedGovernorate && cityOptions[selectedGovernorate]
      ? cityOptions[selectedGovernorate]
      : [];

  const handleSearch = async () => {
    if (!selectedGovernorate || !selectedCity || !selectedPerson || !checkInDate || !checkOutDate) {
      alert("Please fill in all search fields.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5001/rooms?city=Nasr%20City`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const responseData = await response.json();
      setResponseDataRooms(responseData);
      console.log("Search Response:", responseDataRooms);

      router.push('/hotels');
      

    } catch (error) {
      console.error("Error searching for a room:", error);
      alert("An error occurred while searching for rooms. Please try again later.");
    }
  };


  const handleTakeTour = async () => {
    router.push('/explore');
    router.refresh();
  };

  const handleBookNow = async () => {
    router.push('/rooms');
    router.refresh();
  };


  return (
    <div className="h-[650px] w-full bg-custom-light-apricot flex flex-row px-[100px] relative">
      {/* Left Side */}
      <div className="flex h-full w-[70%] justify-center items-center">
        <div className="h-[90%] w-[90%]">
          <p className="flex font-custom text-custom-light-apricot bg-custom-dark-gray w-[220px] h-[70px] justify-center items-center rounded-md">
            HotelMania
          </p>
          <Separator className="h-5 bg-border-none" />
          <div className="w-full max-w-[400px] h-auto">
            <p className="text-5xl font-bold text-custom-dark-gray">
              Hotel for every moment rich in emotion
            </p>
          </div>
          <Separator className="h-8 bg-border-none" />
          <div className="w-full max-w-[400px] h-auto">
            <p className="text-xl text-custom-dark-gray">
              Every moment feels like the first time in paradise view
            </p>
          </div>
          <Separator className="h-8 bg-border-none" />
          <div className="w-full max-w-[400px] h-auto flex flex-row gap-9">
            <Button onClick={handleBookNow} className="rounded-full w-[150px] h-[50px] bg-custom-dark-gray text-custom-light-apricot">
              Book now
            </Button>
            <div className="flex justify-center items-center gap-2">
              <Button onClick={handleTakeTour} className="rounded-full w-[50px] h-[50px] bg-custom-dark-gray">
                <Play
                  className="text-custom-light-apricot fill-current"
                  size={20}
                />
              </Button>
              Take a tour
            </div>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex h-full w-1/2 ">
        <img
          src="https://nyc3.digitaloceanspaces.com/hotelmania/Assets/Screenshot%202024-10-08%20at%209.04.31%E2%80%AFAM.png"
          alt="home"
          className=""
        />
      </div>
      {/* Search Bar */}
      <div className="w-[85%] h-[100px] absolute bg-custom-dark-gray bottom-10 left-1/2 transform -translate-x-1/2 rounded-md">
        <div className="flex flex-row gap-4 w-full h-full px-5 py-5">
          {/* Governorate Combobox */}
          <div className="w-full h-full flex flex-row justify-center items-center">
            <MapPin
              className="text-custom-light-apricot "
              size={30}
              width={40}
            />
            <ComboboxDemo
              name="Governorate"
              options={governorateOptions}
              value={selectedGovernorate}
              onChange={handleGovernorateChange}
            />
          </div>

          {/* City Combobox */}
          <div className="w-full h-full flex flex-row justify-center items-center">
            <MapPin
              className="text-custom-light-apricot "
              size={30}
              width={40}
            />
            <ComboboxDemo
              name="City"
              options={cities}
              value={selectedCity}
              onChange={handleCityChange}
              disabled={!selectedGovernorate}
            />
          </div>

          {/* Person Combobox */}
          <div className="w-full h-full flex flex-row justify-center items-center">
            <MapPin
              className="text-custom-light-apricot "
              size={30}
              width={40}
            />
            <ComboboxDemo
              name="Person"
              options={personOptions}
              value={selectedPerson}
              onChange={handlePersonChange}
            />
          </div>

          {/* Check-in Date */}
          <div className="w-full h-full flex flex-row justify-center items-center">
            <DatePickerDemo
              text="Check in"
              selectedDate={checkInDate}
              onDateChange={setCheckInDate}
            />
          </div>

          {/* Check-out Date */}
          <div className="w-full h-full flex flex-row justify-center items-center">
            <DatePickerDemo
              text="Check out"
              selectedDate={checkOutDate}
              onDateChange={setCheckOutDate}
            />
          </div>

          {/* Search Button */}
          <div className="w-full h-full flex flex-row justify-center items-center">
            <button
              onClick={handleSearch}
              className="w-[200px] h-[50px] rounded-md bg-custom-light-apricot text-custom-dark-gray hover:bg-custom-light-apricot/70 focus:outline-none"
            >
              Search For A Room
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}