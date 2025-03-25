"use client";
import React, { useEffect } from "react";
import sideNavigationLinks from "../lib/apis/data/sideBarLinks";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { setData } from "../store/reducers/dataSlice";
import { useRouter } from "next/navigation";

function SideNavigation() {
  const user = useSelector((state: RootState) => state.user);
  const data = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();
  const router = useRouter();

  const updateFetchedData = (newState: string) => {
    dispatch(setData(newState));
  };

  useEffect(() => {
    router.push(`/admin-dashboard/${data.value.toLowerCase()}`);
  }, [data.value, router]);

  const role = user.role as keyof typeof sideNavigationLinks;

  const links = sideNavigationLinks[role]?.map((link) => (
    <div
      key={link}
      className="p-3 bg-gray-900 font-bold text-white text-center hover:bg-gray-700 mb-1 rounded-md cursor-pointer"
      onClick={() => updateFetchedData(link)}
    >
      {link}
    </div>
  ));

  console.log(data);

  return <div className="p-4 border rounded-xl border-gray-300">{links}</div>;
}

export default SideNavigation;
