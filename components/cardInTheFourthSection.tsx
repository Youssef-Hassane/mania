import { CircleUser, Star } from "lucide-react";
import { Avatar } from "./ui/avatar";

type CardProps = {
  name: string;
  text: string;
  date: string;
};

export default function CardInTheFourthSection({ name, text, date }: CardProps) {
  return(
    <div className="w-[470px] h-[475px] rounded-md bg-custom-light-apricot px-7 mb-9">

        <div className="w-auto h-[20px] rounded-md  flex flex-row justify-between items-center py-8" >
          <p>{date}</p>
          <div className="flex flex-row gap-2">
            <Star size={15} /> <Star size={15} /><Star size={15} /><Star size={15} /><Star size={15} />
          </div>
        </div>

        <div className="mb-7">
          <p className='text-start'>{text}</p>
        </div>

        <div className=" flex flex-row gap-2 justify-start items-center text-center">
          <Avatar className='h-auto w-auto'>
            <CircleUser size={35} />
          </Avatar>
          <p className="text-custom-dark-gray">{name}</p>
        </div>

      </div>
  )
}