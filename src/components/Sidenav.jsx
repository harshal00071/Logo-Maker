import { Image, PencilRuler, Shield } from "lucide-react";
import React, { useState } from "react";

const Sidenav = ({ selectedIndex }) => {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
    },
  ];

  const [activeIndex, setactiveIndex] = useState(0);
  return (
    <div className="border shadow-sm h-screen ">
      <div>
        {menuList.map((menu, i) => (
          <h2
            key={i}
            className={`flex items-center gap-2 my-2 cursor-pointer hover:bg-primary hover:text-white p-2 text-lg px-7 text-gray-500 ${
              activeIndex === i && `bg-primary text-white`
            }`}
            onClick={() => {
              setactiveIndex(i);
              selectedIndex(i);
            }}
          >
            <menu.icon />
            {menu.name.toUpperCase()}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default Sidenav;
