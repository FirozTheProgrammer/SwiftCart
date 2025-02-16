import React from "react";

const SortInputs = ({ sortInput, setSortInput, setIsPriceRange }) => {
  const inputs = [
    { name: "Featured", value: "featured" },
    { name: "Best Selling", value: "best-selling" },
    { name: "Alphabetically, A-Z", value: "title-ascending" },
    { name: "Alphabetically, Z-A", value: "title-descending" },
    { name: "Price, low to high", value: "price-ascending" },
    { name: "Price, high to low", value: "price-descending" },
    { name: "Date, new to old", value: "created-descending" },
    { name: "Date, old to new", value: "created-ascending" },
  ];
  return (
    <div className="shoptab__select d-flex">
      <label htmlFor="SortBy">Sort by :</label>
      <select
        onChange={(e) => {
          setSortInput(e.target.value);
          setIsPriceRange(false);
        }}
        value={sortInput}
        name="SortBy"
        id="SortBy"
      >
        {inputs?.map(({ name, value }, idx) => (
          <option key={idx} value={value}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortInputs;
