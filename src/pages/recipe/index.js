import React from "react";
import ReactMarkdown from "react-markdown";
import "../../App.css";
import NotFound from "../not-found";

const Recipe = props => {
  const { state } = props.location;
  if (!state) {
    // add endpoint for recipe SHOW, make call here if it's not set.
    return <NotFound />;
  }

  const { title, referenceLink, ingredients, directions } = state;

  return (
    <section>
      <div>
        <h1>{title}</h1>
        <small>
          <a href={referenceLink}>Original Reference</a>
        </small>
      </div>
      <div>
        <h2>Ingredients</h2>
        <ReactMarkdown source={ingredients} />
      </div>
      <div>
        <h2>Directions</h2>
        <ReactMarkdown source={directions} />
      </div>
    </section>
  );
};

export default Recipe;
