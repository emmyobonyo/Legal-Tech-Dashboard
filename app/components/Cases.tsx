"use client";

import { useState } from "react";
import { fetchMockCases } from "../lib/apis/hooks/requests";
import { Case } from "../types/case";

function Cases() {
  const [cases, setCases] = useState<Case[]>([]);

  const fetchCases = async () => {
    const response = await fetchCases();
    console.log(response);
  };

  fetchCases();

  return <div>Cases</div>;
}

export default Cases;
