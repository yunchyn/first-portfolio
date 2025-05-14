import React, { useRef } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import GlobalNavBar from './GlobalNavBar';

export default function Layout() {
  const scrollContainerRef = useRef(null);

  return (
    <div className="w-full h-screen max-w-[1280px] mx-auto">
      <div className="relative max-w-[1180px] pl-[280px] h-full">
        <Header />
        <GlobalNavBar scrollContainerRef={scrollContainerRef} />
        <main ref={scrollContainerRef}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
