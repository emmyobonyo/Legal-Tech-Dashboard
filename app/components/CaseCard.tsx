import React from "react";

function CaseCard({
  title,
  description,
  status,
  caseId,
}: {
  title: string;
  description: string;
  status: string;
  caseId: number;
}) {
  return (
    <a
      href="#"
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mb-2 w-4/10 mr-5 mb-5"
    >
      <p className="text-sm text-gray-400">Case ID: {caseId}</p>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400 mb-5">
        {description}
      </p>
      <span
        className={`
      text-white font-bold px-2 py-1 rounded-full
      ${status === "Active" ? "bg-green-500" : ""}
      ${status === "Closed" ? "bg-red-500" : ""}
      ${status === "Pending" ? "bg-yellow-500" : ""}
    `}
      >
        {status}
      </span>
    </a>
  );
}

export default CaseCard;
