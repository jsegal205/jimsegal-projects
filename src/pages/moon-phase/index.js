import React, { useEffect, useState } from "react";

const MoonPhase = () => {
  const [daysIntoCycle, setDaysIntoCycle] = useState(0);
  const [fractionOfCycle, setFractionOfCycle] = useState(0);

  useEffect(() => {
    const today = new Date();
    const lunarDays = 29.530588853;
    const lunarSeconds = lunarDays * 24 * 60 * 60;
    const knownNewMoon = new Date("01/13/2021 05:00:00 GMT-0000"); // Jan 13, 5:00 a.m.
    const totalSeconds = (today.getTime() - knownNewMoon.getTime()) / 1000;
    const currentSeconds = totalSeconds % lunarSeconds;
    const currentFraction = currentSeconds / lunarSeconds;
    setFractionOfCycle((currentFraction * 100).toFixed(2));

    const currentDays = currentFraction * lunarDays;
    setDaysIntoCycle(currentDays.toFixed(2));
  }, []);

  return (
    <>
      <h1>Moon Phase</h1>
      <div>{fractionOfCycle} % through the lunar cycle </div>
      <div>{daysIntoCycle} days into lunar cycle </div>
      <p>
        Credit to{" "}
        <a
          href="https://minkukel.com/en/various/calculating-moon-phase/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://minkukel.com/en/various/calculating-moon-phase/
        </a>{" "}
        for the calcuation
      </p>
    </>
  );
};

export default MoonPhase;
