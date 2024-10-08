import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const Header = ({ downloadLogo }) => {
  return (
    <div className="p-4 shadow-sm border flex justify-between">
      <img src="/logo.svg" alt="" />
      <Button
        className="flex gap-2 items-center"
        onClick={() => downloadLogo()}
      >
        <Download className="h-4 w-4" />
        Download
      </Button>
    </div>
  );
};

export default Header;
