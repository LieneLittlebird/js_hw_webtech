/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/label-has-associated-control */

// handle button cliks
// setFilteredData(data.filter.magic)
import { useState } from "react";

import "./form.css";

const CovidForm = ({
  originalData,
  setData,
  casesOrDeaths,
  setCasesOrDeaths,
}) => {
  const [continent, setContinent] = useState("All");
  const [country, setCountry] = useState("All");
  const [yearFrom, setYearFrom] = useState("");
  const [yearTill, setYearTill] = useState("");
  const [weekFrom, setWeekFrom] = useState("");
  const [weekTill, setWeekTill] = useState("");
  const [indicator, setIndicator] = useState(casesOrDeaths);

  const [countrySearch, setCountrySearch] = useState("");
  const searchByCountry = (event) => {
    setCountrySearch(event.target.value);
  };

  const processData = () => {
    let filteredData = originalData;

    // Country
    if (country !== "All") {
      filteredData = filteredData.filter((item) => item.country === country);
    }

    // Year from
    if (yearFrom) {
      filteredData = filteredData.filter(
        (item) => item.year_week.slice(0, 4) >= yearFrom
      );
    }

    // year till

    // week from

    // week till

    // cases or deaths
    setCasesOrDeaths(indicator);
    filteredData = filteredData.filter(
      (item) => item.indicator === indicator.toLowerCase()
    );

    setData(filteredData);
  };

  const continentOptions = originalData
    .map((x) => x.continent)
    .filter((v, i, x) => x.indexOf(v) === i);

  const countryOptions = originalData
    .map((x) => x.country)
    .filter((v, i, x) => x.indexOf(v) === i);

  return (
    <form id="form">
      <div className="form-element" id="continent">
        <label htmlFor="continent-select">Continent:</label>
        <select
          id="continent-select"
          value={continent}
          onChange={(event) => {
            setContinent(event.target.value);
          }}
        >
          <option value="All">All</option>
          {continentOptions.map((continentOption) => (
            <option key={continentOption} value={continentOption}>
              {continentOption}
            </option>
          ))}
        </select>
      </div>
      <div className="form-element" id="country">
        <label htmlFor="country-select">Country:</label>
        <select
          id="country-select"
          value={country}
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        >
          <option value="All">All</option>
          {countryOptions.map((countryOption) => (
            <option key={countryOption} value={countryOption}>
              {countryOption}
            </option>
          ))}
        </select>
      </div>
      <div className="form-element" id="year-from">
        <label htmlFor="year-from">Year from:</label>
        <input
          type="text"
          id="year-from"
          placeholder="YYYY"
          value={yearFrom}
          onChange={(event) => {
            setYearFrom(event.target.value);
          }}
        />
      </div>
      <div className="form-element" id="year-till">
        <label htmlFor="year-till">Year till:</label>
        <input
          type="text"
          id="year-till"
          placeholder="YYYY"
          value={yearTill}
          onChange={(event) => {
            setYearTill(event.target.value);
          }}
        />
      </div>
      <div className="form-element" id="week-from">
        <label htmlFor="week-from">Week from:</label>
        <input
          type="text"
          id="week-from"
          placeholder="Week number"
          value={weekFrom}
          onChange={(event) => {
            setWeekFrom(event.target.value);
          }}
        />
      </div>
      <div className="form-element" id="week-till">
        <label htmlFor="week-till">Week till:</label>
        <input
          type="text"
          id="week-till"
          placeholder="Week number"
          value={weekTill}
          onChange={(event) => {
            setWeekTill(event.target.value);
          }}
        />
      </div>
      <div className="form-element" id="cases-deaths">
        <label htmlFor="cases">Cases</label>
        <input
          type="radio"
          id="cases"
          name="indicator"
          value="Cases"
          onChange={(event) => {
            setIndicator(event.target.value);
          }}
          checked={indicator === "Cases"}
        />
        <label htmlFor="deaths">Deaths</label>
        <input
          type="radio"
          id="deaths"
          name="indicator"
          value="Deaths"
          onChange={(event) => {
            setIndicator(event.target.value);
          }}
          checked={indicator === "Deaths"}
        />
      </div>
      <div className="form-element" id="country-search">
        <label htmlFor="search">Country search:</label>
        <input
          type="search"
          id="search"
          value={countrySearch}
          onChange={searchByCountry}
        />
      </div>
      <button
        id="show-list"
        type="button"
        className="form-element"
        onClick={processData}
      >
        Show list
      </button>
    </form>
  );
};
export default CovidForm;
