import React from "react";
import "./App.css";
import image1 from "./images/cattle.jpeg"; // Import the image
import image2 from "./images/sheep.jpeg"; // Import the image
import image3 from "./images/duck.jpeg"; // Import the image
import image4 from "./images/duck02.jpeg"; // Import the image

function App() {
  return (
    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        marginTop: "20px",
      }}
    >
      <img
        src={image1} // Use the imported image
        alt="Image 1"
        style={{ width: "150px", height: "150px", borderRadius: "10px" }}
      />
      <img
        src={image2} // Use the imported image
        alt="Image 2"
        style={{ width: "150px", height: "150px", borderRadius: "10px" }}
      />
      <img
        src={image3} // Use the imported image
        alt="Image 3"
        style={{ width: "150px", height: "150px", borderRadius: "10px" }}
      />
      <img
        src={image4} // Use the imported image
        alt="Image 4"
        style={{ width: "150px", height: "150px", borderRadius: "10px" }}
      />
    </div>
  );
}

export default App;
