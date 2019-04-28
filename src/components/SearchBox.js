import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="input-group mb-3 border border-success">
      <input
        className="form-control "
        onChange={searchChange}
        type="text"
        placeholder="search cats"
      />
    </div>
  );
};

export default SearchBox;
