import { signIn } from "next-auth/react";
import { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      className="flex flex-col space-y-10"
      onSubmit={async (e) => {
        e.preventDefault();
        await signIn("credentials", {
          username,
          password,
        });
      }}
    >
      <div className="flex space-x-2">
        <label className="flex flex-col space-y-10" htmlFor="username">
          Username
        </label>
        <input
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex space-x-2">
        <label className="flex flex-col space-y-10" htmlFor="password">
          Password
        </label>
        <input
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
