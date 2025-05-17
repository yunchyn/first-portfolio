import React from 'react';
import MailIcon from '../icon/MailIcon';
import GraduationIcon from '../icon/GraduationIcon';
import { CommonBadge } from '../CommonLayouts';
import LisenceIcon from '../icon/LisenceIcon';

export default function ProfileArea() {
  return (
    <section className="flex items-center space-x-12 pb-5 w-full">
      <div
        className="bg-[url('img/profile-img.png')] bg-cover
         bg-secondary w-[220px] aspect-square rounded-[10px]"
      ></div>
      <div>
        <p className="font-semibold text-[22px] pb-6 flex flex-row items-center">
          프론트엔드 윤채영
          <span className="text-sm text-primary font-normal flex flex-row items-center gap-1 pl-2">
            <MailIcon
              size={17}
              strokeWidth={1.5}
            />
            ddddh2828@gmail.com
          </span>
        </p>
        <p className="pb-8 font-sm text-darkgray">
          학부생 때부터 웹 개발에 관심을 가져 1년여 이상을 공부하였습니다.
          <br />
          하루의 대부분을 인터넷을 사용하며 보내며,
          <br />
          사용자 친화적인 인터랙티브 웹 개발에 관심이 많습니다.
        </p>
        <div className="flex flex-row items-center">
          <GraduationIcon />
          <CommonBadge className="ml-2">부경대학교 컴퓨터공학부(졸업)</CommonBadge>
          <CommonBadge className="ml-1.5">신세계아이앤씨 스파로스 아카데미 6기</CommonBadge>
        </div>
        <div className="flex flex-row items-center pt-3">
          <LisenceIcon />
          <CommonBadge
            className="ml-2"
            bgColor="#a8adc1"
            textColor="#FFFFFF"
          >
            정보처리기사
          </CommonBadge>
          <CommonBadge
            className="ml-1.5"
            bgColor="#a8adc1"
            textColor="#FFFFFF"
          >
            SQLD
          </CommonBadge>
        </div>
      </div>
    </section>
  );
}
