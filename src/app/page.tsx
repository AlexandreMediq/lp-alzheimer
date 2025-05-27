"use client";
import { useState } from "react";
import Navbar from "./components/modules/Navbar";
import Profile from "./components/modules/Profile";
import About from "./components/modules/About";
import Start from "./components/modules/page/Start";
import Past from "./components/modules/page/Past";

export default function Home() {
  const [currentSection, setCurrentSection] = useState("start");

  const renderSection = () => {
    switch (currentSection) {
      case "start":
        return <Start />;
      case "past":
        return <Past />;
      default:
        return <Start />;
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
