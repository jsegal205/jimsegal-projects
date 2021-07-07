import React, { useState } from "react";
import siteBase from "./sites";

import "./placeholder.css";

const defaultPlaceholder = { key: "", h: "", w: "" };

const RandomPlaceholder = () => {
  const [dimensions, setDimensions] = useState({ height: "", width: "" });
  const [placeholder, setPlaceholder] = useState(defaultPlaceholder);
  const [error, setError] = useState(false);

  const renderPlaceholder = () => {
    if (!placeholder.key) {
      return null;
    }

    const baseSrc = siteBase[placeholder.key].apiLink
      ? siteBase[placeholder.key].apiLink
      : placeholder.key;

    return (
      <div className="placeholder" data-testid="placeholder-image">
        This placeholder by{" "}
        <a href={placeholder.key} target="_blank" rel="noopener noreferrer">
          {placeholder.key}
        </a>
        <img
          src={`${baseSrc}${placeholder.w}${
            siteBase[placeholder.key].delimiter
          }${placeholder.h}`}
          alt={`placeholder sourced from ${placeholder.key}`}
        />
      </div>
    );
  };

  return (
    <section>
      Overwhelmed with the placeholder image sites for your designs? Let me
      aggregrate all the favorites!
      <div className="dimensions">
        <h3>Enter dimensions</h3>
        <div>
          <div className="input">
            <div className="col one-third">
              <label>Height:</label>
            </div>
            <div className="col two-third">
              <input
                data-testid="placeholder-height"
                type="number"
                className={`${
                  error && !dimensions.height ? "placeholder-input-error" : ""
                }`}
                value={dimensions.height}
                onChange={(e) =>
                  setDimensions({ ...dimensions, height: e.target.value })
                }
              />
              <label>(px)</label>
            </div>
          </div>
          <div className="input">
            <div className="col one-third">
              <label>Width:</label>
            </div>
            <div className="col two-third">
              <input
                data-testid="placeholder-width"
                type="number"
                className={`${
                  error && !dimensions.width ? "placeholder-input-error" : ""
                }`}
                value={dimensions.width}
                onChange={(e) =>
                  setDimensions({ ...dimensions, width: e.target.value })
                }
              />
              <label>(px)</label>
            </div>
          </div>
        </div>
        <button
          className="placeholder-btn"
          data-testid="placeholder-submit"
          onClick={() => {
            if (!dimensions.height || !dimensions.width) {
              setError(true);
              setPlaceholder(defaultPlaceholder);
            } else {
              setError(false);
              const baseIdx = Math.floor(
                Math.random() * Object.keys(siteBase).length
              );
              setPlaceholder({
                key: Object.keys(siteBase)[baseIdx],
                h: dimensions.height,
                w: dimensions.width,
              });
            }
          }}
        >
          Get Random Placeholder Image
        </button>
        {error && (
          <div className="placeholder-error" data-testid="placeholder-error">
            Please enter height and width
          </div>
        )}
      </div>
      {renderPlaceholder()}
    </section>
  );
};

export default RandomPlaceholder;
