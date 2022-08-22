import React, { useEffect, useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import FooterLink from './FooterLink';

function Footer() {

  return (
    <div className="bg-black py-20">
      <div className="container flex flex-col md:flex-row gap-y-10 md:gap-y-0">
        <div className="basis-2/4 lg:basis-1/3 order-last md:order-none prose prose-invert">
          <h2 className="font-serif text-4xl !mb-4">By Forte</h2>
          <p>Footer content</p>
          <span className="text-gray-500">
            <div className="flex items-center">
              <span> Made with&nbsp;</span>
              <AiFillHeart className="inline-block black" />
              <span>
                &nbsp;by&nbsp;
                <a
                  href="https://bryanbrotonel.live"
                  className="no-underline text-inherit hover:text-white-20"
                >
                  Bryan
                </a>
              </span>
            </div>
          </span>
        </div>
        <div className="basis-1/4 lg:basis-1/3 flex justify-start md:justify-center">
          <div>
            <h3 className="font-sans text-sm uppercase mb-4 text-gray-400">
              Pages
            </h3>
            <div></div>
            <ul className="list-none space-y-3 text-lg">
              <li>
                <FooterLink to="about">About</FooterLink>
              </li>
              <li>
                <FooterLink to="team">Team</FooterLink>
              </li>
              <li>
                <FooterLink to="projects">Projects</FooterLink>
              </li>
              <li>
                <FooterLink to="blog">Blog</FooterLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="basis-1/4 lg:basis-1/3 flex justify-start md:justify-center">
          <div>
            <h3 className="font-sans text-sm uppercase mb-4 text-gray-400">
              Contact
            </h3>
            <ul className="list-none space-y-3 text-lg">
              <li>
                <FooterLink to="#">Instagram</FooterLink>
              </li>
              <li>
                <FooterLink to="#">Twitter</FooterLink>
              </li>
              <li>
                <FooterLink to="#">Facebook</FooterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
