import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { apiUrlBase } from "../../utils";
import useFetch from "../../utils/useFetch";
import Error from "../../components/error";

import "../../App.css";
import "./recipes.css";
import Loading from "../../components/loading";
import SearchFilter from "../../components/search-filter";

const Recipes = () => {
  const { loading, data: recipes } = useFetch(`${apiUrlBase}/recipes`);

  const [recipeSearch, setRecipeSearch] = useState("");
  const handleSearchChange = (event) => {
    setRecipeSearch(event.target.value);
  };
  const handleResetClick = () => {
    setRecipeSearch("");
  };

  const [recipeList, setRecipeList] = useState([]);
  useEffect(() => {
    if (!loading && recipes) {
      if (recipes.error || !Array.isArray(recipes)) {
        setRecipeList([]);
        return;
      }

      const results = recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(recipeSearch.toLowerCase())
      );
      setRecipeList(results);
    }
  }, [loading, recipes, recipeSearch]);

  return (
    <section>
      <h2>Recipes</h2>
      {loading && <Loading />}
      {!loading && recipes && recipes.error && (
        <Error componentName="Recipes" />
      )}
      {!loading && recipes && recipes.length !== 0 && (
        <>
          <SearchFilter
            searchValue={recipeSearch}
            handleResetClick={handleResetClick}
            handleSearchChange={handleSearchChange}
          />
          {!!recipeList.length ? (
            <ul className="recipes-list" data-testid="recipes-list">
              {recipeList.map((recipe) => (
                <li key={recipe.slug}>
                  <Link
                    to={{
                      pathname: `/recipe/${recipe.slug}`,
                      state: { ...recipe },
                    }}
                  >
                    {recipe.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="recipes-no-results">
              No results for{" "}
              <strong>
                <em>{recipeSearch}</em>
              </strong>
            </div>
          )}
        </>
      )}
      {(!loading && recipes && recipes.length === 0) ||
        (!loading && recipeSearch === "" && recipeList.length === 0 && (
          <div className="recipes-no-results" data-testid="recipes-no-results">
            OH NO! There definitely should be some.
            <br />
            <img
              src="https://em-content.zobj.net/source/microsoft-teams/337/thinking-face_1f914.png"
              alt="thinking face emoji"
              height="100px"
              width="100px"
            />
            <br />
            Try refreshing the page to get results.
          </div>
        ))}
    </section>
  );
};

export default Recipes;
