import { useState } from "react";
import type { NextPage } from "next";
import clsx from "clsx";
import Head from "next/head";
import { signIn, useSession } from "next-auth/react";
import { Switch } from "@headlessui/react";

import { BOXES } from "../components/boxes";

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
        <label className="font-semibold" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="flex space-x-2">
        <label className="font-semibold" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

const Index: NextPage = () => {
  const { data: session, status } = useSession();

  const [debug, setDebug] = useState(false);

  const [padding, setPadding] = useState(1);

  const [length, setLength] = useState(1);
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [min, _setMin] = useState({
    length: BOXES.map((box) => box.length).sort((a, b) => a - b)[0] || 1,
    width: BOXES.map((box) => box.width).sort((a, b) => a - b)[0] || 1,
    height: BOXES.map((box) => box.height).sort((a, b) => a - b)[0] || 1,
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [max, _setMax] = useState({
    length: BOXES.map((box) => box.length).sort((a, b) => b - a)[0] || 49,
    width: BOXES.map((box) => box.width).sort((a, b) => b - a)[0] || 26,
    height: BOXES.map((box) => box.height).sort((a, b) => b - a)[0] || 44,
  });

  const boxes = BOXES.sort((a, b) => a.length - b.length).filter((box) => {
    return (
      length &&
      box.length >= length + padding &&
      width &&
      box.width >= width + padding &&
      height &&
      box.height >= height + padding
    );
  });

  if (status === "loading") {
    return (
      <>
        <Head>
          <title>Box Picker</title>
          <meta name="description" content="Utility to choose boxes." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
          <div>Loading...</div>
        </main>
      </>
    );
  } else if (status === "unauthenticated" || !session) {
    return (
      <>
        <Head>
          <title>Box Picker</title>
          <meta name="description" content="Utility to choose boxes." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4">
          <LoginForm />
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Box Picker</title>
        <meta name="description" content="Utility to choose boxes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center justify-start p-4">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          Box Picker
        </h1>

        <div className="mt-4 grid grid-cols-2 gap-4">
          <label
            className="block text-center text-lg text-gray-700 underline"
            htmlFor="legnth"
          >
            Length
          </label>
          <input
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            type="number"
            min={min.length}
            max={max.length}
            step={1}
            value={length}
            onChange={(e) => {
              setLength(parseInt(e.target.value));
            }}
          />

          <label
            className="block text-center text-lg text-gray-700 underline"
            htmlFor="width"
          >
            Width
          </label>
          <input
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            min={min.width}
            max={max.width}
            step={1}
            type="number"
            value={width}
            onChange={(e) => {
              setWidth(parseInt(e.target.value));
            }}
          />

          <label
            className="block text-center text-lg text-gray-700 underline"
            htmlFor="height"
          >
            Height
          </label>
          <input
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            type="number"
            min={min.height}
            max={max.height}
            step={1}
            value={height}
            onChange={(e) => {
              setHeight(parseInt(e.target.value));
            }}
          />

          <label
            className="block text-center text-lg text-gray-700 underline"
            htmlFor="height"
          >
            Padding
          </label>
          <select
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            value={padding}
            onChange={(e) => setPadding(parseInt(e.target.value))}
          >
            <option value={1}>Basic (1&quot; padding)</option>
            <option value={2}>Standard (2&quot; padding)</option>
            <option value={4}>Fragile (4&quot; padding)</option>
          </select>
        </div>

        {/* debug */}
        <div className="absolute top-2 left-2">
          <Switch
            checked={debug}
            onChange={setDebug}
            className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <span className="sr-only">Show form values</span>
            <span
              aria-hidden="true"
              className="pointer-events-none absolute h-full w-full rounded-md bg-white"
            />
            <span
              aria-hidden="true"
              className={clsx(
                debug ? "bg-indigo-600" : "bg-gray-200",
                "pointer-events-none absolute mx-auto h-4 w-9 rounded-full transition-colors duration-200 ease-in-out"
              )}
            />
            <span
              aria-hidden="true"
              className={clsx(
                debug ? "translate-x-5" : "translate-x-0",
                "pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out"
              )}
            />
          </Switch>
          {debug && (
            <pre>
              {JSON.stringify({ length, width, height, padding }, null, 2)}
            </pre>
          )}
        </div>

        <div className="md:w-75vw -mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 sm:w-full md:mx-0 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  Location
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Type
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Length
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Width
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Height
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {boxes.map((box, idx) => {
                return (
                  <tr key={idx}>
                    <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                      {box.location}
                    </td>
                    <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                      {box.type}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {box.length}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {box.width}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      {box.height}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default Index;
