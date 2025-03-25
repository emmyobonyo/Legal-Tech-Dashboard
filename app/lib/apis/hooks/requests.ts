import users from "../data/mockUsers";
import cases from "../data/mockCases";
import reports from "../data/mockReports";
import { Case } from "@/app/types/case";
import { UserState } from "@/app/types/user";
import { ReportType } from "@/app/types/report";

export const fetchMockUsers = async (): Promise<UserState[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });
};

export const fetchMockUser = async (id: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users.find((user) => user.id === id));
    }, 1000);
  });
};

export const fetchMockCases = async (): Promise<Case[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cases);
    }, 1000);
  });
};

export const fetchMockReports = async (): Promise<ReportType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(reports);
    }, 1000);
  });
};
