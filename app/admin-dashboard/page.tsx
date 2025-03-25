"use client";

import Cases from "../components/Cases";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function page() {
  const data = useSelector((state: RootState) => state.data);

  const renderComponent = () => {
    if (data.value === "cases") {
      return <Cases />;
    }
  };
  return <div className="w-8/10">{renderComponent()}</div>;
}

export default page;
