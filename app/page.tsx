/* eslint-disable react-hooks/exhaustive-deps */

"use client";

import { useEffect } from "react";
import LoginForm from "./components/LoginForm";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { useRouter } from "next/navigation";

export default function Home() {
  const user = useSelector((state: RootState) => state.user);

  const router = useRouter();

  useEffect(() => {
    if (user.id !== null) {
      if (user.role === "Admin") {
        router.push("/admin-dashboard");
      } else {
        router.push("/standard-dashboard");
      }
    }
  }, [user.id, router]);

  return <>{user.id !== null ? null : <LoginForm />};</>;
}
