"use client";
import { useState } from "react";
import Navbar from "./components/modules/Navbar";
import Profile from "./components/modules/Profile";
import About from "./components/modules/About";
import Inicio from "./components/modules/page/Inicio";
import Passado from "./components/modules/page/Passado";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("inicio");

  const renderSection = () => {
    switch (currentSection) {
      case "inicio":
        return <Inicio />;
      case "passado":
        return <Passado />;
      default:
        return <Inicio />;
    }
  };

  return (
    <>
      <Navbar />
      <Profile />
      <About onSelect={setCurrentSection} />
      {renderSection()}
    </>
  );
}
