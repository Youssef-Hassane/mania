import Link from 'next/link';
import { Separator } from "../ui/separator";

export default function QuickLinks() {
  return (
    <div className='w-full max-w-[200px] h-[300px] '>
      <ul>
        <h3 className='text-xl font-medium'>Quick links</h3>
        <Separator className='h-3 bg-border-none' />




        <li><Link href="/hotels">Room booking</Link></li>
        <li><Link href="/hotels">Rooms</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/explore">Explore</Link></li>

      </ul>
    </div>
  )
}