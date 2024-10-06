import { Separator } from "../ui/separator";

export default function SocialMedia() {
  return (
    <div className='w-full max-w-[200px] h-[300px] '>
      <ul>
        <h3 className='text-xl font-medium'>Social media</h3>
        <Separator className='h-3 bg-border-none' />

        <li><a href="https://www.facebook.com/profile.php?id=61566758795600" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://twitter.com/hotelmaniasup?s=21&t=GWm_x4PQ9PysvEcop7ivFQ" target="_blank" rel="noopener noreferrer">Twitter (X)</a></li>
        <li><a href="https://www.instagram.com/hotelmaniasup/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
        <li><a href="https://www.linkedin.com/in/mania-hotel/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
    </div>
  );
}