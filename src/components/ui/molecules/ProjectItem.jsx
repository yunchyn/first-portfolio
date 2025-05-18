import React from 'react';
import { CommonBadge, CommonCard, LinkText } from '../CommonLayouts';
import LinkIcon from '../icon/LinkIcon';
import ReadmeIcon from '../icon/ReadmeIcon';
import { badgeColorMap } from '@/data/initials';
import SlideCarousel from './SlideCarousel';
import ChevronUpIcon from '../icon/ChevronUpIcon';
import NoteIcon from '../icon/NoteIcon';

export default function ProjectItem({ data }) {
  const {
    title,
    badges,
    images,
    period,
    siteUrl,
    readmeUrl,
    contributors,
    myContribution,
    techStack,
    desc,
    remindUrl,
  } = data;

  return (
    <section className="flex flex-col sm:flex-row">
      <SlideCarousel slides={images} />
      <div className="sm:w-1/2 flex flex-col justify-between">
        <div className="w-full space-y-1.5">
          {badges.map((badge, index) => (
            <CommonBadge
              key={index}
              className="inline-block text-[13px]"
            >
              {badge}
            </CommonBadge>
          ))}
          <div className="pb-2">
            <h2 className="font-semibold text-[28px] leading-normal">{title}</h2>
            <p className="font-normal text-[13px] text-primary">{period}</p>
            <p className="font-normal  text-[13px] text-primary">{contributors}</p>
          </div>
          {siteUrl ? (
            <LinkText link={siteUrl}>
              <LinkIcon />
              <span>{siteUrl}</span>
            </LinkText>
          ) : (
            <p className="text-primary flex flex-row gap-2 text-sm">
              <LinkIcon />
              서버 기간 만료로 주소가 제공되지 않으나, README에서 기능을 확인 가능합니다.
            </p>
          )}

          <LinkText link={readmeUrl}>
            <ReadmeIcon /> <span>README</span>
          </LinkText>
          {myContribution && (
            <p className="text-sm text-primary">
              기여도 : <span className="text-darkgray">{myContribution}</span>
            </p>
          )}
          <div className="space-x-1.5 space-y-1.5 pt-3">
            {techStack.map((badge, index) => {
              const { bg, text } = badgeColorMap[badge] || { bg: '#8f95ac', text: '#e8eaf2' };
              return (
                <CommonBadge
                  key={index}
                  bgColor={bg}
                  textColor={text}
                  className="inline-block text-[13px]"
                >
                  {badge}
                </CommonBadge>
              );
            })}
          </div>
          <div className="text-sm py-4">{desc}</div>
        </div>
        {remindUrl && (
          <a
            href={remindUrl}
            target="_blank"
            className="w-full inline-block bg-[#89b6dd] text-sm text-white text-center 
          rounded-xl py-2 self-center 
          hover:opacity-80 duration-300 cursor-pointer my-4"
          >
            프로젝트 회고
            <NoteIcon className="inline-block ml-1 text-white w-4.5" />
            <ChevronUpIcon className="inline-block ml-1 transform rotate-90 text-white" />
          </a>
        )}
      </div>
    </section>
  );
}
