import React, { useEffect, useState } from "react";

import { apiUrlBase } from "../../utils";
import useFetch from "../../utils/useFetch";
import Error from "../../components/error";

import "../../App.css";
import "./tabletop.css";
import Loading from "../../components/loading";
import SearchFilter from "../../components/search-filter";

const Tabletop = () => {
  const { loading, data: tableTopData } = useFetch(`${apiUrlBase}/games`);

  const [tabletopSearch, setTabletopSearch] = useState("");
  const handleSearchChange = (event) => {
    setTabletopSearch(event.target.value);
  };
  const handleResetClick = () => {
    setTabletopSearch("");
  };

  const [gameList, setGameList] = useState([]);
  useEffect(() => {
    if (!loading && tableTopData) {
      if (tableTopData.error) {
        setGameList([]);
        return;
      }

      const results = tableTopData.filter((game) =>
        game.title.toLowerCase().includes(tabletopSearch.toLowerCase())
      );
      setGameList(results);
    }
  }, [loading, tableTopData, tabletopSearch]);

  return (
    <section>
      <h2>My Tabletop Games</h2>
      {loading && <Loading />}
      {tableTopData && tableTopData.error && <Error componentName="Tabletop" />}
      {tableTopData && tableTopData.length && (
        <>
          <SearchFilter
            searchValue={tabletopSearch}
            handleResetClick={handleResetClick}
            handleSearchChange={handleSearchChange}
          />

          {gameList.length ? (
            <section className="tabletop-cards">
              {gameList.map((game) => (
                <article key={game.title}>
                  <a
                    className="card"
                    href={game.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="card-img"
                      src={game.image}
                      alt={`${game.title} Cover Artwork`}
                    />
                    <h3>{game.title}</h3>
                  </a>
                </article>
              ))}
            </section>
          ) : (
            <div className="tabletop-no-results">
              No results for{" "}
              <strong>
                <em>{tabletopSearch}</em>
              </strong>
            </div>
          )}
        </>
      )}
    </section>
  );
};

export default Tabletop;
