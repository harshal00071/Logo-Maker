import { icons } from "lucide-react";
import React, { useEffect, useState } from "react";

const BASE_URL = "https://logoexpress.tubeguruji.com";

const Icon = ({ name, size, color, rotate }) => {
  const LucidIcon = icons[name];
  if (!LucidIcon) return;
  else {
    return <LucidIcon name={name} size={size} color={color} />;
  }
};
const LogoPreview = ({ refresh, currentLogoRef }) => {
  const [storageValue, setstoragevalue] = useState();
  useEffect(() => {
    const storagedata = JSON.parse(localStorage.getItem("value"));
    setstoragevalue(storagedata);
  }, [refresh]);

  return (
    <div className="flex items-center justify-center h-screen ">
      <div
        className="h-[500px] w-[500px] bg-gray-200 outline-dotted outline-gray-300"
        style={{ padding: storageValue?.bgPadding }}
      >
        <div
          className="h-full w-full flex justify-center items-center"
          ref={(e) => (currentLogoRef.current = e)}
          style={{
            borderRadius: storageValue?.bgRounded + "%",
            background: storageValue?.bgColor,
          }}
        >
          <div
            className="w-full h-full flex justify-center items-center"
            style={{ transform: `rotate(${storageValue?.iconRotate}deg)` }}
          >
            {storageValue?.iconName?.includes(".png") ? (
              <img
                src={"/png/" + storageValue?.iconName}
                style={{
                  width: storageValue?.iconSizeize,
                  height: storageValue?.iconSize,
                }}
              />
            ) : (
              <Icon
                name={storageValue?.iconName}
                size={storageValue?.iconSize}
                color={storageValue?.iconColor}
                rotate={storageValue?.iconRotate}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;
