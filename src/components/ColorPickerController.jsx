import React, { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";
const ColorPickerController = ({ hideController = false, color, setcolor }) => {
  return (
    <div className="flex items-center justify-center">
      <ColorPicker
        value={color}
        onChange={(e) => {
          setcolor(e);
        }}
        hideControls={hideController}
        hideEyeDrop
        hideAdvancedSliders
        hideColorGuide
        hideInputType
        className="rounded-[7px]"
      />
    </div>
  );
};

export default ColorPickerController;
