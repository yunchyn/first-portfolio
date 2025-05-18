import React from 'react';

import { blogContents } from '@/data/initials';

import { CommonSection } from '../ui/CommonLayouts';
import ProfileArea from '../ui/molecules/ProfileArea';
import BlogCard from '../ui/molecules/BlogCard';

export default function InfoSection() {
  return (
    <CommonSection
      id="info"
      className="pt-[260px]"
    >
      <ProfileArea />
      <section className="flex flex-col gap-4 pt-8">
        <h2 className="text-darkgray font-semibold text-lg">블로그 살펴보기</h2>
        <div className="flex flex-col md:flex-row justify-between gap-5">
          {blogContents.map((item, index) => (
            <BlogCard
              key={index}
              image={item.image}
              title={item.title}
              link={item.link}
            />
          ))}
        </div>
      </section>
    </CommonSection>
  );
}
