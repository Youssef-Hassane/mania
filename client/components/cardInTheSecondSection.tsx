import { ReactNode } from "react";
import { Separator } from "./ui/separator";



type CardProps = {
  text: string;
  logo?: ReactNode;
};

export default function CardInTheSecondSection({ text, logo }: CardProps) {
  return (
    <div className="h-[250px] w-[250px] flex flex-col justify-center items-center text-center  bg-custom-light-apricot rounded-md">
      <div className="h-auto w-auto justify-center items-center text-center">
        {logo}
      </div>
      <Separator className="h-3 bg-border-none" />
      <p>{text}</p>
    </div>
  );
}