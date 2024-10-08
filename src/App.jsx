import { useEffect, useRef, useState } from "react";

import "./App.css";
import { Button } from "./components/ui/button";
import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import IconController from "./components/IconController";
import BackgroundController from "./components/BackgroundController";
import LogoPreview from "./components/LogoPreview";
import html2canvas from "html2canvas";
function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => console.log(selectedIndex), [selectedIndex]);
  const [refresh, setrefresh] = useState(false);
  const currentLogoRef = useRef(null);

  const downloadLogo = () => {
    console.log("function called");
    if (currentLogoRef.current === null) {
      console.log(currentLogoRef.current);
      return;
    }

    html2canvas(currentLogoRef.current, { backgroundColor: null })
      .then((canvas) => {
        const pngImage = canvas.toDataURL("image/png");
        const downloadLink = document.createElement("a");
        downloadLink.href = pngImage;
        downloadLink.download = "dowmloaded-image";
        downloadLink.click();
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
      <Header downloadLogo={downloadLogo} />
      <div className="w-64 fixed">
        <Sidenav selectedIndex={setSelectedIndex} />
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-6 ">
        <div
          className="md:col-span-2 h-screen border shadow-sm p-5
        overflow-auto "
        >
          {selectedIndex === 0 ? (
            <IconController setrefresh={setrefresh} />
          ) : (
            <BackgroundController setrefresh={setrefresh} />
          )}
        </div>

        <div className="md:col-span-3">
          <LogoPreview refresh={refresh} currentLogoRef={currentLogoRef} />
        </div>
        <div className="md:col-span-1"></div>
      </div>
    </>
  );
}

export default App;
