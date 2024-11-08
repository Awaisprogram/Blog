import React from "react";
import Button2 from "../components/Button2";

const Search = () => {
  return (
    <>
      <div className="mb-8 p-10 bg-gray-100 rounded-lg">
        <input
          type="text"
          placeholder="Search keyword"
          className="w-full p-2 border rounded mb-4"
        />
       <Button2 text="Search"/>
      </div>
    </>
  );
};

export default Search;
