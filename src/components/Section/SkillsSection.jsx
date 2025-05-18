import React from 'react';
import { CommonCard, CommonSection, SectionHeading, SubHeading } from '../ui/CommonLayouts';
import { skillsList } from '@/data/initials';

export default function SkillsSection() {
  return (
    <CommonSection id="skills">
      <SectionHeading>다음과 같은 기술을 사용합니다.</SectionHeading>
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-14 sm:gap-y-[90px]">
        {skillsList.map((group) => (
          <div
            className="flex flex-col"
            key={group.title}
          >
            <div
              className="h-[66px] md:h-auto
             flex items-center justify-center"
            >
              <SubHeading className="text-center pb-2.5">{group.title}</SubHeading>
            </div>
            <CommonCard className="aspect-square bg-secondary p-3 sm:p-4">
              <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
                {group.items.map((tech) => (
                  <div
                    className="flex flex-col"
                    key={tech.label}
                  >
                    <CommonCard className="relative group aspect-square bg-white flex justify-center items-center overflow-hidden">
                      <img
                        src={tech.src}
                        alt={tech.label}
                        className="w-15 h-15 rounded-lg p-1.5"
                      />
                      <div
                        className="absolute w-full h-full flex justify-center items-center z-5 bg-white/50 backdrop-blur-xs
                        opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      >
                        <span
                          className={`text-center font-bold text-darkgray ${
                            tech.label.length > 12 ? 'text-xs' : 'text-sm'
                          }`}
                        >
                          {tech.label}
                        </span>
                      </div>
                    </CommonCard>
                  </div>
                ))}
              </div>
            </CommonCard>
            <p className="text-darkgray text-sm pt-5">{group.desc}</p>
          </div>
        ))}
      </div>
    </CommonSection>
  );
}
