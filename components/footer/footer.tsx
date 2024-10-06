import React from 'react';
import CompanyFooter from './company';
import SocialMedia from './socialMedia';
import Newsletter from './newsletter';
import QuickLinks from './quickLinks';
import HotelManiaInfo from './hotelManiaInfo';


export default function Footer() {
  return (
    <footer className='w-full h-[400px] bottom-0 bg-custom-light-apricot'>
      <div className='flex flex-row gap-4 justify-between items-center mx-[150px] h-full'>
        <HotelManiaInfo />
        <QuickLinks />
        <CompanyFooter />
        <SocialMedia />
        <Newsletter />
      </div>
    </footer>
  );
};

