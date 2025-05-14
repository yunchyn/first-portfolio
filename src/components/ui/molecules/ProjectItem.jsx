import React from 'react';
import { CommonBadge, CommonCard, LinkText } from '../CommonLayouts';
import LinkIcon from '../icon/LinkIcon';
import ReadmeIcon from '../icon/ReadmeIcon';
import { badgeColorMap } from '@/data/initials';
import SlideCarousel from './SlideCarousel';

export default function ProjectItem({ data }) {
  const { title, badges, images, period, siteUrl, readmeUrl, contributors, techStack, desc } = data;

  return (
    <section className="flex flex-row">
      <SlideCarousel slides={images} />
      {/* <CommonCard className="w-1/2 h-1/2 max-w-[500px] aspect-square mr-8"></CommonCard> */}
      <div className="w-1/2 space-y-1.5">
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
            서버 기간 만료로 주소가 제공되지 않으나, README에서 화면을 확인 가능합니다.
          </p>
        )}

        <LinkText link={readmeUrl}>
          <ReadmeIcon /> <span>README</span>
        </LinkText>
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
        <p className="text-sm pt-4">{desc}</p>
      </div>
    </section>
  );
}
