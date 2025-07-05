import React from "react";
import ReactDOM from "react-dom";

const name = "Merve";
const year = new Date().getFullYear();

ReactDom.render(
  <div>
    <p>Created by {name} </p>
    <p>Copyright {year} </p>
  </div>,

  document.getElementById("root")
);

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser
