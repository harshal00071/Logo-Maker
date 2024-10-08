import React, { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import ColorPickerController from "./ColorPickerController";

const BackgroundController = ({ setrefresh }) => {
  const storageValue = JSON.parse(localStorage.getItem("value"));

  const [rounded, setrounded] = useState(storageValue?.bgRounded || 10);
  const [padding, setpadding] = useState(storageValue?.bgPadding || 10);
  const [color, setcolor] = useState(storageValue?.bgColor || "#000");

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };

    localStorage.setItem("value", JSON.stringify(updatedValue));
    setrefresh((prev) => !prev);
  }, [padding, rounded, color]);
  return (
    <div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Rounded :<span>{rounded} px</span>
        </label>
        <Slider
          defaultValue={[rounded]}
          max={50}
          step={1}
          onValueChange={(e) => {
            setrounded(e[0]);
          }}
        />
      </div>

      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Padding :<span>{padding} px</span>
        </label>
        <Slider
          defaultValue={[padding]}
          max={100}
          step={1}
          onValueChange={(e) => {
            setpadding(e[0]);
          }}
        />
      </div>

      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Icon Color
        </label>
        <ColorPickerController
          hideController={false}
          setcolor={setcolor}
          color={color}
        />
      </div>
    </div>
  );
};

export default BackgroundController;
