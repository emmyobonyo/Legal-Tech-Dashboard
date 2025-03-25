import users from "../data/mockUsers";
import cases from "../data/mockCases";

export const fetchMockUsers = async () => {
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

export const fetchMockCases = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(cases);
    }, 1000);
  });
};
