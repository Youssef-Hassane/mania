import { Separator } from "@/components/ui/separator";
import { Tv, Wifi, ShowerHead } from 'lucide-react';

interface CardProps {
  text: string;
  Available: string;
  price: string;
}

export default function CardInTheSecondSectionOfHotelsPage({ text, Available, price }: CardProps) {
  return (
    <div className="w-[390px] h-[420px] flex flex-col bg-custom-light-apricot rounded-md  ">
      <img className="w-auto h-auto rounded-t-md" src="https://nyc3.digitaloceanspaces.com/hotelmania/Assets/6.png" alt="" />


      <div className="px-6 py-3">
        <div className="w-full h-auto flex flex-row justify-between items-center ">
          <p className="text-2xl">{text}</p>
          <p>Available: {Available}</p>
        </div>
        <div>
          <p className="text-xl text-start">{price}</p>
        </div>
      </div>


      <div className="h-auto w-full flex flex-row justify-center items-center">
        <Separator className="h-[1px] w-[95%] bg-custom-dark-gray" />
      </div>

      <div className="h-auto w-full flex flex-row justify-between items-center p-4">
        <div className="flex flex-row gap-2">

          <CircularCard util={<Tv size={20} className="text-custom-light-apricot" />} />
          <CircularCard util={<Wifi size={20} className="text-custom-light-apricot" />} />
          <CircularCard util={<ShowerHead size={20} className="text-custom-light-apricot" />} />
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
    
  )
}

function CircularCard({ util }: { util: React.ReactNode }) {
  return (
    <div className="rounded-full bg-custom-dark-gray flex justify-center items-center h-[40px] w-[40px]">{util}</div>
  );
}