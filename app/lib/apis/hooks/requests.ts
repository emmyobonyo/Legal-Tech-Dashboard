import users from "../data/mockUsers";
import cases from "../data/mockCases";
import { Case } from "@/app/types/case";
import { UserState } from "@/app/types/user";

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
