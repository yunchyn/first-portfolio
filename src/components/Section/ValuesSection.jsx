import React from 'react';

import { CommonCard, SectionHeading, SubHeading } from '../ui/CommonLayouts';

export default function ValuesSection() {
  return (
    <section
      id="values"
      className="h-screen "
    >
      <SectionHeading>아래와 같은 요소들을 중심 가치로 삼고 있습니다.</SectionHeading>
      <CommonCard></CommonCard>
      <SubHeading>
        재사용 가능한 아토믹 디자인으로 <br />
        웹을 개발하는 것을
        <br />
        중점 가치로 두고 있습니다.
      </SubHeading>
    </section>
  );
}
