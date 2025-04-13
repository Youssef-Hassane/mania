import { Separator } from "../ui/separator";
import { useState } from "react";
import { toast } from "sonner"


export default function Newsletter() {


  const [email, setEmail] = useState("");

  return (
    <div className='w-full max-w-[400px] h-[300px] '>

      <ul>
        <h3 className='text-xl font-medium'>Newsletter</h3>
        <Separator className='h-3 bg-border-none' />

        <li>Kindly subscribe to our newsletter to get latest deals on our rooms and vacation discount.</li>
        <Separator className='h-3 bg-border-none' />

        <div className="flex flex-row mb-4 h-[70px] w-full p-3 rounded-md bg-custom-dark-gray  placeholder-custom-light-apricot justify-center items-center text-center">
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
            className=" h-[50px] w-full p-3  bg-custom-dark-gray text-custom-light-apricot placeholder-custom-light-apricot focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={() =>
              toast(
                <div className="flex flex-row">
                  <div>
                    <p>You have subscribed 💌</p>
                    <p className="text-custom-light-apricot/70">Now you will get the latest deals on our rooms and vacation discount.</p>
                  </div>
                  <button
                    className="w-[100px] h-[40px] rounded-md bg-custom-light-apricot text-custom-dark-gray hover:bg-custom-light-apricot/70 focus:outline-none"
                    onClick={() => {
                      console.log("Undo clicked");
                      toast.dismiss();
                    }}
                  >
                    Undo
                  </button>
                </div>
              )
            }
            className="w-[200px] h-[50px] rounded-md bg-custom-light-apricot text-custom-dark-gray hover:bg-custom-light-apricot/70 focus:outline-none"
          >
            Subscribe
          </button>
        </div>
      </ul>
    </div>
  );
};