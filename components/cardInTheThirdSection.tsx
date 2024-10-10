import { Separator } from "./ui/separator";



interface CardProps {
  text: string;
  imageURL: string;
}


export default function CardInTheThirdSection({ text, imageURL }: CardProps) {
  return (
    <div className='w-[385px] h-[385px] bg-custom-dark-gray flex justify-center  text-center p-6 rounded-md relative'>
      <div>
        <img className="rounded-md " src={imageURL} alt="" />
        <Separator className="h-3 bg-border-none" />
        <p className="text-custom-light-apricot ">{text}</p>
        <div className="h-[40px] w-[140px] bg-custom-light-apricot/70  flex rounded-md absolute top-8 right-9 text-center justify-center items-center">
          <p>2 Rooms available</p>

        </div>
      </div>
    </div>
  )
}