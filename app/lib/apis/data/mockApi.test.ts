import {
  fetchMockUsers,
  fetchMockUser,
  fetchMockCases,
  fetchMockReports,
} from "../hooks/requests";
import users from "../data/mockUsers";
import cases from "../data/mockCases";
import reports from "../data/mockReports";

jest.useFakeTimers();

describe("Mock API Functions", () => {
  test("fetchMockUsers returns all users", async () => {
    const promise = fetchMockUsers();
    jest.runAllTimers();
    await expect(promise).resolves.toEqual(users);
  });

  test("fetchMockUser returns a user by ID", async () => {
    const userId = users[0].id;
    const promise = fetchMockUser(userId);
    jest.runAllTimers();
    await expect(promise).resolves.toEqual(
      users.find((user) => user.id === userId)
    );
  });

  test("fetchMockUser returns undefined for a non-existent user ID", async () => {
    const promise = fetchMockUser(999);
    jest.runAllTimers();
    await expect(promise).resolves.toBeUndefined();
  });

  test("fetchMockCases returns all cases", async () => {
    const promise = fetchMockCases();
    jest.runAllTimers();
    await expect(promise).resolves.toEqual(cases);
  });

  test("fetchMockReports returns all reports", async () => {
    const promise = fetchMockReports();
    jest.runAllTimers();
    await expect(promise).resolves.toEqual(reports);
  });
});
