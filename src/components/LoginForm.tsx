import { signIn } from "next-auth/react";
import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
        Login
      </h1>

      <form
        className="mt-6 grid place-items-center gap-4"
        onSubmit={async (e) => {
          e.preventDefault();
          await signIn("credentials", {
            username,
            password,
          });
        }}
      >
        <div className="grid grid-cols-2 gap-x-3">
          <label
            className="block text-center text-lg text-gray-700 underline"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-x-3">
          <label
            className="block text-center text-lg text-gray-700 underline"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="mt-4 rounded-md border-gray-700 bg-gray-700 px-4 py-2 text-white shadow-md hover:bg-gray-600"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
