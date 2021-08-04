import React, { useState } from "react";
import "./spin.css";

const Spin = () => {
  const [selected, setSelected] = useState(null);
  const [slices, setSlices] = useState(4);
  const onSpin = () => {
    setSelected(Math.ceil(Math.random() * slices));
  };

  const renderWheel = () => {
    return (
      <div className="wheel">
        {[...Array(parseInt(slices)).keys()].map((val) => {
          const degree = (360 / parseInt(slices)) * (val + 1);
          // console.log(degree);
          return (
            <span
              key={`slice-${val}`}
              className={`slice ${val + 1 === selected ? "selected" : ""}`}
              style={{ "--deg": `${degree}deg` }}
            >
              {val + 1}
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <main>
      I wanted to make a spin to win wheel. The out come of this is to have user
      inputs and a wheel that spins using CSS / react animations
      <section>
        <h2>wheel</h2>
        <div className="wheel-container">
          {slices ? renderWheel() : <div>Enter number of slices</div>}
        </div>

        {selected ? (
          <div>number selected: {selected}</div>
        ) : (
          <div>click spin</div>
        )}
        <button onClick={onSpin}>Spin</button>
      </section>
      <aside>
        <h3>Customize</h3>
        <div>
          <label>
            Number of Slices:{" "}
            <input
              type="number"
              onChange={(e) => {
                setSelected(null);
                setSlices(e.target.value);
              }}
              value={slices}
            />
          </label>
        </div>
      </aside>
    </main>
  );
};

export default Spin;
