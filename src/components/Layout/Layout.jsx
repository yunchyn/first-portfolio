import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import GlobalNavBar from '../ui/GlobalNavBar';
import Header from './Header';

export default function Layout() {
  const scrollContainerRef = useRef(null);

  return (
    <div className="w-screen h-screen max-w-[1280px] mx-auto relative">
      <GlobalNavBar scrollContainerRef={scrollContainerRef} />
      <div className="max-w-[1080px] pl-[280px] h-full">
        <Header />
        <main ref={scrollContainerRef}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
