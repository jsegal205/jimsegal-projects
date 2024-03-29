import React from "react";
import { apiUrlBase } from "../../utils";

import ReactMarkdown from "react-markdown";

import useFetch from "../../utils/useFetch";
import NotFound from "../not-found";
import Error from "../../components/error";
import Loading from "../../components/loading";

import "../../App.css";
import "./recipe.css";
import { Link } from "react-router-dom";

const getSlug = ({ pathname, state }) => {
  if (state && state.slug) {
    // came from /recipes
    return state.slug;
  }

  // didn't come from /recipes
  const pathNameSplit = pathname.split("/");
  return pathNameSplit[pathNameSplit.length - 1];
};

const Recipe = (props) => {
  const slug = getSlug(props.location);
  const { loading, data: recipe } = useFetch(`${apiUrlBase}/recipe/${slug}`);

  if (loading) {
    return <Loading />;
  }

  if (recipe.status === 404) {
    return <NotFound />;
  }

  if (recipe.error) {
    return <Error componentName="Recipe" />;
  }

  const { title, referenceLink, ingredients, directions, notes } = recipe;

  return (
    <section>
      <div className="recipe-back">
        <Link to="/recipes">All Recipes</Link>
      </div>
      <h2>{title}</h2>
      {referenceLink && (
        <small>
          <a href={referenceLink} target="_blank" rel="noopener noreferrer">
            Original Reference
          </a>
        </small>
      )}
      <h3>Ingredients</h3>
      <button
        data-testid="copy-ingredients"
        onClick={() => {
          navigator.clipboard.writeText(ingredients.replace(/-\s/gm, ""));
        }}
      >
        Copy Ingredients
      </button>
      <div className="ingredients">
        <ReactMarkdown source={ingredients} />
      </div>
      <h3>Directions</h3>
      <div className="directions">
        <ReactMarkdown source={directions} />
      </div>
      {notes && [
        <h3 key="notes-header">Notes</h3>,
        <div key="notes-desc">
          <ReactMarkdown source={notes} />
        </div>,
      ]}
    </section>
  );
};

export default Recipe;
