"use client";
import { useEffect } from "react";
import { RootState } from "./store/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchMockUser } from "./lib/apis/hooks/requests";
import { setUser } from "./store/reducers/userSlice";
import LoginForm from "./components/LoginForm";

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
  return <LoginForm />;
}
