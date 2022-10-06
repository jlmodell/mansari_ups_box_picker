import type { Dispatch, SetStateAction } from "react";

import BoxVisual from "../components/BoxVisual";

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
        className="block w-full rounded-md border-gray-300 text-xs shadow-sm focus:border-indigo-500 focus:ring-indigo-500 md:text-sm"
        type="number"
        min={min.length}
        max={max.length}
        step={0.5}
        value={length}
        onChange={(e) => {
          setLength(parseFloat(e.target.value));
        }}
      />

      <label
        className="block text-center text-lg text-gray-700 underline"
        htmlFor="width"
      >
        Width
      </label>
      <input
        className="block w-full rounded-md border-gray-300 text-xs shadow-sm focus:border-indigo-500 focus:ring-indigo-500 md:text-sm"
        min={min.width}
        max={max.width}
        step={0.5}
        type="number"
        value={width}
        onChange={(e) => {
          setWidth(parseFloat(e.target.value));
        }}
      />

      <label
        className="block text-center text-lg text-gray-700 underline"
        htmlFor="height"
      >
        Height
      </label>
      <input
        className="block w-full rounded-md border-gray-300 text-xs shadow-sm focus:border-indigo-500 focus:ring-indigo-500 md:text-sm"
        type="number"
        min={min.height}
        max={max.height}
        step={0.5}
        value={height}
        onChange={(e) => {
          setHeight(parseFloat(e.target.value));
        }}
      />

      <label
        className="block text-center text-lg text-gray-700 underline"
        htmlFor="height"
      >
        Padding
      </label>
      <select
        className="block w-full rounded-md border-gray-300 text-xs shadow-sm focus:border-indigo-500 focus:ring-indigo-500 md:text-sm"
        value={padding}
        onChange={(e) => setPadding(parseInt(e.target.value))}
      >
        <option value={1}>Basic (1&quot; padding)</option>
        <option value={2}>Standard (2&quot; padding)</option>
        <option value={4}>Fragile (4&quot; padding)</option>
      </select>

      <div className="col-span-2 my-4 rounded-md bg-indigo-100 p-4 text-lg">
        <p className="text-center text-gray-700">
          <strong>Dimensions:</strong> {length} x {width} x {height}
        </p>
        <div className="grid scale-[80%] place-items-center">
          <BoxVisual width={width} height={height} />
        </div>
      </div>
    </div>
  );
};

export default BoxOptions;
