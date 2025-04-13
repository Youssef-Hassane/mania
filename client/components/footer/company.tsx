import { Separator } from "../ui/separator";
import PrivacyPolicy from "./company/privacyPolicy";
import RefundPolicy from "./company/refundPolicy";
import FAQ from "./company/FAQ";
import About from "./company/About";


export default function CompanyFooter() {
  return (
    <div className='w-full max-w-[200px] h-[300px] '>
      <ul>
        <h3 className='text-xl font-medium'>Company</h3>
        <Separator className='h-3 bg-border-none' />
        <PrivacyPolicy />
        <br />
        <RefundPolicy />
        <br />
        <FAQ />
        <br />
        <About />
      </ul>
    </div>
  );
}
