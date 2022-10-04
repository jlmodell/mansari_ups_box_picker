import { useState } from "react";

export interface Box {
  location: string;
  length: number;
  width: number;
  height: number;
  type: string;
}

export const BOXES: Box[] = [
  { location: "31", length: 4, width: 4, height: 48, type: "" },
  { location: "TR", length: 4, width: 4, height: 60, type: "Umbrella" },
  { location: "1", length: 6, width: 6, height: 6, type: "6 Cube" },
  { location: "TR", length: 6, width: 6, height: 48, type: "" },
  { location: "2", length: 8, width: 8, height: 8, type: "8 Cube" },
  { location: "TR", length: 8, width: 8, height: 48, type: "" },
  { location: "UFC", length: 9, width: 7, height: 3, type: "Tuck" },
  { location: "5", length: 10, width: 8, height: 6, type: "24 F" },
  { location: "3", length: 10, width: 10, height: 10, type: "10 Cube" },
  { location: "TR", length: 10, width: 10, height: 48, type: "Golf Bag" },
  { location: "UFC", length: 12, width: 9, height: 3, type: "Tuck" },
  { location: "UFC", length: 12, width: 10, height: 3, type: "" },
  { location: "8", length: 12, width: 10, height: 10, type: "32 G" },
  { location: "6", length: 12, width: 12, height: 6, type: "" },
  { location: "4", length: 12, width: 12, height: 12, type: "12 Cube" },
  { location: "TR", length: 12, width: 12, height: 40, type: "Lamp" },
  { location: "9", length: 14, width: 12, height: 8, type: "34 G" },
  { location: "27", length: 14, width: 14, height: 14, type: "14 Cube" },
  { location: "12", length: 15, width: 12, height: 10, type: "" },
  { location: "TR", length: 15, width: 15, height: 48, type: "Golf Bag" },
  { location: "7", length: 16, width: 8, height: 8, type: "" },
  { location: "10", length: 16, width: 12, height: 10, type: "38 G" },
  { location: "11", length: 16, width: 14, height: 10, type: "40 G" },
  { location: "12", length: 16, width: 16, height: 4, type: "" },
  { location: "12", length: 16, width: 16, height: 4, type: "IVOX Lap" },
  { location: "27", length: 16, width: 16, height: 16, type: "16 Cube" },
  { location: "12", length: 17, width: 11, height: 8, type: "" },
  { location: "26", length: 17, width: 17, height: 8, type: "Laptop" },
  { location: "21", length: 18, width: 14, height: 10, type: "42 G" },
  { location: "21", length: 18, width: 14, height: 12, type: "44 G" },
  { location: "21", length: 18, width: 16, height: 14, type: "48 G" },
  { location: "27", length: 18, width: 18, height: 18, type: "18 Cube" },
  { location: "15", length: 20, width: 12, height: 12, type: "" },
  { location: "21", length: 20, width: 16, height: 16, type: "52 G" },
  { location: "20", length: 20, width: 20, height: 12, type: "" },
  { location: "28", length: 20, width: 20, height: 20, type: "20 Cube" },
  { location: "32", length: 20, width: 20, height: 36, type: "" },
  { location: "21", length: 22, width: 18, height: 16, type: "56 G" },
  { location: "11", length: 24, width: 12, height: 12, type: "" },
  { location: "12", length: 24, width: 18, height: 18, type: "" },
  { location: "13", length: 24, width: 24, height: 16, type: "" },
  { location: "14", length: 24, width: 24, height: 24, type: "24 Cube" },
  { location: "15", length: 24, width: 24, height: 36, type: "" },
  { location: "16", length: 30, width: 24, height: 24, type: "78" },
  { location: "17", length: 30, width: 30, height: 30, type: "" },
  { location: "18", length: 50, width: 10, height: 20, type: "Guitar" },
  { location: "19", length: 24, width: 6, height: 18, type: "XSmall-Pic" },
  { location: "20", length: 30, width: 6, height: 24, type: "Small-Pic" },
  { location: "21", length: 36, width: 8, height: 30, type: "Med-Pic" },
  { location: "23", length: 53, width: 7, height: 30, type: "Bike/TV" },
  { location: "32", length: 45, width: 8, height: 32, type: "LG-Pic" },
];

export default function BoxSelector() {
  const [box, setBox] = useState<number>();

  return (
    <div className="boxes">
      <select
        name="box"
        id="box"
        value={box}
        onChange={(e) => {
          const { value } = e.target;
          setBox(parseInt(value));
        }}
      >
        {BOXES.map((box, idx) => (
          <option key={idx} value={idx}>
            {box.location} - {box.type} - {box.length} x {box.width} x{" "}
            {box.height}
          </option>
        ))}
      </select>
    </div>
  );
}
