import QRCode from "react-qr-code";
import { useState } from "react";

export default function QrCodeGenerator() {
  const [value, setValue] = useState("");
  const [qrCode, setqrCode] = useState("");

  function handleGenerateQrCode() {
    setqrCode(value);
    setValue("");
  }
  return (
    <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <article>
        <h1>QR Code Generator</h1>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <input onChange={(e) => setValue(e.target.value)} value={value} placeholder="Enter text" type="text" />
          <button disabled={value && value.trim() !== "" ? false : true} onClick={handleGenerateQrCode}>
            Generate
          </button>
        </div>
        <div style={{ height: "auto", margin: "1rem auto", maxWidth: 300, width: "100%" }}>
          <QRCode size={300} style={{ height: "auto", maxWidth: "100%", width: "100%" }} value={qrCode} viewBox={`0 0 256 256`} />
        </div>
      </article>
    </div>
  );
}
