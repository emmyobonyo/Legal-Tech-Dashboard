"use client";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import { fetchUsers } from "../store/reducers/usersSlice";

function Users() {
  const { users, loading, error } = useSelector(
    (state: RootState) => state.users
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const firstTenUsers = users.slice(0, 10).map((user) => <p>{user.name}</p>);

  if (loading) return <p>Fetching Users ...</p>;
  if (error) return <p>Failed to Fetch Users</p>;
  return <div>{firstTenUsers}</div>;
}

export default Users;
