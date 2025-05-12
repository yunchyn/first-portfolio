import React from 'react';
import { CommonCard, SectionHeading, SubHeading } from '../ui/CommonLayouts';
import { skillsList } from '@/data/initials';

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center"
    >
      <SectionHeading>다음과 같은 기술을 사용합니다.</SectionHeading>
      <div className="w-full grid grid-cols-3 gap-x-5 gap-y-[90px]">
        {skillsList.map((group) => (
          <div
            className="flex flex-col"
            key={group.title}
          >
            <SubHeading className="text-center pb-2.5">{group.title}</SubHeading>
            <CommonCard className="aspect-square bg-secondary p-3">
              <div className="w-full grid grid-cols-3 gap-2.5">
                {group.items.map((tech) => (
                  <div
                    className="flex flex-col"
                    key={tech.label}
                  >
                    <CommonCard className="aspect-square bg-white flex justify-center items-center">
                      <img
                        src={tech.src}
                        alt={tech.label}
                        className="w-12 h-12 rounded-lg"
                      />
                    </CommonCard>
                  </div>
                ))}
              </div>
            </CommonCard>
            <p className="text-darkgray text-sm pt-5">{group.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
