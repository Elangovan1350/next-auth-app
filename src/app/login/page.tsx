"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("login successfully", response.data);
      toast.success("login successfully");

      router.push("/profile");
    } catch (error: any) {
      console.log("login faild", error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-xl capitalize font-medium py-2">
      <h1 className="text-4xl font-bold mb-5">
        {loading ? "prossesing...." : "login"}
      </h1>
      <hr />

      <label htmlFor="email">email</label>
      <input
        className=" px-2 py-1 mb-4 rounded-md border border-gray-400 focus:outline-none focus:border-gray-600"
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />

      <label htmlFor="password">password</label>
      <input
        className=" px-2 py-1 mb-4 rounded-md border border-gray-400 focus:outline-none focus:border-gray-600"
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button onClick={onLogin} className="px-6 py-2 bg-slate-400 rounded-md">
        {buttonDisabled ? "not yet" : "login"}
      </button>
      <Link href={"/signup"}>signup page</Link>
      <Toaster />
    </div>
  );
}
