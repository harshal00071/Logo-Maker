import { Smile } from "lucide-react";
import { Slider } from "@/components/ui/slider";

import React, { useEffect, useState } from "react";
import ColorPickerController from "./ColorPickerController";
import IconList from "./IconList";

const iconController = ({ setrefresh }) => {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [size, setsize] = useState(storageValue?.iconSize || 280);
  const [rotate, setrotate] = useState(storageValue?.iconRotate || 0);
  const [curricon, setcurricon] = useState(storageValue?.iconName || "Smile");
  const [color, setcolor] = useState(
    storageValue?.iconColor || "rgba(255,255,255,1)"
  );

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      iconName: curricon,
    };
    localStorage.setItem("value", JSON.stringify(updatedValue));
    setrefresh((prev) => !prev);
  }, [color, size, rotate, curricon]);
  return (
    <div>
      <div>
        <label>Icon</label>
        <div className="p-3 cursor-poiner flex  bg-gray-200 rounded-md w-[50px] h-[50px] items-center justify-center">
          <IconList curricon={curricon} setcurricon={setcurricon} />
        </div>
        <div className="py-2">
          <label className="p-2 flex justify-between items-center">
            Size :<span>{size} px</span>
          </label>
          <Slider
            defaultValue={[size]}
            min={25}
            max={512}
            step={1}
            onValueChange={(e) => {
              setsize(e[0]);
            }}
          />
        </div>
        <div className="py-2">
          <label className="p-2 flex justify-between items-center">
            Rotate :<span>{rotate}°</span>
          </label>
          <Slider
            defaultValue={[rotate]}
            max={180}
            step={1}
            onValueChange={(e) => {
              setrotate(e[0]);
            }}
          />
        </div>
        <div className="py-2">
          <label className="p-2 flex justify-between items-center">
            Icon Color
          </label>
          <ColorPickerController
            hideController={true}
            setcolor={setcolor}
            color={color}
          />
        </div>
      </div>
    </div>
  );
};

export default iconController;
