"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchCases } from "../store/reducers/casesSlice";
import CaseCard from "./CaseCard";

function Cases() {
  const { cases, loading, error } = useSelector(
    (state: RootState) => state.cases
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCases());
  }, [dispatch]);

  const firstTenCases = cases
    .slice(0, 10)
    .map((caseItem) => (
      <CaseCard
        key={caseItem.caseId}
        title={caseItem.title}
        description={caseItem.description}
        status={caseItem.status}
        caseId={caseItem.caseId}
      />
    ));

  if (loading) return <p>Fetching Cases ...</p>;
  if (error) return <p>Failed to Fetch Cases</p>;
  return <div className="flex flex-wrap">{firstTenCases}</div>;
}

export default Cases;
