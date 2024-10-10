import { ComboboxDemo } from "@/components/combobox";
import { DatePickerDemo } from "@/components/DatePicker";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Play } from "lucide-react";
import { useState } from "react";

// Governorate options
const governorateOptions = [
  { value: "cairo", label: "Cairo" },
  { value: "giza", label: "Giza" },
  { value: "alexandria", label: "Alexandria" },
  { value: "qalyubia", label: "Qalyubia" },
  { value: "port_said", label: "Port Said" },
  { value: "suez", label: "Suez" },
  { value: "gharbia", label: "Gharbia" },
  { value: "dakahlia", label: "Dakahlia" },
  { value: "sharkia", label: "Sharkia" },
  { value: "monufia", label: "Monufia" },
  { value: "beheira", label: "Beheira" },
  { value: "kafr_el_sheikh", label: "Kafr El Sheikh" },
  { value: "fayoum", label: "Fayoum" },
  { value: "beni_suef", label: "Beni Suef" },
  { value: "minya", label: "Minya" },
  { value: "asyut", label: "Asyut" },
  { value: "sohag", label: "Sohag" },
  { value: "qena", label: "Qena" },
  { value: "aswan", label: "Aswan" },
  { value: "luxor", label: "Luxor" },
  { value: "red_sea", label: "Red Sea" },
  { value: "matrouh", label: "Matrouh" },
  { value: "north_sinai", label: "North Sinai" },
  { value: "south_sinai", label: "South Sinai" },
  { value: "new_valley", label: "New Valley" },
  { value: "ismailia", label: "Ismailia" },
  { value: "damietta", label: "Damietta" },
  { value: "menoufia", label: "Menoufia" },
  { value: "minufiya", label: "Minufiya" },
  { value: "qena", label: "Qena" },
  { value: "red_sea", label: "Red Sea" },
];

// City options for each governorate
const cityOptions: { [key: string]: { value: string; label: string }[] } = {
  cairo: [
    { value: "abbassia", label: "Abbassia" },
    { value: "ain_shams", label: "Ain Shams" },
    { value: "azbakeya", label: "Azbakeya" },
    { value: "boulaq", label: "Boulaq" },
    { value: "cairo_city", label: "Cairo City" },
    { value: "el_marg", label: "El Marg" },
    { value: "el_matareya", label: "El Matareya" },
    { value: "el_mazallat", label: "El Mazallat" },
    { value: "el_salam", label: "El Salam" },
    { value: "el_sayeda_zeinab", label: "El Sayeda Zeinab" },
    { value: "el_shorouk", label: "El Shorouk" },
    { value: "el_zawya_el_hamra", label: "El Zawya El Hamra" },
    { value: "el_zekryat", label: "El Zekryat" },
    { value: "fifth_settlement", label: "Fifth Settlement" },
    { value: "garden_city", label: "Garden City" },
    { value: "heliopolis", label: "Heliopolis" },
    { value: "helwan", label: "Helwan" },
    { value: "maadi", label: "Maadi" },
    { value: "nasr_city", label: "Nasr City" },
    { value: "new_cairo", label: "New Cairo" },
    { value: "shubra", label: "Shubra" },
    { value: "zamalek", label: "Zamalek" },
    // ... other cities in Cairo
  ],
  giza: [
    { value: "agouza", label: "Agouza" },
    { value: "al_haram", label: "Al Haram" },
    { value: "dokki", label: "Dokki" },
    { value: "el_mohandessin", label: "El Mohandessin" },
    { value: "faisal", label: "Faisal" },
    { value: "giza_city", label: "Giza City" },
    { value: "imbaba", label: "Imbaba" },
    { value: "sixth_of_october", label: "6th of October City" },
    { value: "sheikh_zayed", label: "Sheikh Zayed" },
    // ... other cities in Giza
  ],
  alexandria: [
    { value: "agami", label: "Agami" },
    { value: "al_montaza", label: "Al Montaza" },
    { value: "anfoushi", label: "Anfoushi" },
    { value: "gleem", label: "Gleem" },
    { value: "kafr_abdo", label: "Kafr Abdo" },
    { value: "louran", label: "Louran" },
    { value: "maamoura", label: "Maamoura" },
    { value: "mandara", label: "Mandara" },
    { value: "san_stefano", label: "San Stefano" },
    { value: "sidi_bishr", label: "Sidi Bishr" },
    { value: "smouha", label: "Smouha" },
    { value: "stanley", label: "Stanley" },
    // ... other cities in Alexandria
  ],
  qalyubia: [
    { value: "banha", label: "Banha" },
    { value: "khanka", label: "Khanka" },
    { value: "qalyub", label: "Qalyub" },
    { value: "shibin_el_qanater", label: "Shibin El Qanater" },
    { value: "shubra_el_kheima", label: "Shubra El Kheima" },
    { value: "toukh", label: "Toukh" },
    // ... other cities in Qalyubia
  ],
  port_said: [
    { value: "port_said_city", label: "Port Said City" },
    { value: "el_zohour", label: "El Zohour" },
    { value: "el_manakh", label: "El Manakh" },
    { value: "el_sharq", label: "El Sharq" },
    // ... other cities in Port Said
  ],
  suez: [
    { value: "al_arbaeen", label: "Al Arbaeen" },
    { value: "attaka", label: "Attaka" },
    { value: "ganayen", label: "Ganayen" },
    { value: "suez_city", label: "Suez City" },
    // ... other cities in Suez
  ],
  gharbia: [
    { value: "el_mahalla_el_kubra", label: "El Mahalla El Kubra" },
    { value: "kafr_el_zayat", label: "Kafr El Zayat" },
    { value: "samanoud", label: "Samanoud" },
    { value: "tanta", label: "Tanta" },
    { value: "zefta", label: "Zefta" },
    // ... other cities in Gharbia
  ],
  dakahlia: [
    { value: "mansoura", label: "Mansoura" },
    { value: "mit_gamr", label: "Mit Gamr" },
    { value: "talkha", label: "Talkha" },
    { value: "belqas", label: "Belqas" },
    { value: "sherbin", label: "Sherbin" },
    // ... other cities in Dakahlia
  ],
  sharkia: [
    { value: "zagazig", label: "Zagazig" },
    { value: "belbeis", label: "Belbeis" },
    { value: "abu_hammad", label: "Abu Hammad" },
    { value: "minya_el_qamh", label: "Minya El Qamh" },
    // ... other cities in Sharkia
  ],
  monufia: [
    { value: "shebin_el_kom", label: "Shebin El Kom" },
    { value: "menouf", label: "Menouf" },
    { value: "ashmoun", label: "Ashmoun" },
    { value: "tala", label: "Tala" },
    // ... other cities in Monufia
  ],
  beheira: [
    { value: "damanhour", label: "Damanhour" },
    { value: "kafr_el_dawar", label: "Kafr El Dawar" },
    { value: "rashid", label: "Rashid" },
    { value: "abu_hummus", label: "Abu Hummus" },
    // ... other cities in Beheira
  ],
  kafr_el_sheikh: [
    { value: "kafr_el_sheikh_city", label: "Kafr El Sheikh City" },
    { value: "desouk", label: "Desouk" },
    { value: "fuwah", label: "Fuwah" },
    { value: "baltim", label: "Baltim" },
    // ... other cities in Kafr El Sheikh
  ],
  fayoum: [
    { value: "fayoum_city", label: "Fayoum City" },
    { value: "ibshaway", label: "Ibshaway" },
    { value: "tamiya", label: "Tamiya" },
    { value: "sinnuris", label: "Sinnuris" },
    // ... other cities in Fayoum
  ],
  beni_suef: [
    { value: "beni_suef_city", label: "Beni Suef City" },
    { value: "el_wasta", label: "El Wasta" },
    { value: "nasser", label: "Nasser" },
    { value: "biba", label: "Biba" },
    // ... other cities in Beni Suef
  ],
  minya: [
    { value: "minya_city", label: "Minya City" },
    { value: "bani_mazar", label: "Bani Mazar" },
    { value: "mallawi", label: "Mallawi" },
    { value: "maghagha", label: "Maghagha" },
    // ... other cities in Minya
  ],
  asyut: [
    { value: "asyut_city", label: "Asyut City" },
    { value: "abu_tig", label: "Abu Tig" },
    { value: "dayrout", label: "Dayrout" },
    { value: "manfalut", label: "Manfalut" },
    // ... other cities in Asyut
  ],
  sohag: [
    { value: "sohag_city", label: "Sohag City" },
    { value: "akhmim", label: "Akhmim" },
    { value: "girga", label: "Girga" },
    { value: "tahta", label: "Tahta" },
    // ... other cities in Sohag
  ],
  qena: [
    { value: "qena_city", label: "Qena City" },
    { value: "abu_tesht", label: "Abu Tesht" },
    { value: "nag_hammadi", label: "Nag Hammadi" },
    { value: "qift", label: "Qift" },
    // ... other cities in Qena
  ],
  aswan: [
    { value: "aswan_city", label: "Aswan City" },
    { value: "abu_simbel", label: "Abu Simbel" },
    { value: "kom_ombo", label: "Kom Ombo" },
    { value: "e dfu", label: "Edfu" },
    // ... other cities in Aswan
  ],
  luxor: [
    { value: "luxor_city", label: "Luxor City" },
    { value: "armant", label: "Armant" },
    { value: "esna", label: "Esna" },
    { value: "qurna", label: "Qurna" },
    // ... other cities in Luxor
  ],
  red_sea: [
    { value: "hurghada", label: "Hurghada" },
    { value: "safaga", label: "Safaga" },
    { value: "mars a_alam", label: "Marsa Alam" },
    { value: "ras_ghareb", label: "Ras Ghareb" },
    // ... other cities in Red Sea
  ],
  matrouh: [
    { value: "mars a_matrouh", label: "Marsa Matrouh" },
    { value: "sidi_barrani", label: "Sidi Barrani" },
    { value: "el_alamein", label: "El Alamein" },
    { value: "siwa", label: "Siwa Oasis" },
    // ... other cities in Matrouh
  ],
  north_sinai: [
    { value: "arish", label: "Arish" },
    { value: "bir_el_abd", label: "Bir El Abd" },
    { value: "rafah", label: "Rafah" },
    { value: "sheikh_zuweid", label: "Sheikh Zuweid" },
    // ... other cities in North Sinai
  ],
  south_sinai: [
    { value: "sharm_el_sheikh", label: "Sharm El Sheikh" },
    { value: "dahab", label: "Dahab" },
    { value: "nuweiba", label: "Nuweiba" },
    { value: "st_catherine", label: "St. Catherine" },
    { value: "taba", label: "Taba" },
    // ... other cities in South Sinai
  ],
  new_valley: [
    { value: "kharga", label: "Kharga" },
    { value: "dakhla", label: "Dakhla" },
    { value: "farafra", label: "Farafra" },
    // ... other cities in New Valley
  ],
  ismailia: [
    { value: "ismailia_city", label: "Ismailia City" },
    { value: "fayed", label: "Fayed" },
    { value: "qanatir_el_khayriya", label: "Qantara East" },
    // ... other cities in Ismailia
  ],
  damietta: [
    { value: "damietta_city", label: "Damietta City" },
    { value: "faraskur", label: "Faraskur" },
    { value: "new_damietta", label: "New Damietta" },
    // ... other cities in Damietta
  ],
  menoufia: [
    { value: "shebin_el_kom", label: "Shebin El Kom" },
    { value: "menouf", label: "Menouf" },
    { value: "ashmoun", label: "Ashmoun" },
    { value: "tala", label: "Tala" },
    // ... other cities in Menoufia
  ],
  // Continue adding cities for other governorates if any are missing
};

// Person options
const personOptions = Array.from({ length: 10 }, (_, i) => ({
  value: (i + 1).toString(),
  label: `${i + 1} Person${i > 0 ? "s" : ""}`,
}));


export default function FirstSection() {
  const [selectedGovernorate, setSelectedGovernorate] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
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

  const handleSearch = () => {
    // Implement your search logic here
    console.log("Search Parameters:");
    console.log("Governorate:", selectedGovernorate);
    console.log("City:", selectedCity);
    console.log("Person:", selectedPerson);
    console.log("Check-in Date:", checkInDate);
    console.log("Check-out Date:", checkOutDate);
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
          <Button className="rounded-full w-[150px] h-[50px] bg-custom-dark-gray text-custom-light-apricot">
            Book now
          </Button>
          <div className="flex justify-center items-center gap-2">
            <Button className="rounded-full w-[50px] h-[50px] bg-custom-dark-gray">
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