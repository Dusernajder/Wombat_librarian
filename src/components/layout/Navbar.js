import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import "../../style/Navbar.css";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchResult(searchTerm);
    setSearchTerm("");
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const removeSearchString = 12;

  return (
    <div className="navbar">
      <ul>
        <li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bookshelf">Bookshelf</Link>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
        </li>
        <li className="search-container">
          {searchResult === null || searchResult !== searchTerm ? null : (
            <Redirect to={{
              pathname: `/search/${searchTerm}`,
              state: {
                removeSearchString: removeSearchString
              }
            }}/>
          )}
          <form>
            <input
              id = "searchForm"
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleChange}
              minLength="3"
            />
            <button type="submit" onSubmit={handleSubmit} disabled={searchTerm === ""} className="fa fa-search">
              Search
            </button>
          </form>
        </li>
      </ul>
    </div>
  );
}
