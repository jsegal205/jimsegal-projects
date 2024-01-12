import React, { useEffect, useState } from "react";

import "./moon-phase.css";

const MoonPhase = () => {
  const [daysIntoCycle, setDaysIntoCycle] = useState(0);
  const [fractionOfCycle, setFractionOfCycle] = useState(0);
  const [nextNewMoon, setNextNewMoon] = useState(0);
  const [nextFullMoon, setNextFullMoon] = useState(0);
  const [shadowPosition, setShadowPosition] = useState(0);

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

    const newMoon = lunarDays - currentDays;
    setNextNewMoon(newMoon.toFixed(2));

    const lunarFullMoonDay = lunarDays / 2;
    const fullMoon =
      currentDays < lunarFullMoonDay
        ? lunarFullMoonDay - currentDays
        : newMoon + lunarFullMoonDay;
    setNextFullMoon(fullMoon.toFixed(2));

    // something is off with the following maths, figure it out.
    // 0% (new moon or full shadow) === 100px
    // 25% (waxing moon or shadow on left side of moon) === 50px
    // 50% (full moon or no shadow) === 0px
    // 75% (waining moon or shadow on right side of moon) === 150px
    // 100% (new moon full shadow) === 200px

    // something is backwards with this math and the offset
    const shadowOffset = 200 * currentFraction;
    setShadowPosition(
      currentFraction > 0.5 ? shadowOffset - 100 : shadowOffset + 100
    );
  }, []);

  return (
    <article className="moon-container">
      <h1>Moon Phase</h1>

      <p>
        This is an approximate rendering of what tonight's moon will look like
        along with some other stats.
      </p>

      <div className="space">
        <div className="moon"></div>
        <div className="shadow" style={{ left: `${shadowPosition}px` }}></div>
      </div>
      <hr />
      <div>{fractionOfCycle}% through the lunar cycle </div>
      <div>{daysIntoCycle} days into lunar cycle </div>
      <div> Next New Moon in approximately {nextNewMoon} Days</div>
      <div> Next Full Moon in approximately {nextFullMoon} Days</div>
      <p className="moon-credit">
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
    </article>
  );
};

export default MoonPhase;
