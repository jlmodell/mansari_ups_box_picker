import type { Dispatch, SetStateAction } from "react";

type IncomingBoxOptionsProps = {
  length: number;
  width: number;
  height: number;
  padding: number;
  setLength: Dispatch<SetStateAction<number>>;
  setWidth: Dispatch<SetStateAction<number>>;
  setHeight: Dispatch<SetStateAction<number>>;
  setPadding: Dispatch<SetStateAction<number>>;
  min: {
    length: number;
    width: number;
    height: number;
  };
  max: {
    length: number;
    width: number;
    height: number;
  };
};

const BoxOptions = ({
  length,
  width,
  height,
  padding,
  setLength,
  setWidth,
  setHeight,
  setPadding,
  min,
  max,
}: IncomingBoxOptionsProps) => {
  return (
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
  );
};

export default BoxOptions;
