import React from 'react';

const SearchField = (props) => {
  return (
    <div>
      <div className='search'>
          <input 
          name='search'
          onChange={props.onTextChange}
          placeholder='Search...'
          ></input>
        </div>
    </div>
  );
};

export default SearchField;