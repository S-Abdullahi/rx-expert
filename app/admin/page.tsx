"use client";
import Link from "next/link";
import FormRow from "../components/FormRow";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";
import { useCreateUser, useLoginUser } from "../queries";

export interface IUser {
  username: string;
  email: string;
  password: string;
}

export default function Admin() {
  const { createUser, data } = useCreateUser();
  const { loginUser, loginData } = useLoginUser();
  const [isError, setIsError] = useState(false);
  const [islogin, setIsLogin] = useState(true);
  const [form, setForm] = useState<IUser>({
    username: "",
    email: "",
    password: "",
  });

  console.log("data after creating", data);
  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // const createUser = async (user: IUser) => {
  //   console.log("test");
  //   try {
  //     const res = await axios.post(
  //       "https://rxpert-api.up.railway.app/api/user/register",
  //       user,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { username, password, email } = form;

    if (!email || !password || (!islogin && !username)) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 5000);
      return;
    }
    if (islogin) {
      loginUser({ email, password });
      return;
    }
    createUser({ username, email, password });

    console.log(form);
  };
  return (
    <div>
      <Header title="Admin Login" label="admin" />
      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-gray-100 px-4 py-8 rounded w-full max-w-[400px] flex flex-col gap-4"
        >
          <p className="">Login Form</p>
          <p className="text-sm text-red-500">
            {isError && "Enter all fields"}
          </p>

          {!islogin && (
            <FormRow
              placeholder="username"
              onChange={handleChange}
              name="username"
              value={form.username}
              className={isError && "border-red-500"}
            />
          )}

          <FormRow
            placeholder="email"
            onChange={handleChange}
            name="email"
            value={form.email}
            className={isError && "border-red-500"}
          />

          <FormRow
            placeholder="password"
            onChange={handleChange}
            name="password"
            value={form.password}
            className={isError && "border-red-500"}
          />

          <div>
            <p
              className="underline text-[10px] text-gray-600"
              onClick={() => setIsLogin(!islogin)}
            >
              {islogin ? "create new user" : "login existing user"}
            </p>
            <button
              type="submit"
              className="bg-[#0F468E] rounded-full text-white px-6 py-2"
            >
              login
              {/* <Link href="/admin/portal">Login</Link> */}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
