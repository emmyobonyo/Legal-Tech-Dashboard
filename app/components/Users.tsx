"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchUsers } from "../store/reducers/usersSlice";
import UserCards from "./UserCards";

function Users() {
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const firstTenUsers = users
    .slice(0, 10)
    .map((user) => (
      <UserCards
        key={user.id}
        profile_picture={user.profile_picture}
        name={user.name}
        email={user.email}
        rank={user.rank}
      />
    ));

  if (loading) return <p>Fetching Users ...</p>;
  if (error) return <p>Failed to Fetch Users</p>;
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm ">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900">
          Attorneys
        </h5>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200">
          {firstTenUsers}
        </ul>
      </div>
    </div>
  );
}

export default Users;
