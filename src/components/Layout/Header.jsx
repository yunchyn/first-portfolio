import React from 'react';
import LinkButton from '../ui/LinkButton';
import GithubIcon from '../ui/icon/GithubIcon';
import TistoryIcon from '../ui/icon/TistoryIcon';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-10 flex pt-5
        transition-all duration-300 bg-background
        ${isScrolled ? 'transform flex-row gap-2 items-center' : ' flex-col pt-18'}`}
    >
      <h1
        className={`font-bold  leading-normal 
        transition-all duration-300 
        ${isScrolled ? 'text-[20px] pb-5' : 'text-6xl pb-3'}`}
      >
        웹 프론트엔드 윤채영
      </h1>
      <div className={`flex flex-row gap-2 items-start pb-5`}>
        <LinkButton
          className="bg-[#71737C] text-white"
          isScrolled={isScrolled}
          link="https://github.com/yunchyn"
        >
          <GithubIcon size={isScrolled ? 15 : 20} />
          {!isScrolled && '깃허브'}
        </LinkButton>
        <LinkButton
          className="bg-[#ED9E6D] text-white"
          isScrolled={isScrolled}
          link="https://pom-pomm.tistory.com"
        >
          <TistoryIcon size={isScrolled ? 15 : 20} />
          {!isScrolled && '블로그'}
        </LinkButton>
      </div>
    </div>
  );
}
