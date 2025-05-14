import { navigationTabs } from '@/data/initials';
import React, { useEffect, useState } from 'react';

export default function GlobalNavBar() {
  const [activeId, setActiveId] = useState('info');

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 100,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    navigationTabs.forEach((tab) => {
      const el = document.getElementById(tab.targetId);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-[280px] h-screen flex items-center justify-end pr-[64px]">
      <ul className="space-y-7">
        {navigationTabs.map((tab) => {
          const isActive = activeId === tab.targetId;
          return (
            <li
              key={tab.targetId}
              className="group flex items-center cursor-pointer"
              onClick={() => scrollToId(tab.targetId)}
            >
              <div
                className={`p-2 rounded-[10px] transition-all duration-200 ${
                  isActive ? 'bg-secondary' : 'group-hover:bg-secondary/80'
                }`}
              >
                <tab.icon />
              </div>
              <p className="text-darkgray pl-[10px]">{tab.label}</p>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
