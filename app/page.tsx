"use client";
import { useEffect } from "react";
import { RootState } from "./store/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchMockUser } from "./lib/apis/hooks/requests";
import { setUser } from "./store/reducers/userSlice";

export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const fetchUser = async () => {
    const response = await fetchMockUser(1);
    console.log(response);
    dispatch(setUser(response));
  };

  useEffect(() => {
    fetchUser();
  }, [dispatch]);

  useEffect(() => {}, []);
  return (
    <div>
      <h1>Counter: {user.name}</h1>
    </div>
  );
}
