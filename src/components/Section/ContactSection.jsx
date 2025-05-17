import React from 'react';
import { CommonSection, SectionHeading } from '../ui/CommonLayouts';
import MailIcon from '../ui/icon/MailIcon';
import CallIcon from '../ui/icon/CallIcon';
import ChevronUpIcon from '../ui/icon/ChevronUpIcon';

export default function ContactSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CommonSection
      id="contact"
      className="pb-72"
    >
      <SectionHeading>읽어주셔서 감사합니다.</SectionHeading>
      <p>
        자세한 내용은 인터뷰를 통해 설명드리고 싶습니다. <br />
        감사합니다.
      </p>
      <div className="flex flex-row items-center gap-4 pb-22">
        <div
          className="bg-[url('/img/profile-img2.png')] bg-cover
         bg-secondary w-[130px] aspect-square rounded-[10px]
         my-4"
        ></div>
        <div className="space-y-1 text-darkgray">
          <div className="flex flex-row items-center gap-2">
            <MailIcon
              size={19}
              strokeWidth={1.5}
            />
            <span className="text-sm">ddddh2828@gmail.com</span>
          </div>
          <div className="flex flex-row gap-2">
            <CallIcon size={19} />
            <span className="text-sm">010-3078-2170</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-3">
        <p className="text-sm text-primary leading-4.5">
          마지막 업데이트
          <br />
          2025.05.17
        </p>
        <button
          onClick={scrollToTop}
          className="inline-block bg-secondary  text-sm text-primary rounded-xl py-1 px-2.5 self-center 
          hover:bg-secondary-light duration-300 cursor-pointer"
        >
          페이지 상단으로
          <ChevronUpIcon className="inline-block ml-1" />
        </button>
      </div>
    </CommonSection>
  );
}
