import React from "react";
import sideNavigationLinks from "../lib/apis/data/sideBarLinks";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { setData } from "../store/reducers/dataSlice";

function SideNavigation() {
  const user = useSelector((state: RootState) => state.user);
  const data = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();

  const updateFetchedData = (newState: string) => {
    dispatch(setData(newState));
  };

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
