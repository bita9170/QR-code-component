import React from "react";
import qrCodeImage from "./assets/images/image-qr-code.png";

function App() {
  return (
    <main>
      <div>
        <img src={qrCodeImage} alt="QR Code" /><br />
        <h2>Improve your front-end skils by building projects</h2> <br />
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skils
          to the next level
        </p>
      </div>
    </main>
  );
}

export default App;
