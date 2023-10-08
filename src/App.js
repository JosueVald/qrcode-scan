import React from "react";
import { QrScanner } from "react-qrcode-scanner";

function App() {
  const handleScan = (value) => {
    alert(`scaned value is ${value}`);
    document.getElementById("downloader").click();
  };

  const handleError = (error) => {
    console.log({ error });
  };

  return (
    <div className="App">
      <div>Take your Camera to the QR Code</div>
      <a
        id="downloader"
        style={{ display: "none" }}
        href="https://github.com/JosueVald/FastNoteApp-Maui/archive/refs/heads/main.zip"
      >
        Downloder
      </a>
      <QrScanner onScan={handleScan} onError={handleError} />

      {/* <div>
        {[{}].map((item, key) => {
          return <p key={key}>{item.value}</p>;
        })}
      </div> */}
    </div>
  );
}

export default App;
