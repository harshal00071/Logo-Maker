import React, { useEffect, useState } from "react";
import { icons } from "lucide-react";
import { Smile } from "lucide-react";
import axios from "axios";

const BASE_URL = "https://logoexpress.tubeguruji.com";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { iconList } from "@/constants/icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Icon = ({ name, size, color }) => {
  const LucidIcon = icons[name];
  if (!LucidIcon) return;
  else {
    return <LucidIcon name={name} size={size} color={color} />;
  }
};

const IconList = ({ curricon, setcurricon }) => {
  const [openDialog, setopenDialog] = useState(false);
  const [pngIconList, setpngIconList] = useState([]);

  useEffect(() => {
    getPngIcons();
  }, []);

  const getPngIcons = () => {
    axios.get(BASE_URL + "/getIcons.php").then((res) => {
      setpngIconList(res.data);
    });
  };
  return (
    <div>
      <div>
        <label>Icon</label>
        <div
          onClick={() => {
            setopenDialog(true);
          }}
          className="p-3 cursor-poiner flex  bg-gray-200 rounded-md w-[50px] h-[50px] items-center justify-center"
        >
          {curricon?.includes(".png") ? (
            <img src={BASE_URL + "/png/" + curricon} />
          ) : (
            <Icon name={curricon} size={20} color={"#000"} />
          )}
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setopenDialog}>
        <DialogTrigger></DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pick your Favourite icon</DialogTitle>
            <DialogDescription>
              <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="icon">Icons</TabsTrigger>
                  <TabsTrigger value="color-icon">Color Icons</TabsTrigger>
                </TabsList>
                <TabsContent value="icon">
                  {" "}
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                    {iconList.map((icon, index) => (
                      <div
                        className="border p-3 flex rounded-sm items-center justify-center cursor-pointer"
                        onClick={() => setcurricon(icon)}
                      >
                        <Icon name={icon} color={"#000"} size={20} />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="color-icon">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                    {pngIconList.map((icon, index) => (
                      <div
                        className="border p-3 flex rounded-sm items-center justify-center cursor-pointer"
                        onClick={() => setcurricon(icon)}
                      >
                        <img src={BASE_URL + "/png/" + icon} />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IconList;
