/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import cases from "@/app/lib/apis/data/mockCases";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

function page() {
  const user = useSelector((state: RootState) => state.user);
  const activeCases = useMemo(() => {
    return cases.filter(
      (caseItem) =>
        caseItem.assignedAttorneyId === user.id && caseItem.status === "Active"
    );
  }, [cases, user.id]);

  const closedCases = useMemo(() => {
    return cases.filter(
      (caseItem) =>
        caseItem.assignedAttorneyId === user.id && caseItem.status === "Closed"
    );
  }, [cases, user.id]);

  const pendingCases = useMemo(() => {
    return cases.filter(
      (caseItem) =>
        caseItem.assignedAttorneyId === user.id && caseItem.status === "Pending"
    );
  }, [cases, user.id]);

  return (
    <div>
      <div className=" w-3.0/10 bg-green-200 rounded-3xl flex-col p-5 mb-5">
        <p className="font-bold text-lg">Active Cases</p>
        <p className="text-4xl font-bold mb-4">{activeCases.length}</p>
      </div>
      <div className=" w-3.0/10 bg-yellow-200 rounded-3xl flex-col p-5 mb-5">
        <p className="font-bold text-lg">Pending Cases</p>
        <p className="text-4xl font-bold mb-4">{pendingCases.length}</p>
      </div>
      <div className=" w-3.0/10 bg-red-200 rounded-3xl flex-col p-5 mb-5">
        <p className="font-bold text-lg">Closed Cases</p>
        <p className="text-4xl font-bold mb-4">{closedCases.length}</p>
      </div>
    </div>
  );
}

export default page;
