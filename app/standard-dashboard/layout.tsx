"use client";

import { Navigation } from "../components/Navigation";
import SideNavigation from "../components/SideNavigation";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-9/10 m-auto my-5">
      <Navigation />
      <div className="flex mt-5">
        <div className="w-full flex-none md:w-64">
          <SideNavigation />
        </div>
        <div className="flex-grow px-6 ">{children}</div>
      </div>
    </div>
  );
}
