import React from 'react';
import FooterLink from './FooterLink';

function Footer() {
  return (
    <div className="py-10 flex flex-col md:flex-row md:justify-between text-sm container gap-4 md:gap-0 uppercase items-center">
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <FooterLink to="#">Contact</FooterLink>
        <FooterLink to="#">Terms</FooterLink>
        <FooterLink to="#">Privacy Policy</FooterLink>
      </div>
      <div className="order-last md:order-none md:space-y-1 text-center">
        <div>
          <span className="uppercase">
            &#169; {new Date().getFullYear()} By Forte
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <FooterLink to="#">Instagram</FooterLink>
        <FooterLink to="#">YouTube</FooterLink>
        <FooterLink to="#">Facebook</FooterLink>
      </div>
    </div>
  );
}

export default Footer;
