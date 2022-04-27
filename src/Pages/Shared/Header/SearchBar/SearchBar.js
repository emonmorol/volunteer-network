import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { FormControl, InputGroup } from "react-bootstrap";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <>
      <h1 className="uppercase font-bold text-5xl mb-5 mt-3">
        I grow by helping people in need
      </h1>
      <div className="w-2/5 flex flex-col justify-center mb-5">
        <InputGroup className="mb-3">
          <FormControl
            className="py-3    px-3 search-input"
            placeholder="Search Category"
            aria-label="Search Category"
            aria-describedby="search-button"
          />
          <InputGroup.Text id="search-button">
            <FontAwesomeIcon icon={faSearch} />
            <span className="ml-2">SEARCH</span>
          </InputGroup.Text>
        </InputGroup>
      </div>
    </>
  );
};

export default SearchBar;
