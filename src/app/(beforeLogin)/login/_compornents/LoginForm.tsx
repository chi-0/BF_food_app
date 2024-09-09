"use client";

import clsx from "clsx";
import { useRouter } from "next/navigation";
import { FormEventHandler, useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { PiLockKeyBold } from "react-icons/pi";

export const LoginForm = () => {
  const [isValid, setIsValid] = useState(true);
  const [isValid2, setIsValid2] = useState(true);
  const router = useRouter();

  const submitHandler: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
  };

  const emailInputAction = clsx(
    "border-solid border-[#000] p-1 mb-2",
    isValid ? "border-b-2" : "border-2 rounded"
  );

  const pwInputAction = clsx(
    "border-solid border-[#000] p-1 mb-2",
    isValid2 ? "border-b-2" : "border-2 rounded"
  );

  const emailDivAction = clsx("flex items-center gap-x-1", isValid && "hidden");
  const pwDivAction = clsx("flex items-center gap-x-1", isValid2 && "hidden");

  const loginFocusHandler = () => setIsValid(false);

  const pwFocusHandler = () => setIsValid2(false);

  const singupHandler = () => router.push("/signup");

  return (
    <form onSubmit={submitHandler}>
      <label className={emailDivAction}>
        <HiOutlineMail />
        <span>email</span>
      </label>
      <div className={emailInputAction}>
        <input
          type="email"
          name="email"
          placeholder={isValid ? "email" : ""}
          className="focus:outline-none"
          onFocus={loginFocusHandler}
        />
      </div>
      <label className={pwDivAction}>
        <PiLockKeyBold />
        <span>password</span>
      </label>
      <div className={pwInputAction}>
        <input
          type="password"
          name="password"
          placeholder={isValid2 ? "pw" : ""}
          className="focus:outline-none"
          onFocus={pwFocusHandler}
        />
      </div>
      <button
        type="submit"
        className="w-full shadow-md p-2 rounded hover:bg-stone-100 mt-3"
      >
        LOGIN
      </button>
      <button
        type="button"
        className="w-full shadow-md p-2 rounded hover:bg-stone-100 mt-3"
        onClick={singupHandler}
      >
        SIGN UP
      </button>
    </form>
  );
};
