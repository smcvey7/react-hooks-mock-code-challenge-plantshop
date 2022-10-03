import React, {useState} from "react";

function Search({updateQueriedListing, query, setQuery}) {


  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value = {query}
        onChange={(e)=>setQuery(e.target.value)}
      />
    </div>
  );
}

export default Search;
