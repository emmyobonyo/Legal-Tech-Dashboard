"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export function AttorneyInformation() {
  const user = useSelector((state: RootState) => state.user);
  console.log(user);
  if (!user) return <p>Loading...</p>;

  return (
    <div className="relative flex items-center justify-between group">
      <div className="flex items-center rounded-l-full rounded-r-full border border-gray-300 p-1 hover:bg-gray-100 cursor-pointer">
        <Image src={user.profile_picture} alt="Doctor" width={50} height={50} />
        <div className="flex flex-col ml-2 mr-5">
          <p className="font-bold text-sm">{user.name}</p>
          <p className="text-gray-400 text-sm">{user.rank}</p>
        </div>
      </div>
      {/* Dropdown */}
      <div className="absolute top-full left-1/10 hidden w-48 bg-white shadow-lg rounded-md group-hover:block mt-3 ">
        <ul>
          <li className="px-4 py-2 hover:bg-gray-100">Logout</li>
        </ul>
      </div>
    </div>
  );
}
