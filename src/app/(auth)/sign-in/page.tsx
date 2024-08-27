"use client";

import { Login } from "@kanvas/phoenix-rebirth/dist/views/login.mjs";
import { app } from "@/kanvas/init";
import { toast } from "sonner";

export default function SignIn() {
  const login = async (value: {
    email: string;
    password: string;
    remember: boolean;
  }) => {
    await app.auth.login(value.email, value.password);
  };

  return (
    <Login
      image={{
        src: "/images/login-bg.jpg",
      }}
      onLogin={login}
      onError={(e) => {
        toast.error(e.message, {
          cancel: true,
          dismissible: true,
        });
      }}
    />
  );
}
