import React from "react";
import PWABadge from "./PWABadge";
import video from "./assets/second.mp4";

const videoStyles: React.CSSProperties = {
  maxWidth: "50vw", // adjust the value to change the size
  height: "auto",
  borderRadius: "20px", // add border radius
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)", // add drop shadow
};

function App() {
  return (
    <>
      <main className="flex h-screen justify-center items-center">
        <video autoPlay loop style={videoStyles} controls>
          <source src={video} type="video/mp4" />
        </video>
      </main>
      <PWABadge />
    </>
  );
}

export default App;
