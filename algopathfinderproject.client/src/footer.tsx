import React from "react";
import { motion } from "framer-motion";
import "./App.css";
import reactLogo from "./assets/React-icon.svg";
import tsLogo from "./assets/Typescript_logo_2020.png";
import csharpLogo from "./assets/Csharp_Logo.png";
import aspnetLogo from "./assets/asp_net_core_logo.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="carousel-container">
                <motion.div
                    className="carousel"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "mirror",
                        duration: 20,
                        ease: "linear",
                   
                    }}
                >
                    <img className="large-logo" src={reactLogo} alt="React" title="React.js" />
                    <img className="medium-logo" src={tsLogo} alt="TypeScript" title="TypeScript" />
                    <img className="large-logo" src={csharpLogo} alt="C#" title="C#" />
                    <img className="medium-logo" src={aspnetLogo} alt="ASP.NET Core" title="ASP.NET Core" />

                    <img className="large-logo" src={reactLogo} alt="React" title="React.js" />
                    <img className="medium-logo" src={tsLogo} alt="TypeScript" title="TypeScript" />
                    <img className="large-logo" src={csharpLogo} alt="C#" title="C#" />
                    <img className="medium-logo" src={aspnetLogo} alt="ASP.NET Core" title="ASP.NET Core" />

                    <img className="large-logo" src={reactLogo} alt="React" title="React.js" />
                    <img className="medium-logo" src={tsLogo} alt="TypeScript" title="TypeScript" />
                    <img className="large-logo" src={csharpLogo} alt="C#" title="C#" />
                    <img className="medium-logo" src={aspnetLogo} alt="ASP.NET Core" title="ASP.NET Core" />

                </motion.div>
            </div>
        </footer>
    );
}
