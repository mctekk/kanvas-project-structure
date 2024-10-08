"use client";

import { Login } from "@kanvas/phoenix-rebirth/dist/views/login.mjs";
import { app } from "@/services/kanvas/init";
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
      card={{
        logo: {
          src: "/images/Kanvas_Logo_white.svg",
          className: "bg-transparent",
        },
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
