import React from 'react';
import GraduationIcon from '../ui/icon/GraduationIcon';
import { CommonBadge } from '../ui/CommonLayouts';
import MailIcon from '../ui/icon/MailIcon';
import BlogCard from '../ui/BlogCard';
import { blogContents } from '@/data/initials';

export default function InfoSection() {
  return (
    <div
      id="info"
      className="h-screen flex flex-col items-center justify-center pt-48"
    >
      <section className="flex items-center space-x-12 pb-10 w-full">
        <div
          className="bg-[url('img/profile-img.png')] bg-cover
         bg-secondary w-[220px] aspect-square rounded-[10px]"
        ></div>
        <div>
          <p className="font-semibold text-[22px] pb-6 flex flex-row items-center">
            프론트엔드 윤채영
            <span className="text-sm text-primary font-normal flex flex-row items-center gap-1 pl-2">
              <MailIcon />
              ddddh2828@gmail.com
            </span>
          </p>
          <p className="pb-8">
            학부생 때부터 웹 개발에 관심을 가져 1년여 이상을 공부하였습니다.
            <br />
            하루의 대부분을 인터넷을 사용하며 보내며,
            <br />
            사용자 친화적인 인터랙티브 웹 개발에 관심이 많습니다.
          </p>
          <div className="flex flex-row items-center gap">
            <GraduationIcon />
            <CommonBadge className="ml-2">부경대학교 컴퓨터공학부(졸업)</CommonBadge>
            <CommonBadge className="ml-1.5">신세계아이앤씨 스파로스 아카데미 6기</CommonBadge>
          </div>
        </div>
      </section>
      <section className="flex flex-row justify-between gap-5">
        {blogContents.map((item, index) => (
          <BlogCard
            key={index}
            image={item.image}
            title={item.title}
            link={item.link}
          />
        ))}
      </section>
    </div>
  );
}
