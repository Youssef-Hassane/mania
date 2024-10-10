import CardInTheSecondSection from "@/components/cardInTheSecondSection";
import { Separator } from "@/components/ui/separator";
import { Wifi, Dumbbell, UtensilsCrossed, Gamepad2, Lightbulb, WashingMachine, SquareParking, Waves } from 'lucide-react';



export default function SecondSection() {



  return (
    <div className="h-auto w-full bg-custom-dark-gray flex flex-row px-[100px] relative">
      <div className="h-full w-full justify-center items-center text-center">
        <div className=" m-10">
          <p className="text-custom-light-apricot text-5xl">Amenities at Your Service</p>
          <Separator className="h-3 bg-border-none" />
          <p className="text-custom-light-apricot text-2xl">We offer modern (5 star) hotel facilities for your comfort.</p>
        </div>
        <div className="flex h-auto w-auto justify-center items-center text-center">
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 m-10 max-w-[1110px] justify-center items-center">
            <CardInTheSecondSection  text="Swimming Pool" logo={<Waves size={50} className="h-30 w-30 "/>} />
            <CardInTheSecondSection  text="Wifi" logo={<Wifi size={50} className="h-30 w-30 "/>} />
            <CardInTheSecondSection  text="Breakfast" logo={<UtensilsCrossed size={50} className="h-30 w-30 "/>} />
            <CardInTheSecondSection  text="Gym" logo={<Dumbbell size={50} className="h-30 w-30 "/>} />
            <CardInTheSecondSection  text="Game Center" logo={<Gamepad2 size={50} className="h-30 w-30 "/>} />
            <CardInTheSecondSection  text="24/7 Light" logo={<Lightbulb size={50} className="h-30 w-30 "/>} />
            <CardInTheSecondSection  text="Laundry" logo={<WashingMachine size={50} className="h-30 w-30 "/>} />
            <CardInTheSecondSection  text="Parking Space" logo={<SquareParking size={50} className="h-30 w-30 "/>} />
          </div>
        </div>
      </div>
    </div>
  )
}