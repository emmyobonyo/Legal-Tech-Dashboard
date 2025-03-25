"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReports } from "../store/reducers/reportsSlice";
import { RootState, AppDispatch } from "../store/store";
import ReportsCard from "./ReportsCard";

function Reports() {
  const { reports, loading, error } = useSelector(
    (state: RootState) => state.reports
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchReports());
  }, [dispatch]);

  const firstTenReports = reports
    .slice(0, 10)
    .map((report) => (
      <ReportsCard
        reportName={report.reportName}
        format={report.format}
        updatedAt={report.updatedAt}
      />
    ));

  if (loading) return <p>Fetching Users ...</p>;
  if (error) return <p>Failed to Fetch Users</p>;
  return <div>{firstTenReports}</div>;
}

export default Reports;
