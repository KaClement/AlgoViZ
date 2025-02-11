import React from "react";
import "./App.css";
import reactLogo from "./assets/React-icon.svg";
import tsLogo from "./assets/Typescript_logo_2020.png";
import csharpLogo from "./assets/Csharp_Logo.png";
import aspnetLogo from "./assets/asp_net_core_logo.png";


export default function footer() {
  return (
      <footer className="footer">
          <p>Built with:</p>
          <div className="tech-logos">
              <img src={reactLogo} alt="React" title="React.js" />
              <img src={tsLogo} alt="TypeScript" title="TypeScript" />
              <img src={csharpLogo} alt="C#" title="C#" />
              <img src={aspnetLogo} alt="ASP.NET Core" title="ASP.NET Core" />
          </div>
      </footer>
  );
}

