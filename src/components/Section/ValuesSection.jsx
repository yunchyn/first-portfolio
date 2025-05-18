import React from 'react';

import { CommonCard, CommonSection, SectionHeading, SubHeading } from '../ui/CommonLayouts';
import { values } from '@/data/initials';

export default function ValuesSection() {
  return (
    <CommonSection id="values">
      <SectionHeading>아래와 같은 요소들을 중심 가치로 삼고 있습니다.</SectionHeading>
      <div className="space-y-6">
        {values.map((item, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <CommonCard className="w-full md:w-2/5 h-50 ">
              <img
                src={item.img}
                alt="이미지 설명"
                className="w-full h-full object-contain mx-auto"
              />
            </CommonCard>
            <div className="w-full md:w-3/5">
              <SubHeading className="leading-6">{item.title}</SubHeading>
              <p className="text-gray text-sm pt-2">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </CommonSection>
  );
}
