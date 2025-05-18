import React from 'react';
import LinkButton from '../atoms/LinkButton';

export default function BlogCard({ image, title, link }) {
  return (
    <div className="rounded-[10px] sm:w-full md:w-1/3 border-2 border-secondary">
      <div className="p-3 flex flex-col h-full justify-between">
        <img
          src={image}
          alt={title}
          className="w-full aspect-[4/3] object-cover rounded-[10px]"
        />
        <div className="pt-3 flex flex-col h-full justify-between flex-grow">
          <h3 className="font-semibold text-darkgray text-sm mb-2">{title}</h3>
          <div className="flex justify-end mt-auto">
            <LinkButton
              link={link}
              className="bg-secondary hover:bg-secondary-light text-primary text-[13px] py-[5px] px-[11px] inline-block"
            >
              바로가기
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
