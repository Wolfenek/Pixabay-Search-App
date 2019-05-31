import React from 'react';
import PropTypes from 'prop-types';

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

SearchField.propTypes = {
  onTextChange: PropTypes.func.isRequired
}

export default SearchField;