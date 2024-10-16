import { Separator } from "./ui/separator";



interface CardProps {
  text: string;
  imageURL: string;
  numbersOfRooms: number;
}


export default function CardInTheThirdSection({ text, imageURL, numbersOfRooms }: CardProps) {
  return (
    <div className='w-[385px] h-[385px] bg-custom-dark-gray flex justify-center  text-center p-6 rounded-md relative'>
      <div className=" w-full h-full">
        <img className="rounded-md w-full h-[290px] object-cover" src={imageURL} alt="" />
        <Separator className="h-3 bg-border-none" />
        <p className="text-custom-light-apricot">{text}</p>
        <div className="h-[40px] w-[150px] bg-custom-light-apricot/70  flex rounded-md absolute top-8 right-9 text-center justify-center items-center">
          <p>{numbersOfRooms} Rooms available</p>

        </div>
      </div>
    </div>
  )
}